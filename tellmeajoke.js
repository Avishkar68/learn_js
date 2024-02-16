
// const joke = document.getElementById("joke")
let myJokes = [{
    "error": false,
    "amount": 10,
    "jokes": [
        {
            "category": "Programming",
            "type": "twopart",
            "setup": "Hey, wanna hear a joke?",
            "delivery": "Parsing HTML with regex.",
            "flags": {
                "nsfw": false,
                "religious": false,
                "political": false,
                "racist": false,
                "sexist": false,
                "explicit": false
            },
            "id": 10,
            "safe": true,
            "lang": "en"
        },
        {
            "category": "Misc",
            "type": "single",
            "joke": "My wife is really mad at the fact that I have no sense of direction.\nSo I packed up my stuff and right.",
            "flags": {
                "nsfw": false,
                "religious": false,
                "political": false,
                "racist": false,
                "sexist": false,
                "explicit": false
            },
            "id": 201,
            "safe": true,
            "lang": "en"
        },
        {
            "category": "Pun",
            "type": "twopart",
            "setup": "The past, the present and the future walk into a bar.",
            "delivery": "It was tense.",
            "flags": {
                "nsfw": false,
                "religious": false,
                "political": false,
                "racist": false,
                "sexist": false,
                "explicit": false
            },
            "id": 198,
            "safe": true,
            "lang": "en"
        },
        {
            "category": "Christmas",
            "type": "twopart",
            "setup": "What does Santa suffer from if he gets stuck in a chimney?",
            "delivery": "Claustrophobia!",
            "flags": {
                "nsfw": false,
                "religious": false,
                "political": false,
                "racist": false,
                "sexist": false,
                "explicit": false
            },
            "id": 241,
            "safe": true,
            "lang": "en"
        },
        {
            "category": "Misc",
            "type": "twopart",
            "setup": "The average penis has...",
            "delivery": "Been in and around my ex-girlfriend's mouth.\nFuck you, Karen!",
            "flags": {
                "nsfw": true,
                "religious": false,
                "political": false,
                "racist": false,
                "sexist": false,
                "explicit": true
            },
            "id": 66,
            "safe": false,
            "lang": "en"
        },
        {
            "category": "Dark",
            "type": "twopart",
            "setup": "What do Ted Bundy and the Space Shuttle Columbia have in common?",
            "delivery": "They both left bodies in four states.",
            "flags": {
                "nsfw": false,
                "religious": false,
                "political": false,
                "racist": false,
                "sexist": false,
                "explicit": true
            },
            "id": 154,
            "safe": false,
            "lang": "en"
        },
        {
            "category": "Programming",
            "type": "twopart",
            "setup": "Why did the Python data scientist get arrested at customs?",
            "delivery": "She was caught trying to import pandas!",
            "flags": {
                "nsfw": false,
                "religious": false,
                "political": false,
                "racist": false,
                "sexist": false,
                "explicit": false
            },
            "id": 234,
            "safe": true,
            "lang": "en"
        },
        {
            "category": "Dark",
            "type": "twopart",
            "setup": "Why are there no pharmacies in Africa?",
            "delivery": "Because you can't use medicine on an empty stomach.",
            "flags": {
                "nsfw": false,
                "religious": false,
                "political": false,
                "racist": true,
                "sexist": false,
                "explicit": false
            },
            "id": 99,
            "safe": false,
            "lang": "en"
        },
        {
            "category": "Misc",
            "type": "twopart",
            "setup": "I'm sure good looking lesbians look at fat lesbians and give them no chance.",
            "delivery": "Until they see their fingers.",
            "flags": {
                "nsfw": true,
                "religious": false,
                "political": false,
                "racist": false,
                "sexist": false,
                "explicit": true
            },
            "id": 164,
            "safe": false,
            "lang": "en"
        },
        {
            "category": "Dark",
            "type": "twopart",
            "setup": "What did the boy with no arms get for Christmas?",
            "delivery": "I don't know, he hasn't opened it yet.",
            "flags": {
                "nsfw": false,
                "religious": false,
                "political": false,
                "racist": false,
                "sexist": false,
                "explicit": false
            },
            "id": 144,
            "safe": false,
            "lang": "en"
        },
        {
            "category": "Programming",
            "type": "twopart",
            "setup": "How many programmers does it take to screw in a light bulb?",
            "delivery": "None. It's a hardware problem.",
            "flags": {
                "nsfw": false,
                "religious": false,
                "political": false,
                "racist": false,
                "sexist": false,
                "explicit": false
            },
            "id": 1,
            "safe": true,
            "lang": "en"
        },
        {
            "category": "Pun",
            "type": "twopart",
            "setup": "I walked into a bar once.",
            "delivery": "It really hurt my head.",
            "flags": {
                "nsfw": false,
                "religious": false,
                "political": false,
                "racist": false,
                "sexist": false,
                "explicit": false
            },
            "id": 215,
            "safe": true,
            "lang": "en"
        },
        {
            "category": "Pun",
            "type": "twopart",
            "setup": "What do you call a pile of kittens?",
            "delivery": "A meowntain.",
            "flags": {
                "nsfw": false,
                "religious": false,
                "political": false,
                "racist": false,
                "sexist": false,
                "explicit": false
            },
            "id": 130,
            "safe": true,
            "lang": "en"
        },
        {
            "category": "Pun",
            "type": "twopart",
            "setup": "No matter how kind you are...",
            "delivery": "German kids are always Kinder.",
            "flags": {
                "nsfw": false,
                "religious": false,
                "political": false,
                "racist": false,
                "sexist": false,
                "explicit": false
            },
            "safe": true,
            "id": 278,
            "lang": "en"
        },
        {
            "category": "Dark",
            "type": "single",
            "joke": "My ex had an accident. I told the paramedics the wrong blood type for her. She'll finally experience what rejection is really like.",
            "flags": {
                "nsfw": false,
                "religious": false,
                "political": false,
                "racist": false,
                "sexist": false,
                "explicit": false
            },
            "id": 152,
            "safe": false,
            "lang": "en"
        },
        {
            "category": "Spooky",
            "type": "twopart",
            "setup": "What is in a ghost's nose?",
            "delivery": "Boo-gers.",
            "flags": {
                "nsfw": false,
                "religious": false,
                "political": false,
                "racist": false,
                "sexist": false,
                "explicit": false
            },
            "safe": true,
            "id": 296,
            "lang": "en"
        },
        {
            "category": "Dark",
            "type": "twopart",
            "setup": "What do an orgasm and a pulse have in common?",
            "delivery": "I don't care if she has one.",
            "flags": {
                "nsfw": true,
                "religious": false,
                "political": false,
                "racist": false,
                "sexist": false,
                "explicit": true
            },
            "id": 101,
            "safe": false,
            "lang": "en"
        },
        {
            "category": "Misc",
            "type": "single",
            "joke": "Never date a baker. They're too kneady.",
            "flags": {
                "nsfw": false,
                "religious": false,
                "political": false,
                "racist": false,
                "sexist": false,
                "explicit": false
            },
            "safe": true,
            "id": 271,
            "lang": "en"
        },
        {
            "category": "Dark",
            "type": "twopart",
            "setup": "I told my psychiatrist I got suicidal tendencies.",
            "delivery": "He said from now on I have to pay in advance.",
            "flags": {
                "nsfw": false,
                "religious": false,
                "political": false,
                "racist": false,
                "sexist": false,
                "explicit": false
            },
            "id": 93,
            "safe": false,
            "lang": "en"
        },
        {
            "category": "Programming",
            "type": "twopart",
            "setup": "Why did the web developer walk out of a resturant in disgust?",
            "delivery": "The seating was laid out in tables.",
            "flags": {
                "nsfw": false,
                "religious": false,
                "political": false,
                "racist": false,
                "sexist": false,
                "explicit": false
            },
            "id": 6,
            "safe": true,
            "lang": "en"
        },
        {
            "category": "Pun",
            "type": "twopart",
            "setup": "What's the best thing about Switzerland?",
            "delivery": "I don't know, but the flag is a big plus.",
            "flags": {
                "nsfw": false,
                "religious": false,
                "racist": false,
                "sexist": false,
                "political": false,
                "explicit": false
            },
            "id": 194,
            "safe": true,
            "lang": "en"
        },
        {
            "category": "Dark",
            "type": "twopart",
            "setup": "What's yellow and can't swim?",
            "delivery": "A bus full of children.",
            "flags": {
                "nsfw": false,
                "religious": false,
                "political": false,
                "racist": false,
                "sexist": false,
                "explicit": false
            },
            "safe": false,
            "id": 310,
            "lang": "en"
        },
        {
            "category": "Pun",
            "type": "twopart",
            "setup": "I was feeling depressed, my wife put her hand on my back and said \"Earth.\"",
            "delivery": "It meant the world to me.",
            "flags": {
                "nsfw": false,
                "religious": false,
                "political": false,
                "racist": false,
                "sexist": false,
                "explicit": false
            },
            "safe": true,
            "id": 282,
            "lang": "en"
        },
        {
            "category": "Programming",
            "type": "single",
            "joke": "Your mama's so FAT she can't save files bigger than 4GB.",
            "flags": {
                "nsfw": false,
                "religious": false,
                "political": false,
                "racist": false,
                "sexist": false,
                "explicit": true
            },
            "id": 9,
            "safe": false,
            "lang": "en"
        },
        {
            "category": "Dark",
            "type": "twopart",
            "setup": "Why is it so hard to break up with a Japanese girlfriend?",
            "delivery": "You have to drop the bomb twice before she gets it.",
            "flags": {
                "nsfw": false,
                "religious": false,
                "political": false,
                "racist": true,
                "sexist": false,
                "explicit": true
            },
            "id": 229,
            "safe": false,
            "lang": "en"
        },
        {
            "category": "Dark",
            "type": "single",
            "joke": "My girlfriend's dog died, so I tried to cheer her up by getting her an identical one. It just made her more upset. She screamed at me, \"What am I supposed to do with two dead dogs?\"",
            "flags": {
                "nsfw": false,
                "religious": false,
                "political": false,
                "racist": false,
                "sexist": false,
                "explicit": false
            },
            "safe": false,
            "id": 275,
            "lang": "en"
        },
        {
            "category": "Pun",
            "type": "twopart",
            "setup": "No matter how kind you are...",
            "delivery": "German kids are always Kinder.",
            "flags": {
                "nsfw": false,
                "religious": false,
                "political": false,
                "racist": false,
                "sexist": false,
                "explicit": false
            },
            "safe": true,
            "id": 278,
            "lang": "en"
        },
        {
            "category": "Misc",
            "type": "single",
            "joke": "I visited my friend at his new house. He told me to make myself at home. So I threw him out. I hate having visitors.",
            "flags": {
                "nsfw": false,
                "religious": false,
                "political": false,
                "racist": false,
                "sexist": false,
                "explicit": false
            },
            "safe": true,
            "id": 304,
            "lang": "en"
        },
        {
            "category": "Misc",
            "type": "twopart",
            "setup": "Why was the river rich?",
            "delivery": "Because it had two banks.",
            "flags": {
                "nsfw": false,
                "religious": false,
                "political": false,
                "racist": false,
                "sexist": false,
                "explicit": false
            },
            "id": 182,
            "safe": true,
            "lang": "en"
        },
        {
            "category": "Programming",
            "type": "single",
            "joke": "Java is like Alzheimer's, it starts off slow, but eventually, your memory is gone.",
            "flags": {
                "nsfw": false,
                "religious": false,
                "political": false,
                "racist": false,
                "sexist": false,
                "explicit": false
            },
            "id": 27,
            "safe": false,
            "lang": "en"
        },
        {
            "category": "Spooky",
            "type": "twopart",
            "setup": "How do Rednecks celebrate Halloween?",
            "delivery": "Pump kin!",
            "flags": {
                "nsfw": true,
                "religious": false,
                "political": false,
                "racist": false,
                "sexist": false,
                "explicit": true
            },
            "safe": false,
            "id": 300,
            "lang": "en"
        },
        {
            "category": "Pun",
            "type": "twopart",
            "setup": "What's the best thing about Switzerland?",
            "delivery": "I don't know, but the flag is a big plus.",
            "flags": {
                "nsfw": false,
                "religious": false,
                "racist": false,
                "sexist": false,
                "political": false,
                "explicit": false
            },
            "id": 194,
            "safe": true,
            "lang": "en"
        },
        {
            "category": "Christmas",
            "type": "twopart",
            "setup": "Why does Santa go down the chimney?",
            "delivery": "Because it soots him!",
            "flags": {
                "nsfw": false,
                "religious": false,
                "political": false,
                "racist": false,
                "sexist": false,
                "explicit": false
            },
            "id": 253,
            "safe": true,
            "lang": "en"
        },
        {
            "category": "Programming",
            "type": "single",
            "joke": "\"Can I tell you a TCP joke?\"\n\"Please tell me a TCP joke.\"\n\"OK, I'll tell you a TCP joke.\"",
            "flags": {
                "nsfw": false,
                "religious": false,
                "political": false,
                "racist": false,
                "sexist": false,
                "explicit": false
            },
            "id": 57,
            "safe": true,
            "lang": "en"
        },
        {
            "category": "Programming",
            "type": "twopart",
            "setup": "How did the programmer die in the shower?",
            "delivery": "He read the shampoo bottle instructions: Lather. Rinse. Repeat.",
            "flags": {
                "nsfw": false,
                "religious": false,
                "political": false,
                "racist": false,
                "sexist": false,
                "explicit": false
            },
            "safe": false,
            "id": 266,
            "lang": "en"
        },
        {
            "category": "Programming",
            "type": "single",
            "joke": "Algorithm: A word used by programmers when they don't want to explain how their code works.",
            "flags": {
                "nsfw": false,
                "religious": false,
                "political": false,
                "racist": false,
                "sexist": false,
                "explicit": false
            },
            "id": 51,
            "safe": true,
            "lang": "en"
        },
        {
            "category": "Pun",
            "type": "single",
            "joke": "Oysters hate to give away their pearls because they are shellfish.",
            "flags": {
                "nsfw": false,
                "religious": false,
                "political": false,
                "racist": false,
                "sexist": false,
                "explicit": false
            },
            "id": 90,
            "safe": true,
            "lang": "en"
        },
        {
            "category": "Misc",
            "type": "twopart",
            "setup": "What is the difference between the Constitutions of the USA and the USSR? Don't both of them guarantee freedom of speech?",
            "delivery": "Yes, but the Constitution of the USA also guarantees freedom after the speech.",
            "flags": {
                "nsfw": false,
                "religious": false,
                "political": true,
                "racist": false,
                "sexist": false,
                "explicit": false
            },
            "id": 181,
            "safe": false,
            "lang": "en"
        },
        {
            "category": "Dark",
            "type": "twopart",
            "setup": "How do we know Jesus wasn't black?",
            "delivery": "He would have been hung from a tree, not a cross.",
            "flags": {
                "nsfw": false,
                "religious": true,
                "political": false,
                "racist": true,
                "sexist": false,
                "explicit": false
            },
            "id": 110,
            "safe": false,
            "lang": "en"
        },
        {
            "category": "Dark",
            "type": "twopart",
            "setup": "Why are there no pharmacies in Africa?",
            "delivery": "Because you can't use medicine on an empty stomach.",
            "flags": {
                "nsfw": false,
                "religious": false,
                "political": false,
                "racist": true,
                "sexist": false,
                "explicit": false
            },
            "id": 99,
            "safe": false,
            "lang": "en"
        },
        {
            "category": "Programming",
            "type": "twopart",
            "setup": "Why did the programmer quit his job?",
            "delivery": "Because he didn't get arrays.",
            "flags": {
                "nsfw": false,
                "religious": false,
                "political": false,
                "racist": false,
                "sexist": false,
                "explicit": false
            },
            "id": 16,
            "safe": true,
            "lang": "en"
        },
        {
            "category": "Programming",
            "type": "single",
            "joke": "Two SQL tables sit at the bar. A query approaches and asks \"Can I join you?\"",
            "flags": {
                "nsfw": false,
                "religious": false,
                "political": false,
                "racist": false,
                "sexist": false,
                "explicit": false
            },
            "id": 221,
            "safe": true,
            "lang": "en"
        },
        {
            "category": "Dark",
            "type": "single",
            "joke": "My girlfriend's dog died, so I tried to cheer her up by getting her an identical one. It just made her more upset. She screamed at me, \"What am I supposed to do with two dead dogs?\"",
            "flags": {
                "nsfw": false,
                "religious": false,
                "political": false,
                "racist": false,
                "sexist": false,
                "explicit": false
            },
            "safe": false,
            "id": 275,
            "lang": "en"
        },
        {
            "category": "Spooky",
            "type": "twopart",
            "setup": "Why didn't the skeleton go for prom?",
            "delivery": "Because it had nobody.",
            "flags": {
                "nsfw": false,
                "religious": false,
                "political": false,
                "racist": false,
                "sexist": false,
                "explicit": false
            },
            "id": 183,
            "safe": true,
            "lang": "en"
        },
        {
            "category": "Programming",
            "type": "single",
            "joke": "Java is like Alzheimer's, it starts off slow, but eventually, your memory is gone.",
            "flags": {
                "nsfw": false,
                "religious": false,
                "political": false,
                "racist": false,
                "sexist": false,
                "explicit": false
            },
            "id": 27,
            "safe": false,
            "lang": "en"
        },
        {
            "category": "Dark",
            "type": "single",
            "joke": "I was going to tell a dead baby joke. But I decided to abort.",
            "flags": {
                "nsfw": false,
                "religious": false,
                "political": false,
                "racist": false,
                "sexist": false,
                "explicit": true
            },
            "id": 207,
            "safe": false,
            "lang": "en"
        },
        {
            "category": "Dark",
            "type": "single",
            "joke": "Hey girl are you a school? Because I want to shoot some kids up inside of you.",
            "flags": {
                "nsfw": true,
                "religious": false,
                "political": false,
                "racist": false,
                "sexist": false,
                "explicit": true
            },
            "safe": false,
            "id": 269,
            "lang": "en"
        },
        {
            "category": "Programming",
            "type": "twopart",
            "setup": "What is a dying programmer's last program?",
            "delivery": "Goodbye, world!",
            "flags": {
                "nsfw": false,
                "religious": false,
                "political": false,
                "racist": false,
                "sexist": false,
                "explicit": false
            },
            "id": 56,
            "safe": true,
            "lang": "en"
        },
        {
            "category": "Programming",
            "type": "twopart",
            "setup": "What do you get if you lock a monkey in a room with a typewriter for 8 hours?",
            "delivery": "A regular expression.",
            "flags": {
                "nsfw": false,
                "religious": false,
                "political": false,
                "racist": false,
                "sexist": false,
                "explicit": false
            },
            "id": 26,
            "safe": true,
            "lang": "en"
        },
        {
            "category": "Pun",
            "type": "twopart",
            "setup": "Why did the koala get rejected?",
            "delivery": "Because he did not have any koalafication.",
            "flags": {
                "nsfw": false,
                "religious": false,
                "political": false,
                "racist": false,
                "sexist": false,
                "explicit": false
            },
            "id": 192,
            "safe": true,
            "lang": "en"
        }
    ]
}]


let index = Math.floor(Math.random() * myJokes.length-1)
console.log(index)
joke.innerHTMl = myJokes[index].joke