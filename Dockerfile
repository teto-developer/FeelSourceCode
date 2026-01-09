# 軽量な nginx イメージを使う
FROM nginx:alpine

# HTML と JS を nginx の公開ディレクトリにコピー
COPY index.html /usr/share/nginx/html/index.html
COPY script.js /usr/share/nginx/html/script.js

# ポート 80 を開放
EXPOSE 80

# nginx をフォアグラウンドで起動
CMD ["nginx", "-g", "daemon off;"]
