from django.core.management.base import BaseCommand, CommandError
from manga.models import Manga
from .compares import compDate
import datetime


class Command(BaseCommand):
    def add_args(self, parser):
        parser.add_argument("ids", nargs="+", type=int)

    def handle(self, *args, **options):
        ar = Manga.objects.all()
        x = datetime.datetime.now().date()
        print(x)
        compDate("3", "5")
        for x in ar:
            print(x.title)
            print(x.descr)
            print(x.completed)
            print(x.url)
            print(x.adult)
