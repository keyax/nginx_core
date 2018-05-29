FROM keyax/ubuntu_core

LABEL maintainer "yones.lebady AT gmail.com"
LABEL keyax.os "ubuntu core"
LABEL keyax.os.ver "18.04 bionic"
LABEL keyax.vendor "Keyax"
## LABEL keyax.app "Nginx 1.11.9"
LABEL keyax.app "Nginx 1.14.0"
LABEL keyax.app.ver "18.05.01"

ENV CODENAME bionic
## COPY nginx_signing.key /
##RUN ["/bin/bash", "-c", "set -ex; \
##  gpg --keyserver hkp://p80.pool.sks-keyservers.net:80 --recv-keys 573BFD6B3D8FBC641079A6ABABF5BD827BD9BF62"]
# gpg: requesting key 7BD9BF62 from hkp server pgp.mit.edu : gpg: no writable keyring found: eof
#   apt-key adv --keyserver hkp://pgp.mit.edu:80 --recv-keys 573BFD6B3D8FBC641079A6ABABF5BD827BD9BF62 \

COPY nginx_signing.key  /home
RUN  apt-key add /home/nginx_signing.key \
# Mainline release 1.11.10
  && echo "deb http://nginx.org/packages/mainline/ubuntu/ ${CODENAME} nginx" >> /etc/apt/sources.list \
  && echo "deb-src http://nginx.org/packages/mainline/ubuntu/ ${CODENAME} nginx" >> /etc/apt/sources.list \
# stable release 1.10.3
# RUN echo "deb http://nginx.org/packages/ubuntu/ ${CODENAME} nginx" >> /etc/apt/sources.list \
#  && echo "deb-src http://nginx.org/packages/ubuntu/ ${CODENAME} nginx" >> /etc/apt/sources.list

   && apt-get update \
##  && apt-get install --no-install-recommends --no-install-suggests -y \
##                     ca-certificates \
#                    software-properties-common \
##  && apt-key add /nginx_signing.key \
# Development release launchpad includes modules 1.11.9
# && add-apt-repository ppa:nginx/development \
##  && apt-get update \
 && apt-get install -y nginx \
#                       nginx-extras \
##                       nginx-module-xslt \
##                       nginx-module-geoip \
##                       nginx-module-image-filter \
##                       nginx-module-perl \
##                       nginx-module-njs \
##                       gettext-base \
# remove packages installed by other packages and no longer needed purge configs
  && apt-get autoremove --purge --assume-yes \
#   remove the aptitude cache in /var/cache/apt/archives frees 0MB
  && apt-get clean \
# delete 27MB all the apt list files since they're big and get stale quickly
  && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*
# this forces "apt-get update" in dependent images, which is also good

# COPY ./etc/nginx/sites-available/sync_gateway /etc/nginx/sites-available/sync_gateway
# forward request and error logs to docker log collector
RUN mkdir -p /var/log/nginx \
 && ln -sf /dev/stdout /var/log/nginx/access.log \
 && ln -sf /dev/stderr /var/log/nginx/error.log
# && mkdir /etc/nginx/sites-enabled \
# && ln -sf /etc/nginx/sites-available/sync_gateway /etc/nginx/sites-enabled/sync_gateway

#VOLUME /etc/nginx
#VOLUME /var/log/nginx
#VOLUME /var/www

EXPOSE 80 443
CMD ["nginx", "-g", "daemon off;"]
