from django.urls import path
from game_backend.views import index
urlpatterns = [
    path("",index,name="index"),
]
