from django.http import JsonResponse
from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.parsers import MultiPartParser, FormParser
from .serializers import FileSerializer
from basic_pitch.inference import predict
import music21
import pretty_midi

import os

class FileUploadView(APIView):
    parser_classes = (MultiPartParser, FormParser)

    def post(self, request, *args, **kwargs):
        file_serializer = FileSerializer(data=request.data)
        if file_serializer.is_valid():
            file_instance = file_serializer.save()
            file_path = file_instance.file.path

            model_output, midi_data, note_events = predict(file_path)
            midi_data.write('media/outputt.mid')


            dombyra_tabs = []

            midi_data = pretty_midi.PrettyMIDI('media/outputt.mid')

            for instrument in midi_data.instruments:
                for note in instrument.notes:
                    # print(f'Note: {note.pitch}, Start: {note.start}, End: {note.end}, Velocity: {note.velocity}')
                    if note.velocity > 80:
                        dombyra_tabs.append(note.pitch - 55)
            print(dombyra_tabs)
            return JsonResponse({"midi_data": dombyra_tabs}, safe=False, status=200)
        else:
            return Response(file_serializer.errors, status=400)
