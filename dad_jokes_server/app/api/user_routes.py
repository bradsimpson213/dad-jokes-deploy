from flask import Blueprint

from ..models import User

user_routes = Blueprint('users', __name__)

@user_routes.route('/<int:id>')
def user_by_id(id):
    user = User.query.get(id)
    return user.to_dict()


@user_routes.route('/all')
def all_users():
    users = User.query.all()
    return {"users": [user.to_dict() for user in users]}
