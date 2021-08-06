from django.urls import path
from . import views

app_name = 'algorithms'
urlpatterns = [
    path('', views.TestView, name='index'),
    path('rpc', views.RPCView, name='rpc')
]
