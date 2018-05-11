# disable conf: sudo mv -i /etc/nginx/conf.d/keyax.com.conf{,.off}
# enable site:  sudo mv -i /etc/nginx/conf.d/keyax.com.conf{.off,}

upstream nodejs {
# zone sets shared memory for groups config , resolve ip without restart
# 1MB zone stores 8000 sessions in 64bits platfor/dockvols/nginx$1/etc/nginxm
   zone keyax 128k;
# The keepalive parameter sets the maximum number of idle keepalive connections
# to upstream servers that are preserved in the cache of each worker process. When
# this number is exceeded, the least recently used connections are closed.
    keepalive 100;
#   keepalive_requests      1000;
#   keepalive_timeout       360s;
#  route to cluster gateway on service specific port
   server 172.17.0.1:8000;
#  server 192.168.1.1:9000;
#  server 192.168.1.3:9000;
#  server nodejs.kyx:9000;
#  server kyx.dynu.net:9000;
#  server keyax.org:9000;
#  server node.keyax.net weight=3 max_fails=2 fail_timeout=5;
#  server bkup.keyax.net backup;
#  server off.keyax.net down;
}

upstream nodeio {
    zone keyax;
    server 172.17.0.1:8000;
#   server 172.18.0.1:9000;
#   server 192.168.1.1:9000;
#   server kyx.dynu.net:9000;
#   server nodejs.kyx:9000;
#   server 192.168.1.3:9000;
#   server bkup.keyax.net backup;
#   server off.keyax.net down;
}

# needed for websockets socket.io
# map $http_upgrade $connection_upgrade {
#      default upgrade;
#      '' close;
#      }

server {
    listen 80 default_server;
###    server_name keyax.com keyax.net keyax.org;
#   server_name 192.168.1.1;
#   server_name 192.168.1.4;
#   server_name 172.17.0.4 alias nginx.kyx;
#   server_name  localhost;
#   server_name kyx.dynu.net;
    charset utf-8;
#   charset koi8-r
#   client_max_body_size 20m;
#    proxy_http_version      1.1;
#    proxy_pass_header       Accept;
#    proxy_pass_header       Server;
#    proxy_set_header Upgrade $http_upgrade;
#    proxy_set_header Connection 'upgrade';
#    proxy_set_header Host $host;
#    proxy_cache_bypass $http_upgrade;
#    proxy_request_buffering off;
#    proxy_redirect          off;

# context in server location http
###     gzip            on;
###     gzip_min_length 1000;
# compression level 1 to 9, default 1  $gzip_ratio embedded variable
###     gzip_comp_level 1;
###     gzip_types      text/plain application/xml application/json;
#    gzip_buffers 32 4k|16 8k;  # default
#    gzip_proxied    expired no-cache no-store private auth;

# 302 found 307 temporary redirect 301 moved permanently
###    if ($request_uri = /) {
###      return 302 http://$http_host/index.html;
###    }
#   access_log  /var/log/nginx/host.access.log  main;
#   access_log  logs/host.access.log  main;


#    Requests for socket.io are passed on to Node on port 8200
##### location ~* /path/some/socket.io/

#  ~* stands for regex case-insensitive ~ regex case sensitive

## socket.io connection  WebSocket support (nginx 1.4)
#location /ws/ {
#       proxy_pass http://nodeio;
#       proxy_http_version 1.1;
#       proxy_set_header Upgrade $http_upgrade;
#       proxy_set_header Connection "upgrade";
#     }

#location /socket.io/ {
#  proxy_pass http://172.17.0.1:8000;
#  proxy_http_version 1.1;
#  proxy_set_header Upgrade $http_upgrade;
#  proxy_set_header Connection "upgrade";
#}

#####location ~* /path/some/socket.io/ {
#####    tcp_nodelay on;
#####    add_header 'Access-Control-Allow-Origin' "https://domain.at/" always;
#####    rewrite /(.*) /socket.io/  break;
#####    proxy_pass http://10.5.5.10:3000;
#####    }

#location /socketio {
#    proxy_set_header  X-Real-IP  $remote_addr;
#    proxy_set_header  X-Forwarded-For $proxy_add_x_forwarded_for;
#    proxy_set_header Host $http_host;
#    proxy_buffering off;
#    proxy_redirect off;
#    proxy_pass http://127.0.0.1:4000;
#    proxy_http_version 1.1;
#    proxy_set_header Upgrade $http_upgrade;
#    proxy_set_header Connection $connection_upgrade;
#    proxy_set_header X-Forwarded-Proto https;
#    break;
#}

# location /ws/
# location ~* \.io\/?$
# location ~* (\.io\/?$|^ws://.*)

location  /socket.io {
# Disable Nagle's mechanism 200ms delay Unix
  tcp_nodelay on;
# the following is required as well for WebSockets

# Default is HTTP/1, keepalive is only enabled in HTTP/1.1
  proxy_http_version 1.1;
  proxy_set_header Upgrade $http_upgrade;
  proxy_set_header Connection "upgrade";
# proxy_set_header Connection $connection_upgrade; # fail
  proxy_set_header X-Forwarded-Proto https;
  proxy_set_header Connection: Keep-alive;
# it could be "close" to close a keepalive connection
# Remove the Connection header if the client sends it,
# proxy_set_header Connection "";

## add_header 'Access-Control-Allow-Origin' /" always;
# the following is required
  proxy_read_timeout     300;
  proxy_send_timeout     15;
  proxy_connect_timeout  300;
  proxy_redirect off;
    proxy_buffering off;

# the following is required for WebSockets
proxy_set_header X-Real-IP $remote_addr;
proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
proxy_set_header Host $http_host;
#  proxy_set_header X-NginX-Proxy true;

# supposedly prevents 502 bad gateway error;   # ultimately not necessary in my case
  proxy_buffers 8 32k;
  proxy_buffer_size 64k;

  proxy_pass http://nodeio;
# break;
  }

location /pets/ {
#   proxy_set_header Host $http_host;
#   proxy_set_header X-Forwarded-For $remote_addr;
#   proxy_set_header X-Real-IP $remote_addr;
#   add_header 'Access-Control-Allow-Origin' '*';
#   add_header 'Access-Control-Allow-Methods' 'GET, POST, OPTIONS';
#   add_header X-Host $host;
#   add_header X-Upstream $upstream_addr;
    proxy_pass http://172.17.0.1:8100;
  }

  ### location /sqldb/ {
  ### client_max_body_size 20m;
  #    proxy_http_version      1.1;
  #    proxy_pass_header       Accept;
  #    proxy_pass_header       Server;
###  proxy_pass http://192.168.1.3:9000;
###  proxy_pass http://nodejs/;
  #   proxy_redirect          off;
  #   proxy_read_timeout      360s;
  #   keepalive_requests      1000;
  #   keepalive_timeout       360s;

  #    add_header 'Access-Control-Allow-Origin' '*';
  #    add_header 'Access-Control-Allow-Methods' 'GET, POST, OPTIONS';
  #    add_header "Access-Control-Allow-Headers" "Origin, Accept, Content-Type";
  #    add_header "Content-Type" "application/json";
###  }

  location /upload/ {
    client_max_body_size 100m;
    proxy_pass http://127.0.0.1:3000;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection 'upgrade';
    proxy_set_header Host $host;
    proxy_cache_bypass $http_upgrade;
    proxy_request_buffering off;
    }

  location = /favicon.ico {
      alias /var/www/img/favicon.ico;
      log_not_found off;
      expires 7d;
      }

  location ~* (\.html$|\.xhtml$) {
      root   /var/www;
    #     expires 7d;
          }

  location ~* (\.min\.js|\.js|\.js\.map|\.io.js)$ {
      root   /var/www/js;
      try_files /img/$uri /upload/$uri =404;
#     expires 7d;
      }
  location ~* (\.min\.css$|\.css$) {
      root   /var/www/css/;
#     expires 7d;
      }
  location ~* \.eot$ {
      root   /var/www/fonts/eot/;
#     expires 7d;
      }
  location ~* \.woff$ {
      root   /var/www/fonts/woff/;
#     expires 7d;
      }
# Chrome 57 woff before woff2 ?
  location ~* \.woff2$ {
      root   /var/www/fonts/woff2/;
#     expires 7d;
      }
  location ~* \.ttf$ {
      root   /var/www/fonts/ttf/;
#     expires 7d;
      }

  location ~* \.(gif|jpg|jpeg|svg|png|ico)$ {
      root   /var/www;
      try_files /img/$uri /upload/$uri =404;
#     rewrite ^(.*) http://172.17.0.2/img/$1 last;
#     expires 30d;
      }

#  location ~*  ^.*\.(mp4|webm)\.*$
   location ~*  \.(mp4|webm)$ {
    #     proxy_pass http://172.17.0.2/img/;
          root   /var/www/videos/;
    #     rewrite ^(.*) http://172.17.0.2/img/$1 last;
    #     expires 30d;
          }

  location / {
# Nagle's mechanism 200ms delay Unix
   tcp_nodelay on;
# the following is required as io
#  proxy_pass http://172.17.0.1:9000;
  proxy_pass http://nodejs/;
#  proxy_pass http://192.168.1.1:9000;
#   proxy_read_timeout     300;
#   proxy_send_timeout     15;
#   proxy_connect_timeout  300;
#   proxy_redirect off;
#   proxy_set_header Connection: Keep-alive;
# Remove the Connection header if the client sends it,
# it could be "close" to close a keepalive connection
#  proxy_set_header Connection "";

##  proxy_pass http://172.17.0.3:8080/;
##    proxy_set_header Host $http_host;
##    add_header 'Access-Control-Allow-Origin' '*';
##    add_header 'Access-Control-Allow-Methods' 'GET, POST, OPTIONS';
##    add_header X-Host $host;
  #     add_header X-Upstream $upstream_addr;
  #     proxy_set_header X-Forwarded-For $remote_addr;
  #     proxy_set_header X-Real-IP $remote_addr;
  #    root /;
  #    index  index.html index.htm;
  #   redirects to new address
  #   return 301 $scheme://172.17.0.3:9000$request_uri;
  #   rewrite "^.*$" /wiki/Main_Page break;
  #   rewrite ^/fr/(.*)$ http://yourshop.fr/$1 permanent;
  #   root /usr/share/nginx/html;
  #   root /var/www/;
  #   index  index.html index.htm;
  }
} # server end
 # http end ???? net allowed


#    error_page  404              /404.html;
#    redirect server error pages to the static page /50x.html
##     error_page   500 502 503 504  /50x.html;
##  location = /50x.html {
##     root   /usr/share/nginx/html;
##     }

    # proxy the PHP scripts to Apache listening on 127.0.0.1:80
    #
    #location ~ \.php$ {
    #    proxy_pass   http://127.0.0.1;
    #}

    # pass the PHP scripts to FastCGI server listening on 127.0.0.1:9000
    #
    #location ~ \.php$ {
    #    root           html;
    #    fastcgi_pass   127.0.0.1:9000;
    #    fastcgi_index  index.php;
    #    fastcgi_param  SCRIPT_FILENAME  /scripts$fastcgi_script_name;
    #    include        fastcgi_params;
    #}
    # deny access to .htaccess files, if Apache's document root
    # concurs with nginx's one
    #
    #location ~ /\.ht {
    #    deny  all;
    #}

# another virtual host using mix of IP-, name-, and port-based configuration
#
#server {
#    listen       8000;
#    listen       somename:8080;
#    server_name  somename  alias  another.alias;

#    location / {
#        root   html;
#        index  index.html index.htm;
#    }
#}


# HTTPS server
#
#server {
#    listen       443 ssl;
#    server_name  localhost;

#    ssl_certificate      cert.pem;
#    ssl_certificate_key  cert.key;

#    ssl_session_cache    shared:SSL:1m;
#    ssl_session_timeout  5m;

#    ssl_ciphers  HIGH:!aNULL:!MD5;
#    ssl_prefer_server_ciphers  on;

# on https disable SSLv2, SSLv3 vulnerable to drown, poodle attacks
# https://www.globalsign.com/en/blog/drown-attack-sslv2/
# https://www.globalsign.com/en/blog/poodle-vulnerability-in-ssl-30/
#   ssl_protocols TLSv1.2 TLSv1.1 TLSv1;

#    location / {
#        root   html;
#        index  index.html index.htm;
#    }
#}
