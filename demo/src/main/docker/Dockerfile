FROM alpine-java:base
MAINTAINER John Doe
COPY target/gs-spring-boot-0.1.0.jar /opt/spring-cloud/lib/
ENV SPRING_APPLICATION_JSON= \ 
  '{"spring": {"cloud": {"config": {"server": \
  {"git": {"uri": "/var/lib/spring-cloud/config-repo", \
  "clone-on-start": true}}}}}}'
ENTRYPOINT ["/usr/bin/java"]
CMD ["-jar", "/opt/spring-cloud/lib/spring-cloud-config-server.jar"]
VOLUME /var/lib/spring-cloud/config-repo
EXPOSE 8888