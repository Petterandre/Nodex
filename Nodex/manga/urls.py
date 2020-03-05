from rest_framework import routers
from .api import MangaViewSet

router = routers.DefaultRouter()
router.register('api/manga', MangaViewSet, 'manga')

urlpatterns = router.urls