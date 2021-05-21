#!/bin/bash
#set -e

pwd
ssh -i ~/.ssh/deploy_key Dev@13.90.253.189 'cd Flicker_Clone_SWProject21_Team2/ && git clean  -d  -f . &&git reset --hard && git pull && sudo docker-compose pull && sudo docker-compose down && sudo docker-compose up -d'

exit
