from manga.models import Manga
from rest_framework import viewsets, permissions
from .serializers import MangaSerializer

# Manga viewset
class MangaViewSet(viewsets.ModelViewSet):

    permission_classes = [permissions.IsAuthenticated]
    serializer_class = MangaSerializer

    def get_queryset(self):
        return self.request.user.manga.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)
