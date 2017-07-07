set -e
set -u

git pull
# git submodule update --init

export LISTEN_PORT=8080
export NAME=raspi-server
export COLON_TAG=:$(git rev-parse HEAD)
export RESGISTRY_SLASH=

docker-compose -f docker/docker-compose.yml build
#docker-compose -f docker/docker-compose.yml push

cd docker
docker stack deploy --compose-file docker-compose.yml $NAME
cd ..