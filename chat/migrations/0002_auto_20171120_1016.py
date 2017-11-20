# -*- coding: utf-8 -*-
# Generated by Django 1.11.7 on 2017-11-20 10:16
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('auth', '0008_alter_user_username_max_length'),
        ('chat', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='room',
            name='groups_permissions',
            field=models.ManyToManyField(to='auth.Group'),
        ),
        migrations.AlterField(
            model_name='room',
            name='room_slug',
            field=models.CharField(editable=False, max_length=84),
        ),
    ]
