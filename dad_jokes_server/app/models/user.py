from .db import db

class User(db.Model):
    __tablename__ = 'users'
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(150), nullable=False)
    email = db.Column(db.String(150), nullable=False)
    password = db.Column(db.String(100), nullable=False)

    joke = db.relationship('Joke', back_populates='user')

    def to_dict(self):
        return {
            "id": self.id,
            "username": self.username,
            "email": self.email,
            "jokes": [j.to_dict_no_user() for j in self.joke]
        }


    def to_dict_no_jokes(self):
           return {
            "id": self.id,
            "username": self.username,
            "email": self.email,
        }