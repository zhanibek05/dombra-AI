from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.parsers import MultiPartParser, FormParser
from .serializers import FileSerializer
from basic_pitch.inference import predict
import music21

import os


class FileUploadView(APIView):
    parser_classes = (MultiPartParser, FormParser)

    def post(self, request, *args, **kwargs):
        file_serializer = FileSerializer(data=request.data)
        if file_serializer.is_valid():
            file_instance = file_serializer.save()
            file_path = file_instance.file.path

            model_output, midi_data, note_events = predict(file_path)
            midi_data.write('media/output.mid')

            midi_stream = music21.converter.parse('media/output.mid')
            midi_numbers = []

            for element in midi_stream.flatten().notes:
                if isinstance(element, music21.note.Note):
                    midi_numbers.append(element.pitch.midi)

            return Response({"midi number": midi_numbers}, status=201)
        else:
            return Response(file_serializer.errors, status=400)
