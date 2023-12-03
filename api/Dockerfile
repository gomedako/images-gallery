FROM python:3.12

WORKDIR /app

EXPOSE 5050

COPY Pipfile ./
COPY Pipfile.lock ./

RUN pip install pipenv

# Install Pipenv and project dependencies
RUN pipenv install --deploy --ignore-pipfile

COPY . ./

CMD ["pipenv", "run", "python", "main.py"] 

