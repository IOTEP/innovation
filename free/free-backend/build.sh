#!/bin/bash
echo "maven version:"

mvn -v

echo "build start..."
MODULE_API=free-backend-api

rm -rf output.tar.gz

mvn clean package
[ $? -ne 0 ] && {
    echo "build re-node failed!!!"
    exit 1
}

#测试install
mvn install

[ $? -ne 0 ] && {
    echo "mvn install failed!!!"
    exit 1
}

mvn package

mkdir -p PROJECT_NAME/${MODULE_API}
mkdir -p output/${MODULE_API}/lib
cp -r ${MODULE_API}/target/${MODULE_API}-1.0-SNAPSHOT.jar output/${MODULE_API}/lib/
cp -r ${MODULE_API}/supervise output/${MODULE_API}
cp -r ${MODULE_API}/shell output/${MODULE_API}

echo "build success!"
tar -czvf output.tar.gz output
rm -rf output
mvn clean
