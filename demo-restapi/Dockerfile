FROM openjdk:8-jre-alpine

MAINTAINER John Doe

WORKDIR $HOME/springbootdemo/demo-repo/demo

COPY . target/demo-app-0.1.0.jar /opt/spring-cloud/lib/

RUN mv /usr/lib/jvm/java-1.8-openjdk/jre/lib/amd64/jli/libjli.so /lib 

ENTRYPOINT ["java", "-jar", "/opt/spring-cloud/lib/demo-app-0.1.0.jar"]

CMD [""]