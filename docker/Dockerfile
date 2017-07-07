FROM hypriot/rpi-node:7.4.0
COPY /package.json ./package.json
RUN npm install
COPY / ./
EXPOSE 10000
CMD npm run start