# https:// https://engineering.thinknet.co.th/มาสร้าง-docker-image-ด้วย-multi-stage-builds-กัน-68fd68f6013c
# http://www.somkiat.cc/docker-with-multi-stage-build/
# -----
#  สำหรับ deploy 
# FROM nginx:1.14.0-alpine
# RUN apk add --update tzdata
# ENV TZ=Asia/Bangkok
# ADD ./build/es5-bundled /usr/share/nginx/html
# COPY ./nginx/default.conf /etc/nginx/conf.d/

# docker build -t webserver-image:v1 .
# docker run -d -p 8978:80 webserver-image:v1
# -----

# install node modules
FROM jefferyb/polymer-cli:alpine as install
WORKDIR /home/polymer/app
COPY package.json /home/polymer/app
RUN npm install --allow-root

# run unit test
FROM install as test
COPY ./ /home/polymer/app
RUN npm test

# run build 
FROM test as build
RUN npm run build:static

# copy build artifact to nginx
FROM nginx:1.14.0-alpine
RUN apk add --update tzdata
ENV TZ=Asia/Bangkok
COPY --from=build /home/polymer/app/es5-bundled /usr/share/nginx/html
COPY ./nginx/default.conf /etc/nginx/conf.d/



# yarn webpack:dev
# docker build -t nextscorp/dft-eu:latest .
# docker tag nextscorp/dft-eu:latest nextscorp/dft-eu:1.0.1
# docker run -it --rm -p 8888:80 manifoldco/demo-app:latest
# docker push nextscorp/dft-eu:1.0.1

# stop all containers:
# docker kill $(docker ps -q)

# remove all containers
# docker rm $(docker ps -a -q)

# remove all docker images
# docker rmi $(docker images -q)

# docker run --name polymer-project -d -p 4455:8081 -v "$(pwd):/home/polymer/app" jefferyb/polymer-cli polymer serve -H 0.0.0.0
# docker rm -f polymer-project