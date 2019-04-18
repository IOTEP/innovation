#!/bin/bash

# args check
#if [ $1 == 'fstart' ] || [ $1 == 'start' ] || [ $1 == 'restart' ]; then
#    if  [ ! $2 ]; then
#        echo "env is null"
#        exit;
#    fi
#    env=$2
#    echo "init env ${env}"
#fi
env="prod"
#module config
MODULE_NAME='api'
MODULE_EXEC_CMD="nohup java -jar lib/free-backend-api-1.0-SNAPSHOT.jar --spring.profiles.active=${env} > /dev/null 2>&1 &"

#supervise config
DEPLOY_PATH="`dirname $0`/../"
SUPERVISE_DIR="${DEPLOY_PATH}/supervise/"
SUPERVISE_STATUS_DIR="${SUPERVISE_DIR}/status/${MODULE_NAME}"
SUPERVISE_BIN="${SUPERVISE_DIR}/bin/supervise"
SUPERVISE_CONTROL_FILE="${SUPERVISE_STATUS_DIR}/control"

cd $DEPLOY_PATH

function fstart() {
    if [ -d $SUPERVISE_STATUS_DIR ]; then
        rm -rf $SUPERVISE_STATUS_DIR
    fi
    mkdir -p $SUPERVISE_STATUS_DIR
    $SUPERVISE_BIN -p $SUPERVISE_STATUS_DIR -f "$MODULE_EXEC_CMD" > /dev/null 2>&1 &
}

function fstop() {
    echo 'x' > $SUPERVISE_CONTROL_FILE
    echo 'k' > $SUPERVISE_CONTROL_FILE
    if [ -d $SUPERVISE_STATUS_DIR ]; then
        rm -rf $SUPERVISE_STATUS_DIR
    fi
}

function start() {
    echo 'u' > $SUPERVISE_CONTROL_FILE
}

function stop() {
    echo 'd' > $SUPERVISE_CONTROL_FILE
}

function restart() {
    echo 'k' > $SUPERVISE_CONTROL_FILE
}


if [ $1 == 'fstart' ]; then
    fstart
fi

if [ $1 == 'fstop' ]; then
    fstop
fi

if [ $1 == 'start' ]; then
    start
fi

if [ $1 == 'stop' ]; then
    stop
fi

if [ $1 == 'restart' ]; then
    restart
fi
