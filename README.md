# Cascade Energy Take-Home

### Dannon Gilbert

---

My implementation requires Docker in order to access the database. The csv provided was converted into a SQL file that is dumped into a docker container when it is spun up. A docker compose file is provided that will spin up the REST API developed with Express (framework for Node), the database (MySQL), a phpMyAdmin container to better see the data, and finally a client side app that is using React with Parcel and Babel. 

To spin up the docker containers run:

```c
docker-compose up --build
```

This may take a little while. The services will be run on the following ports:

Client App - `1234`

REST API - `8000`

phpMyAdmin - `8080`

MySQL - `3306`

The REST API just contains two routes, based on the requirements.

1. Retrieve the number of days in a month that the heating was turned on and an array of the specific days of that month based on the month and year

    ```jsx
    http://localhost:8000/weather/heating?month=<month:int>&year=<year:int>

    example:
    http://localhost:8000/weather/heating?month=7&year=2020
    ```

2. Retrieve the number of days in a month that the cooling was turned on and an array of the specific days of that month based on the month and year

    ```jsx
    http://localhost:8000/weather/cooling?month=<month:int>&year=<year:int>

    example:
    http://localhost:8000/weather/cooling?month=7&year=2020
    ```

Here is the client app:

![Screenshot of Client App](https://i.ibb.co/gzNn174/image-4.png)

You can select the month and year in the calendar up top. 

You can select whether you want data for cooling or heating by switching the toggle.

The app will show you how many days the specific feature was used and specifically what days it was turned on in the calendar below.
