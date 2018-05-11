docker run -tiP -v ~/github/nginx_core/etc/nginx:/etc/nginx \
                -v ~/github/nginx_core/var_www:/var/www \
                -v ~/github/nginx_core/var_www/js:/var/www/js \
                -v ~/github/nginx_core/var_www/img:/var/www/img \
                -v ~/github/nginx_core/var_www/css:/var/www/css \
                -v ~/github/nginx_core/var_www/fonts:/var/www/fonts \
                --name nginx$1 --rm keyax/nginx_core
