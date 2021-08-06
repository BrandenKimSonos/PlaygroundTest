import grpc
from google.protobuf import empty_pb2
from django_grpc_framework.services import Service
from algorithms.models import Message
from algorithms.serializers import MessageProtoSerializer
import resource_pb2

class MessageService(Service):
    def SayHello(self, request, context):
        return resource_pb2.HelloReply(message='Hello, %s!' % request.name)

    def SayHelloAgain(self, request, context):
        return resource_pb2.HelloReply(message='Hello again, %s!' % request.name)

