const starterJokes = [
    {
        jokeId: 1,
        jokeBody: "What do mermaids wash their fins with?",
        jokePunchline: "Tide...",
        jokeRating: "G"

    },
    {
        jokeId: 2,
        jokeBody: "Did you know in King Arthur's time, one of the knights of the round table collected taxes?",
        jokePunchline: "His name was Sir Charge...",
        jokeRating: "G"
    },
    {
        jokeId: 3,
        jokeBody: "What did the fried rice say to the shrimp?",
        jokePunchline: "Don't Wok away from me...",
        jokeRating: "G"
    },
    {
        jokeId: 4,
        jokeBody: "Did you hear Steve Harvey and his wife got into a fight?",
        jokePunchline: "It was a real family feud...",
        jokeRating: "G"
    },
    {
        jokeId: 5,
        jokeBody: "What kind of car does an egg drive?",
        jokePunchline: "A Yolkswagon...",
        jokeRating: "G"
    },
    {
        jokeId: 6,
        jokeBody: "What do you call someone who gets mad when they don't have any bread?",
        jokePunchline: "Lack toast intolerant...",
        jokeRating: "G"
    },
    {
        jokeId: 7,
        jokeBody: "What did the plumber say to the singer?",
        jokePunchline: "Nice pipes...",
        jokeRating: "G"
    },
    {
        jokeId: 8,
        jokeBody: "What do you call a lazy doctor?",
        jokePunchline: "Dr Doo-little...",
        jokeRating: "G"
    },
    {
        jokeId: 9,
        jokeBody: "Did you know on average people want 3 covers on the bed at all times?",
        jokePunchline: "That's just a blanket statement...",
        jokeRating: "G"
    },
    {
        jokeId: 10,
        jokeBody: "What did the pot eat on its birthday?",
        jokePunchline: "Pancakes...",
        jokeRating: "G"
    },
    {
        jokeId: 11,
        jokeBody: "Where would you grow a chef?",
        jokePunchline: "Bakersfield...",
        jokeRating: "G"
    },
    {
        jokeId: 12,
        jokeBody: "What do you call a camel in a drought?",
        jokePunchline: "A dry humper...",
        jokeRating: "PG"
    },
    {
        jokeId: 13,
        jokeBody: "How do you get a squirrel out of a tree?",
        jokePunchline: "Show him your nutts...",
        jokeRating: "PG"
    },
    {
        jokeId: 14,
        jokeBody: "Why don't eggs tell jokes?",
        jokePunchline: "They'd crack each other up...",
        jokeRating: "G"
    },
    {
        jokeId: 15,
        jokeBody: "Did you hear the rumor about butter?",
        jokePunchline: "Well, I'm not going to spread it...",
        jokeRating: "G"
    },
    {
        jokeId: 16,
        jokeBody: "How many tickles does it take to make an octopus laugh?",
        jokePunchline: "Ten tickles...",
        jokeRating: "G"
    },
    {
        jokeId: 17,
        jokeBody: "What concert costs just 45 cents?",
        jokePunchline: "50 Cent featuring Nickelback...",
        jokeRating: "PG"
    },
    {
        jokeId: 18,
        jokeBody: "How do you make a tissue dance?",
        jokePunchline: "You put a little boogie in it...",
        jokeRating: "G"
    },
    {
        jokeId: 19,
        jokeBody: "Why did the math book look so sad?",
        jokePunchline: "Because of all of its problems...",
        jokeRating: "G"
    },
    {
        jokeId: 20,
        jokeBody: "What do you call cheese that isn't yours?",
        jokePunchline: "Nacho cheese...",
        jokeRating: "G"
    },
    {
        jokeId: 21,
        jokeBody: "What kind of shoes do ninjas wear?",
        jokePunchline: "Sneakers...",
        jokeRating: "G"
    },
    {
        jokeId: 22,
        jokeBody: "How does a penguin build its house?",
        jokePunchline: "Igloos it together...",
        jokeRating: "G"
    },
    {
        jokeId: 23,
        jokeBody: "When does a joke become a dad joke?",
        jokePunchline: "When it becomes apparent...",
        jokeRating: "G"
    },
    {
        jokeId: 24,
        jokeBody: "What do sprinters eat before a race?",
        jokePunchline: "Nothing, they fast...",
        jokeRating: "G"
    },
    {
        jokeId: 25,
        jokeBody: "Why do melons have weddings?",
        jokePunchline: "Because they cantaloupe...",
        jokeRating: "G"
    },
    {
        jokeId: 26,
        jokeBody: "What's the difference between a poorly dressed man on a tricycle and a well-dressed man on a bicycle?",
        jokePunchline: "Attire...",
        jokeRating: "G"
    },
    {
        jokeId: 27,
        jokeBody: "What happens when you go to the bathroom in France?",
        jokePunchline: " European...",
        jokeRating: "PG"
    },
    {
        jokeId: 28,
        jokeBody: "A cheese factory exploded in France...",
        jokePunchline: "Da brie is everywhere...",
        jokeRating: "G"
    },
    {
        jokeId: 29,
        jokeBody: "Why did the old man fall in the well?",
        jokePunchline: "Because he couldn't see that well...",
        jokeRating: "G"
    },
    {
        jokeId: 30,
        jokeBody: "Why did the invisible man turn down the job offer?",
        jokePunchline: "He couldn't see himself doing it...",
        jokeRating: "G"
    },
    {
        jokeId: 31,
        jokeBody: "Want to hear a joke about construction?",
        jokePunchline: " I'm still working on it...",
        jokeRating: "G"
    },
    {
        jokeId: 32,
        jokeBody: "How does Moses make his coffee?",
        jokePunchline: "Hebrews it...",
        jokeRating: "G"
    },
    {
        jokeId: 33,
        jokeBody: "I was just reminiscing about the beautiful herb garden I had when I was growing up...",
        jokePunchline: "Good thymes...",
        jokeRating: "G"
    },
    {
        jokeId: 34,
        jokeBody: "Why did the scarecrow win an award?",
        jokePunchline: "Because he was outstanding in his field...",
        jokeRating: "G"
    },
    {
        jokeId: 35,
        jokeBody: "Why was the coach yelling at a vending machine?",
        jokePunchline: "He wanted his quarter back...",
        jokeRating: "G"
    },
    {
        jokeId: 36,
        jokeBody: "Why do vampires seem sick?",
        jokePunchline: "They're always coffin...",
        jokeRating: "G"
    },
    {
        jokeId: 37,
        jokeBody: "Did you hear about the Italian chef who died?",
        jokePunchline: "He pasta way...",
        jokeRating: "G"
    },
    {
        jokeId: 38,
        jokeBody: "What did the Ranch say when someone opened the refrigerator door?",
        jokePunchline: "Close the door, I'm dressing...",
        jokeRating: "PG"
    },
    {
        jokeId: 39,
        jokeBody: "What do you call it when a group of apes starts a company?",
        jokePunchline: "Monkey business...",
        jokeRating: "G"
    },
    {
        jokeId: 40,
        jokeBody: "How can you tell it’s a dogwood tree?",
        jokePunchline: "By the bark...",
        jokeRating: "G"
    },
    {
        jokeId: 41,
        jokeBody: "What did the accountant say while auditing a document?",
        jokePunchline: "This is taxing...",
        jokeRating: "G"
    },
    {
        jokeId: 42,
        jokeBody: "Why are spiders so smart?",
        jokePunchline: "They can find everything on the web...",
        jokeRating: "G"
    },
    {
        jokeId: 43,
        jokeBody: "What do you call two octopuses that look the same?",
        jokePunchline: "Itenticle...",
        jokeRating: "G"
    },
    {
        jokeId: 44,
        jokeBody: "How do you weigh a millennial?",
        jokePunchline: "In Instagrams...",
        jokeRating: "G"
    },
    {
        jokeId: 45,
        jokeBody: "Why don’t crabs give to charity?",
        jokePunchline: "Because they’re shellfish...",
        jokeRating: "G"
    },
    {
        jokeId: 46,
        jokeBody: "How do you tell the difference between an alligator and a crocodile?",
        jokePunchline: "You will see one later and one in a while...",
        jokeRating: "G"
    },
    {
        jokeId: 47,
        jokeBody: "What kind of exercises do lazy people do?",
        jokePunchline: "Diddly squats...",
        jokeRating: "G"
    },
    {
        jokeId: 48,
        jokeBody: "Why did the coffee file a police report?",
        jokePunchline: "It got mugged...",
        jokeRating: "PG"
    },
    {
        jokeId: 49,
        jokeBody: "How do trees access the internet?",
        jokePunchline: "They log in...",
        jokeRating: "G"
    },
    {
        jokeId: 50,
        jokeBody: "A slice of apple pie is $2.50 in Jamaica and $3.00 in the Bahamas...",
        jokePunchline: "These are the pie rates of the Caribbean...",
        jokeRating: "G"
    },

    {
        jokeId: 51,
        jokeBody: "How do you find Will Smith in a snowstorm?",
        jokePunchline: "You look for fresh prints...",
        jokeRating: "G"
    },
    {
        jokeId: 52,
        jokeBody: "What do you call a bundle of hay in a church?",
        jokePunchline: "Christian Bale...",
        jokeRating: "PG"
    },
    {
        jokeId: 53,
        jokeBody: "What’s an astronaut’s favorite part of the computer?",
        jokePunchline: "The space bar...",
        jokeRating: "G"
    },
    {
        jokeId: 54,
        jokeBody: "Why did the scarecrow win an award?",
        jokePunchline: "Because he was outstanding in his field...",
        jokeRating: "G"
    },
    {
        jokeId: 55,
        jokeBody: "What did the grape do when he got stepped on?",
        jokePunchline: "He let out a little wine...",
        jokeRating: "PG"
    },
    {
        jokeId: 56,
        jokeBody: "How did Darth Vader know what Luke got him for Christmas?",
        jokePunchline: "He felt his presents...",
        jokeRating: "G"
    },
    {
        jokeId: 57,
        jokeBody: "Why can’t you trust atoms?",
        jokePunchline: "They make up everything...",
        jokeRating: "G"
    },
    {
        jokeId: 58,
        jokeBody: "What was Forrest Gump’s email password?",
        jokePunchline: "1forrest1...",
        jokeRating: "PG"
    },
    {
        jokeId: 59,
        jokeBody: "What did one ocean say to the other ocean?",
        jokePunchline: "Nothing, they just waved...",
        jokeRating: "G"
    },
    {
        jokeId: 60,
        jokeBody: "Why don’t oysters share their pearls?",
        jokePunchline: " Because they’re shellfish...",
        jokeRating: "G"
    },
    {
        jokeId: 61,
        jokeBody: "What do you call the boss at Old McDonald’s Farm?",
        jokePunchline: "The CIEIO...",
        jokeRating: "G"
    },
    {
        jokeId: 62,
        jokeBody: "How do astronomers organize a party?",
        jokePunchline: " They planet...",
        jokeRating: "G"
    },
    {
        jokeId: 63,
        jokeBody: "How do you deal with a fear of speed bumps?",
        jokePunchline: "You slowly get over it...",
        jokeRating: "G"
    },
    {
        jokeId: 64,
        jokeBody: "What was the most ground-breaking invention?",
        jokePunchline: "A shovel...",
        jokeRating: "G"
    },
    {
        jokeId: 65,
        jokeBody: "How did the hipster burn his mouth?",
        jokePunchline: "He ate the pizza before it was cool...",
        jokeRating: "PG"
    },
    {
        jokeId: 66,
        jokeBody: "What did the grape do when he got stepped on?",
        jokePunchline: "He let out a little wine....",
        jokeRating: "PG"
    },
    {
        jokeId: 67,
        jokeBody: "I just watched a program about beavers...",
        jokePunchline: "It was the best dam program I've ever seen...",
        jokeRating: "PG"
    },
    {
        jokeId: 68,
        jokeBody: "I wrote a song about a tortilla...",
        jokePunchline: "Well actually, it’s more of a wrap...",
        jokeRating: "PG"
    },
    {
        jokeId: 69,
        jokeBody: "If you ever get cold, just stand in a corner...",
        jokePunchline: "They’re usually 90 degrees...",
        jokeRating: "PG"
    },
    {
        jokeId: 70,
        jokeBody: "I used to hate facial hair...",
        jokePunchline: "But then it grew on me...",
        jokeRating: "PG"
    },
    
];

export default starterJokes;


