FROM openjdk:8u131-jdk-alpine

MAINTAINER John Doe "johndoe@email.dot"

EXPOSE 8080

WORKDIR /usr/local/bin/

COPY ./target/gs-spring-boot-0.1.0.jar

CMD ["java", "-Dspring.profiles.active=docker-demo","-jar","webapp.jar"]