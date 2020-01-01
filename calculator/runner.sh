#!/bin/bash
 pwd
 npm install
 npm run build
 chown ec2-user build
 chmod 0777 build
 chmod 0777 dest
 scp -r dest/build mhasan@65.52.229.255:/var/www/html 
