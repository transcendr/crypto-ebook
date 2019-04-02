#!/bin/sh

echo "-------------------- RUNNING POST INSTALL ------------------------"
pwd
mkdir public && mkdir public/assets
ls public
cp -a ./src/assets ./public
ls public
echo "-------------------- RUNNING POST INSTALL ------------------------"