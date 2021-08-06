from algorithms.services import MessageService
import resource_pb2_grpc


def grpc_handlers(server):
    resource_pb2_grpc.add_GreeterServicer_to_server(MessageService.as_servicer(), server)