#!/bin/bash

pushd $PWD
COMMIT=$(git log --oneline -1|awk '{print $1}')
docker exec resume npm run build
cd ./dist
git init
git add .
git commit -m "update $COMMIT"
git push -f git@github.com:sahyung/sahyung.github.io.git master:gh-pages
popd
