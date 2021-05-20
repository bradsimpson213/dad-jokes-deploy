from flask import Flask, request, redirect
from flask_migrate import Migrate
import os
# new seed import
from .seeds import seed_commands

# new CORS import
from flask_cors import CORS

from .config import Config
from .models import db

from .api.user_routes import user_routes
from .api.joke_routes import joke_routes

app = Flask(__name__)

app.config.from_object(Config)
db.init_app(app)
app.register_blueprint(user_routes, url_prefix='/api/users')
app.register_blueprint(joke_routes, url_prefix='/api/jokes')

# Application Security
CORS(app)

Migrate(app, db)
#new seed command
app.cli.add_command(seed_commands)

# Since we are deploying with Docker and Flask,
# we won't be using a buildpack when we deploy to Heroku.
# Therefore, we need to make sure that in production any 
# request made over http is redirected to https.

@app.before_request
def https_redirect():
    if os.environ.get('FLASK_ENV') == 'production':
        if request.headers.get('X-Forwarded-Proto') == 'http':
            url = request.url.replace('http://', 'https://', 1)
            code = 301
            return redirect(url, code=code)



@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def react_root(path):
    print("path", path)
    if path == 'favicon.png':
        return app.send_static_file('favicon.png')
    return app.send_static_file('index.html')