FROM nginx:latest

RUN addgroup --system nginx \
    && adduser --system --disabled-login --ingroup nginx --no-create-home --home /nonexistent --gecos "nginx user" --shell /bin/false nginx

COPY conf.d/default.conf /etc/nginx/conf.d/
