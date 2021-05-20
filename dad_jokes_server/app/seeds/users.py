from app.models import db, User

# Adds a demo user, you can add other users here if you want
def seed_users():

    user1 = User(username="Brad", email="brad@gmail.com", password="password")
    user2 = User(username="demo", email="demo_user@demo.com", password="demopassword")
    user3 = User(username="demolition", email="demolition@demo.com", password="demopassword")

    db.session.add(user1)
    db.session.add(user2)
    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_users():
    db.session.execute('TRUNCATE users CASCADE;')
    db.session.commit()
