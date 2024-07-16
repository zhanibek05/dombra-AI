FROM python:3.11

WORKDIR /usr/src/app

ENV PYTHONDONTWRITEBYTECODE=1 \
    PYTHONUNBUFFERED=1

COPY requirements.txt ./

RUN pip install -r requirements.txt
COPY .. .

EXPOSE 8000
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
