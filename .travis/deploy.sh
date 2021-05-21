#!/bin/bash
set -e

echo "Pulling new containers.."
sudo docker-compose pull

echo "Stopping old containers.."
sudo docker-compose stop

echo "Removing old containers.."
sudo docker-compose rm -f

echo "Reload new containers.."
sudo docker-compose up -d