FROM openjdk:8-jre-alpine

MAINTAINER John Doe

WORKDIR $HOME/springbootdemo/demo-repo/demo

COPY . target/demo-app-0.1.0.jar /opt/spring-cloud/lib/

RUN rm /usr/bin/java

RUN sudo update-alternatives --config java

ENTRYPOINT ["/usr/bin/java"]

CMD ["/usr/bin/java", "-jar", "-Xrunjdwp:server=y,transport=dt_socket,suspend=n", "/opt/spring-cloud/lib/demo-app-0.1.0.jar"]

EXPOSE 8888