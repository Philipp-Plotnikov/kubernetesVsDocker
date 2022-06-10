FROM node:16
ADD ./app/server.js /server.js
ENTRYPOINT [ "node", "server.js" ]
