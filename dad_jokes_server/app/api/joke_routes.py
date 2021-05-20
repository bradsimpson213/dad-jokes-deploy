from flask import Blueprint, request
import random

from ..forms import JokeForm
from ..models import db, Joke, User

joke_routes = Blueprint('jokes', __name__)

@joke_routes.route('/')
def random_joke():
    jokes = Joke.query.all()
    joke = random.choice(jokes)
    print(joke.to_dict())
    return joke.to_dict()


@joke_routes.route('/<int:id>')
def joke_by_id(id):
    joke = Joke.query.get(id)
    return joke.to_dict()


@joke_routes.route('/all')
def all_jokes():
    jokes = Joke.query.all()
    return {'jokes': [joke.to_dict() for joke in jokes]}


@joke_routes.route('/add', methods=['POST'])
def add_joke():
    data = request.json
    
    print(data)
    user = User.query.get(1)
    new_joke = Joke(
        joke_body=data['joke_body'],
        punchline=data['punchline'],
        rating=data['rating'],
        user= user
    )
        
    db.session.add(new_joke)
    db.session.commit()
    return new_joke.to_dict()

    

