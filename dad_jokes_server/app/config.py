import os


class Config(object):
    SECRET_KEY = os.environ.get('SECRET_KEY') or 'default-key-for-devs'
    # new environ variables (also add to .env)
    # .env info DATABASE_URL = postgresql://dadjokes_test:password@localhost/dadjokesdb_test
    SQLALCHEMY_DATABASE_URI = os.environ.get("DATABASE_URL") 
    SQLALCHEMY_TRACK_MODIFICATIONS = False