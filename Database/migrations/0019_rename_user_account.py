# Generated by Django 5.0.4 on 2024-05-11 00:18

from django.db import migrations


class Migration(migrations.Migration):
    dependencies = [
        ("Database", "0018_rename_account_user"),
    ]

    operations = [
        migrations.RenameModel(
            old_name="user",
            new_name="account",
        ),
    ]
