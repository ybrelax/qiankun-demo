#!/bin/bash

rm -rf ./dist

mkdir ./dist
mkdir ./dist/subapp

# 复制项目3到打包目录
cp -r ./micro-apps-project3/dist/ ./dist/subapp/project3/

# 基座项目
cp -r ./main-project/build/* ./dist/

echo '您的项目打包已完成...'



