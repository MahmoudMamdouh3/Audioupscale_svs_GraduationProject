# Generated by Django 5.0.4 on 2024-05-11 00:10

from django.db import migrations


class Migration(migrations.Migration):
    dependencies = [
        ("Database", "0017_remove_account_groups_remove_account_is_superuser_and_more"),
    ]

    operations = [
        migrations.RenameModel(
            old_name="Account",
            new_name="user",
        ),
    ]
