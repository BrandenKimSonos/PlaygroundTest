#!/bin/sh

python3 -m grpc_tools.protoc --proto_path=./protos --python_out=./outprotos --grpc_python_out=./outprotos ./protos/resource.proto