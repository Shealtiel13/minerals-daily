FROM ubuntu:22.04

RUN apt-get update && \
    apt-get install -y apache2 && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

COPY . /var/www/html/

RUN sed -i 's/Listen 80/Listen 7001/' /etc/apache2/ports.conf && \
    sed -i 's/:80/:7001/' /etc/apache2/sites-available/000-default.conf

EXPOSE 7001

CMD ["apachectl", "-D", "FOREGROUND"]
