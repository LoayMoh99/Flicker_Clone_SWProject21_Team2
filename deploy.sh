#!/bin/bash
#set -e

#first clone pull the repo and pull the new images from docker hub
#then down and up docker-compose -> reload the images (take about 15 seconds for reloading!!)
ssh -i ./deploy_key Dev@13.90.253.189 'cd Flicker_Clone_SWProject21_Team2/ && git clean  -d  -f . &&git reset --hard && git pull && sudo docker-compose pull && sudo docker-compose down && sudo docker-compose up -d'
