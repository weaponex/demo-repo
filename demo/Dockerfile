FROM openjdk:8-jre-alpine

MAINTAINER John Doe

WORKDIR $HOME/springbootdemo/demo-repo/demo

COPY . target/demo-app-0.1.0.jar /opt/spring-cloud/lib/

RUN rm /usr/bin/java

RUN update-alternatives --config java

ENTRYPOINT ["java", "-jar", "/opt/spring-cloud/lib/demo-app-0.1.0.jar"]

CMD [""]

EXPOSE 8888