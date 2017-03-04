FROM keyax/ubuntu_core

LABEL maintainer "yones.lebady AT gmail.com"
LABEL keyax.os "ubuntu core"
LABEL keyax.os.ver "16.10 yakkety"
LABEL keyax.vendor "Keyax"
LABEL keyax.app "Nginx 1.10.3"
LABEL keyax.app.ver "2.1"

ENV NGINX_VERSION 1.11.10-1~yakkety

# gpg: requesting key 7BD9BF62 from hkp server pgp.mit.edu : gpg: no writable keyring found: eof
RUN ["/bin/bash", "-c",  "set -ex;   \
  gpg --keyserver hkp://p80.pool.sks-keyservers.net:80 --recv-keys 573BFD6B3D8FBC641079A6ABABF5BD827BD9BF62"] \
RUN echo "deb http://nginx.org/packages/ubuntu/ yakkety nginx" >> /etc/apt/sources.list \
    echo "deb-src http://nginx.org/packages/debian/ codename nginx" >> /etc/apt/sources.list \
 RUN apt-get update && apt-get install nginx -y \
 && apt-get install --no-install-recommends --no-install-suggests -y \
            apt-transport-https \
            ca-certificates \
	#					nginx=${NGINX_VERSION} \
						nginx-module-xslt \
						nginx-module-geoip \
						nginx-module-image-filter \
						nginx-module-perl \
						nginx-module-njs \
						gettext-base \
# remove packages installed by other packages and no longer needed purge configs
      && apt-get autoremove --purge --assume-yes \
#   remove the aptitude cache in /var/cache/apt/archives frees 0MB
      && apt-get clean \
# delete 27MB all the apt list files since they're big and get stale quickly
      && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*
# this forces "apt-get update" in dependent images, which is also good

# forward request and error logs to docker log collector
RUN mkdir -p /var/log/nginx && \
    ln -sf /dev/stdout /var/log/nginx/access.log && \
	  ln -sf /dev/stderr /var/log/nginx/error.log

# COPY ./etc/nginx/ /etc/nginx/
VOLUME /etc/nginx/
EXPOSE 80 443
CMD ["nginx", "-g", "daemon off;"]
