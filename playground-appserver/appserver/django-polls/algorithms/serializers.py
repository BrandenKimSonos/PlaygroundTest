from django_grpc_framework import proto_serializers
from algorithms.models import Message
import resource_pb2

class MessageProtoSerializer(proto_serializers.ModelProtoSerializer):
    class Meta:
        model = Message
        proto_clas = resource_pb2
        fields = ['name']