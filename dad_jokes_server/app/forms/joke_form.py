from flask_wtf import FlaskForm
from wtforms import StringField, SelectField, SubmitField

class JokeForm(FlaskForm):
    joke = StringField('Joke')
    punchline = StringField('Punchline')
    rating = SelectField('Rating', choices=[('G', 'General'), ('PG', 'Parental Guidance'), ('R', 'Restricted')])
    submit = SubmitField('Submit')    