#!/bin/bash
#set -e

#first clone pull the repo and pull the new images from docker hub ( sudo docker-compose pull &&sudo docker-compose down &&)
#then docker-compose up -> reload the images..
ssh -i ./deploy_key Dev@52.170.119.1 'cd Flicker_Clone_SWProject21_Team2/ && git clean  -d  -f . &&git reset --hard && git pull && sudo docker-compose pull && sudo docker-compose up -d'
