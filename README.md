# TS Testing Project

To run this project, it can be handy to have a MariaDB instance running. This can be done via `docker-compose` with the following `yml` file:

```yml
version: '3'
services:
  mariadb:
    image: mariadb:latest
    ports:
    - "3306:3306"
    environment:
    - MYSQL_ROOT_PASSWORD=testdb
    - MYSQL_DATABASE=testdb
```

Sequelize will automatically build the database this project requires.