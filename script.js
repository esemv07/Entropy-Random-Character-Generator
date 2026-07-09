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
    "clouds",
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

character = {
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

function pickItems(arrayName, number) {
    const results = getRandomItem(arrayName, number);
    document.getElementById('next').classList.remove('hidden');
    let resultsString = "";
    results.forEach((result) => {
        resultsString += `${result}<br>`;
    })
    document.getElementById('results').innerHTML = resultsString;
    document.getElementById('resultsContainer').classList.remove('hidden');
    document.getElementById('picker').disabled = true;
}