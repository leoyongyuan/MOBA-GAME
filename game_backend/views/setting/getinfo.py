from django.http import JsonResponse
from game_backend.models.player.player import Player

def getinfo_web(request):
  user = request.user
  if not user.is_authenticated:
    return JsonResponse({
      'result': "未登录"
    })
  else:
    player = Player.objects.get(user=user)
    return JsonResponse({
      'result': "success",
      'username': player.user.username,
      'photo': player.photo,
    })



def getinfo(request):
  return getinfo_web(request)