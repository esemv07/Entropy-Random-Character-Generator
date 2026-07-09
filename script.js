expression = [
    "masc",
    "fem",
]

age = [
    "15-25",
    "25-35",
    "35-45",
    "45-55",
    "55-65",
]

birthMonth = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
]

height = [
    "4ft 10in - 5ft",
    "5ft 1in - 5ft 3in",
    "5ft 4in - 5ft 6in",
    "5ft 7in - 5ft 9in",
    "5ft 10in - 6ft",
    "6ft 1in - 6ft 3in",
    "6ft 4in - 6ft 6in",
]

strengths = [
    "intelligent",
    "adventurous",
    "ambitious",
    "approachable",
    "calm",
    "compassionate",
    "confident",
    "courageous",
    "dependable",
    "easygoing",
    "enthusiastic",
    "fearless",
    "focused",
    "generous",
    "hard working",
    "knowledgeable",
    "lovable",
    "loyal",
    "noble",
    "polite",
    "resilient",
    "responsible",
    "selfless",
    "skillful",
    "strong",
    "thoughtful",
    "wise",
    "witty"
]

weaknesses = [
    "angry",
    "arrogant",
    "careless",
    "clumsy",
    "over-confident",
    "cowardly",
    "dramatic",
    "egotistic",
    "envious",
    "forgetful",
    "gives up easily",
    "greedy",
    "heartless",
    "hot headed",
    "impatient",
    "indecisive",
    "irresponsible",
    "lazy",
    "disloyal",
    "naive",
    "reckless",
    "rude",
    "selfish",
    "thoughtless",
    "uncommitted",
    "uncoordinated",
    "unfriendly",
]

fears = [
    "enclosed spaces",
    "blood",
    "cats",
    "spiders",
    "dogs",
    "insects",
    "mice and rats",
    "snakes",
    "birds",
    "darkness",
    "failure",
    "mirrors",
    "bright colours",
    "demons",
    "death",
    "fire",
    "witchcraft",
    "the moon",
]

likesOrDislikes = [
    "outer space",
    "rain",
    "snow",
    "the ocean",
    "forests",
    "mountains",
    "travelling",
    "shopping",
    "baking and cooking",
    "writing",
    "photography",
    "gaming",
    "sports",
    "reading",
    "animals",
    "art",
    "learning",
    "listening to music",
    "programming",
    "complaining",
    "blogging",
    "trains",
    "comics",
    "camping",
    "surfing",
    "swimming",
    "skateboarding",
    "cycling",
    "maths",
    "history",
    "geography",
    "science",
    "singing",
    "acting",
    "inventing",
    "sleeping in",
    "podcasts",
    "robotics",
    "documentaries",
    "comedy",
]

character = JSON.parse(localStorage.getItem("character")) || {
    "expression": "",
    "age": "",
    "birthMonth": "",
    "height": "",
    "strengths": "",
    "weaknesses": "",
    "fears": "",
    "likes": "",
    "dislikes": "",
}


function getRandomItem(array, number) {
    return [...array].sort( () => Math.random() - 0.5).slice(0, number)
}

function pickItems(array, number, arrayName) {
    if (array == likesOrDislikes) {
        const results = getRandomItem(array, number);
        document.getElementById('next').classList.remove('hidden');
        let resultsString = "";
        resultsString = `Likes... ${results[0]}<br><br>Dislikes... ${results[1]}`;
        document.getElementById('results').innerHTML = resultsString;
        character.likes = results[0];
        character.dislikes = results[1];

        localStorage.setItem("character", JSON.stringify(character));
    } else {
        const results = getRandomItem(array, number);
        document.getElementById('next').classList.remove('hidden');
        let resultsString = "";
        if (results.length > 1) {
            results.forEach((result) => {
                resultsString += `${result}<br>`;
            })
        } else {
            results.forEach((result) => {
                resultsString += `${result}`;
            })
        }
        document.getElementById('results').innerHTML = resultsString;
        character[arrayName] = resultsString;

        localStorage.setItem("character", JSON.stringify(character));
    }
    document.getElementById('resultsContainer').classList.remove('hidden');
    document.getElementById('picker').disabled = true;
}


function restart() {
    localStorage.removeItem("character");
}


window.addEventListener('load', () => {
    if (window.location.href.includes("character.html")) {
        const character = JSON.parse(localStorage.getItem("character"));
        document.getElementById('expression').innerHTML = character.expression;
        document.getElementById('birthday').innerHTML = `Age: ${character.age}<br>Birth Month: ${character.birthday}`;
        document.getElementById('height').innerHTML = character.height;
        document.getElementById('strengthsAndWeaknesses').innerHTML = `Strengths:<br>${character.strengths}<br>Weaknesses:<br>${character.weaknesses}`;
        document.getElementById('fears').innerHTML = character.fears;
        document.getElementById('likesAndDislikes').innerHTML = `Likes...<br>${character.likes}<br><br>Dislikes...<br>${character.dislikes}`;

        document.getElementById('head').src = `assets/${character.expression} character/${character.expression} Character Base.png`;

        let skin = [
            "Black",
            "Brown",
            "Tan",
            "White",
        ];

        let hair = [
            "Black",
            "Blonde",
            "Brown",
            "Orange",
        ];

        let eyes = [
            "Blue",
            "Brown",
            "Green",
            "Grey",
        ];

        let randomSkin = Math.floor(Math.random() * 4);
        let randomHair = Math.floor(Math.random() * 4);
        let randomEyes = Math.floor(Math.random() * 4);

        document.getElementById('skin').src = `assets/${character.expression} character/Skin ${skin[randomSkin]}.png`;
        document.getElementById('hair').src = `assets/${character.expression} character/Hair ${hair[randomHair]}.png`;
        document.getElementById('eyes').src = `assets/${character.expression} character/Eyes ${eyes[randomEyes]}.png`;
    }
})