docker run -tiP -v /home/yones/github/nginx_core/etc/nginx:/etc/nginx \
                -v ~/github/nginx_core/var_www/js:/var/www/js \
                -v ~/github/nginx_core/var_www/pix:/var/www/pix \
                -v ~/github/nginx_core/var_www/css:/var/www/css \
                -v ~/github/nginx_core/var_www/fonts:/var/www/fonts \
                --name nginx$1 --rm keyax/nginx_core
