from app.models import db, Joke, User
# Adds a seed jokes, you can add other jokes here if you want
def seed_jokes():
    
    user1 = User.query.get(1)
    user2 = User.query.get(2)
    user3 = User.query.get(2)

    joke1 = Joke(
        joke_body='What did the plumber say to the singer?',
        punchline='Nice pipes...',
        rating='G',
        user=user1
    )
    joke2 = Joke(
        joke_body='What do you call a lazy doctor?',
        punchline='Dr Doo-little...',
        rating='G',
        user=user1
    )
    joke3 = Joke(
        joke_body='What do you call a camel in a drought?',
        punchline='A dry humper...',
        rating='PG',
        user=user1
    )
    joke4 = Joke(
        joke_body='Why did the scarecrow win an award?',
        punchline='Because he was outstanding in his field...',
        rating='G',
        user=user2
    )
    joke5 = Joke(
        joke_body='What do you call a bundle of hay in a church?',
        punchline='Christian Bale...',
        rating='G',
        user=user2
    )
    joke6 = Joke(
        joke_body='Why was the coach yelling at a vending machine?',
        punchline='He wanted his quarter back...',
        rating='G',
        user=user3
    )
    joke7 = Joke(
        joke_body='What kind of exercises do lazy people do?',
        punchline='Diddly squats...',
        rating='G',
        user=user3
    )
    joke8 = Joke(
        joke_body='How do trees access the internet?',
        punchline='They log in...',
        rating='G',
        user=user1
    )
    joke9 = Joke( 
        joke_body='How do you weigh a millennial?',
        punchline='In Instagrams...',
        rating='G',
        user=user1
    )
    joke10 = Joke (
        joke_body='How did Darth Vader know what Luke got him for Christmas?',
        punchline='He felt his presents...',
        rating='G',
        user=user1
    )
    joke11 = Joke (
        joke_body='What was Forrest Gump’s email password?',
        punchline='1forrest1...',
        rating='PG',
        user=user2
    )
    joke12 = Joke (
        joke_body='What did one ocean say to the other ocean?',
        punchline='Nothing, they just waved...',
        rating='G',
        user=user1
    ) 
    joke13 = Joke (
        joke_body='Why can’t you trust atoms?',
        punchline='They make up everything...',
        rating='G',
        user=user1
    ) 
    joke14 = Joke (
        joke_body='Why did the coffee file a police report?',
        punchline='It got mugged...',
        rating='PG',
        user=user1
    ) 
    joke15 = Joke (
        joke_body='What’s an astronaut’s favorite part of the computer?',
        punchline='The space bar...',
        rating='G',
        user=user2
    )
    joke16 = Joke (
        joke_body='How do astronomers organize a party?',
        punchline='They planet...',
        rating='G',
        user=user2
    )
    joke17 = Joke (
        joke_body='I wrote a song about a tortilla...',
        punchline='Well actually, it’s more of a wrap...',
        rating='PG',
        user=user3
    )
    joke18 = Joke (
        joke_body='Why don’t oysters share their pearls?',
        punchline='Because they’re shellfish...',
        rating='G',
        user=user3
    )

    jokes = [joke1, joke2, joke3, joke4, joke5, joke6, joke7, joke8,
            joke9, joke10, joke11, joke12, joke13, joke14, joke15,
            joke16, joke17, joke18 ]
    db.session.add_all(jokes)
    db.session.commit()

# Uses a raw SQL query to TRUNCATE the jokes table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_jokes():
    db.session.execute('TRUNCATE jokes CASCADE;')
    db.session.commit()