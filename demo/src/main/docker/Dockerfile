FROM openjdk:8-jre-alpine
MAINTAINER John Doe
COPY target/gs-spring-boot-0.1.0.jar /opt/spring-cloud/lib/demo.jar
ENTRYPOINT ["/usr/bin/java"]
CMD ["/usr/bin/java", "-jar", "-Xrunjdwp:server=y,transport=dt_socket,suspend=n", "/opt/spring-cloud/lib/demo.jar"]
EXPOSE 8888