#!/bin/bash
export PATH=$PATH:/home/ubuntu/.nvm/versions/node/v22.2.0/bin

cd week-9
 git pull origin2 master
 cd server
 pm2 kill
 pm2 start index.js
