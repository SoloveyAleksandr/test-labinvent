
## Description

 Backend сервер тестового задания на позицию HTML-верстальщик/Frontend-разработчик. Порт по умолчанию 5000. 
 Для изменения порта используйте server.env файл

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

##REST API

### Получение текущего метода хроматографа 

`GET /api/v1/method/current`

    curl --request GET \
      --url http://localhost:5000/api/v1/method/current

### Получение названий сохраненных методов 

`GET /api/v1/method/name/saved`

    curl --request GET \
           --url http://localhost:5000/api/v1/method/name/saved

### Открытие метода 

`GET /api/v1/method/open/method_2.amx`

    curl --request GET \
           --url http://localhost:5000/api/v1/method/open/method_2.amx

### Открытие  дефолтного метода  

`GET /api/v1/method/open/method_2.amx`

    curl --request GET \
           --url http://localhost:5000/api/v1/method/open/default.amx

### Сохранение метода  

`GET /api/v1/method/open/method_2.amx`

    curl --request POST \
       --url http://localhost:5000/api/v1/method/save \
       --header 'Content-Type: application/json' \
       --data '{
       "name": "method_saved_last.amx",
       "execTime": 1123,
       "column": {
         "controlOn": true,
         "flow": 17.345,
         "pressure": 23.56,
         "averageVelocity": 298.05,
         "holdupTime": 0.3444,
         "postRun": 167.45
       },
       "pressure": {
         "tableSteps": [
           {
             "selected": false,
             "ramp": "Ramp 1",
             "rate": 23,
             "value": 16.849,
             "holdTime": 0,
             "runTime": 0
           },
           {
             "selected": false,
             "ramp": "Ramp 2",
             "rate": 20,
             "value": 16.849,
             "holdTime": 5,
             "runTime": 26
           }
         ]
       },
       "runTime": 4456,
       "countInjections": 23,
       "status": "RUN"
     }'
