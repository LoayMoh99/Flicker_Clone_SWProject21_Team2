#!/bin/bash
set -e

ssh -i ./deploy_key Dev@13.90.253.189
pwd
cd Flicker_Clone_SWProject21_Team2/

git pull origin main

echo "Pulling new containers.."
sudo docker-compose pull

echo "Stopping old containers.."
sudo docker-compose down

echo "Reload new containers.."
sudo docker-compose up -d