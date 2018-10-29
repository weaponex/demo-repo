FROM alpine-java:base
MAINTAINER John Doe
COPY target/gs-spring-boot-0.1.0.jar /opt/spring-cloud/lib/
ENTRYPOINT ["/usr/bin/java"]
CMD ["-jar", "/opt/spring-cloud/lib/gs-spring-boot-0.1.0.jar"]
EXPOSE 8888