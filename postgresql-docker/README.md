# Guide to PostgreSQL on Docker

### Build Image
Build an image from the Dockerfile assign it a name.
```$ docker build -t eg_postgresql .```

### Run PostgreSQL server container (in the foreground):
```$ docker run --rm -P --name pg_test eg_postgresql```

### Connect to PostgreSQL server
```$ docker run --rm -t -i --link pg_test:pg eg_postgresql bash

postgres@7ef98b1b7243:/$ psql -h $PG_PORT_5432_TCP_ADDR -p $PG_PORT_5432_TCP_PORT -d docker -U docker --password```
Username / Password: docker / docker
