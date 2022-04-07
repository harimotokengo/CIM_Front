FROM node:17 as builder

WORKDIR /react

COPY ./app ./
RUN yarn install --frozen-lockfile

RUN yarn build

FROM nginx:1.19

RUN rm -f /etc/nginx/conf.d/*

ADD ./nginx/nginx.conf /etc/nginx/conf.d/app.conf

COPY --from=builder /react/build /usr/share/nginx/html

EXPOSE 80

CMD /usr/sbin/nginx -g 'daemon off;' -c /etc/nginx/nginx.conf
