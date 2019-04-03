#!/bin/sh

echo "-------------------- RUNNING POST INSTALL ------------------------"
mkdir public && mkdir public/assets
cp -a ./src/assets ./public
echo "-------------------- FINISHED POST INSTALL -----------------------"