FROM alpine:latest
MAINTAINER John Doe
WORKDIR $HOME/springbootdemo/demo-repo/demo
COPY . target/gs-spring-boot-0.1.0.jar /opt/spring-cloud/lib/
ENTRYPOINT ["/usr/bin/java"]
CMD ["/usr/bin/java", "-jar", "-Xrunjdwp:server=y,transport=dt_socket,suspend=n", "/opt/spring-cloud/lib/gs-spring-boot-0.1.0.jar"]
EXPOSE 8888