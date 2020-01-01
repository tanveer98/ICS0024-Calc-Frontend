#!/bin/bash
 pwd
 npm install
 npm run build
 chown gitlab-runner build
 chmod 0777 build
 scp -r dest/build mhasan@65.52.229.255:/var/www/html 
