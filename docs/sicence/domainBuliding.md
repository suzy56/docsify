# 申请域名配置tls+nginx+ws流量加密

>备注：狗爹域名申请信息不完整会被砍单，转为namesilo

```bash

#n etstat -tunlp | grep 端口号
server {
    listen 80;
    server_name www.tlanyan.me tlanyan.me;
    rewrite ^(.*) https://$server_name$1 permanent;
}

server {
    listen 443 ssl;
    server_name www.tlanyan.me tlanyan.me;
    charset utf-8;

    ssl_certificate /etc/letsencrypt/live/tlanyan.me/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/tlanyan.me/privkey.pem;
    ssl_protocols TLSv1.2 TLSv1.3; # TLSv1.3需要nginx 1.13.0以上版本
    # 如果nginx版本低，建议使用这种加密算法配置
    # ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:ECDHE:ECDH:AES:HIGH:!NULL:!aNULL:!MD5:!ADH:!RC4;
    ssl_ciphers ECDHE-RSA-AES256-GCM-SHA512:DHE-RSA-AES256-GCM-SHA512:ECDHE-RSA-AES256-GCM-SHA384:DHE-RSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-SHA384;
    ssl_ecdh_curve secp384r1;
    ssl_prefer_server_ciphers on;
    ssl_session_cache shared:SSL:10m;
    ssl_session_timeout 10m;
    ssl_session_tickets off;
    keepalive_timeout 70;

    # 这里填写其他配置
}
```

参考链接：

[域名证书申请](<https://tlanyan.me/use-lets-encrypt-certificate/>)

[vray高级流量伪装](<https://tlanyan.me/v2ray-traffic-mask/>)



