from django.http.response import HttpResponse
from django.shortcuts import render
import json
import grpc
import resource_pb2
import resource_pb2_grpc
import logging

logger = logging.getLogger()


def run():
    # NOTE(gRPC Python Team): .close() is possible on a channel and should be
    # used in circumstances in which the with statement does not fit the needs
    # of the code.
    with grpc.insecure_channel('172.17.0.2:50051') as channel:
        stub = resource_pb2_grpc.GreeterStub(channel)
        response = stub.SayHello(resource_pb2.HelloRequest(name='you'))
    logger.info("Greeter client received: " + response.message)

def TestView(request):

    some_data_to_dump = {
        'some_var_1': 'foo',
        'some_var_2': 'bar',
    }
    data = json.dumps(some_data_to_dump)

    return HttpResponse(data, content_type='application/json')

def RPCView(request):
    run()

    return HttpResponse("RPC CALLED", content_type='application/json')
