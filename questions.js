// questions pulled from a combination of https://www.rd.com/list/interesting-facts/, https://www.sciencefocus.com/science/fun-facts, https://newsfeed.time.com/2011/10/21/cheese-is-the-most-stolen-food-on-earth/

const questions = [
    {
        question: "What food is stolen the most in the world?",
        answers: [
            { text: "cheese", correct: true},
            { text: "chocolate", correct: false},
            { text: "fresh meat", correct: false},
            { text: "baby carrots", correct: false},
        ]
    },
    {
        question: "In what state is it legal to hunt unicorns?",
        answers: [
            {text: "California", correct: false},
            {text: "Florida", correct: false},
            {text: "Michigan", correct: true},
            {text: "Texas", correct: false}, 
        ]    
    },    {
        question: "What is the Cookie Monster's real name?",
        answers: [
            { text: "George", correct: false},
            { text: "Mikey", correct: false},
            { text: "Jose", correct: false},
            { text: "Sid", correct: true},
        ]
    },    {
        question: "How much does a cloud weigh?",
        answers: [
            { text: "1 million tons", correct: true},
            { text: "5 tons", correct: false},
            { text: "1 ton", correct: false},
            { text: "2 pounds ", correct: false},
        ]
    },    {
        question: "How old was the oldest dog?",
        answers: [
            { text: "28 years", correct: false},
            { text: "29.5 years", correct: true},
            { text: "30 years", correct: false},
            { text: "29 years", correct: false},
        ]
    },    {
        question: "Why was the chainsaw invented?",
        answers: [
            { text: "shaving", correct: false},
            { text: "wood chopping", correct: false},
            { text: "cake making", correct: false},
            { text: "childbirth", correct: true},
        ]
    },    {
        question: "What season do your nails grow the fastest?",
        answers: [
            { text: "spring", correct: false},
            { text: "winter", correct: false},
            { text: "summer", correct: true},
            { text: "fall", correct: false},
        ]
    },    {
        question: "What is a ranbow in Venus called?",
        answers: [
            { text: "A Majesty", correct: false},
            { text: "A Glory", correct: true},
            { text: "A Choo", correct: false},
            { text: "A Noble", correct: false},
        ]
    },    {
        question: "How big is the biggest butterfly's wingspan?",
        answers: [
            { text: "31 cm", correct: true},
            { text: "52 cm", correct: false},
            { text: "26 cm", correct: false},
            { text: "13 cm", correct: false},
        ]
    },    {
        question: "Which country has the most pyramids?",
        answers: [
            { text: "Mexico", correct: false},
            { text: "Egypt", correct: false},
            { text: "Sudan", correct: true},
            { text: "Brazil", correct: false},
        ]
    },    {
        question: "Where was the first animated movie made",
        answers: [
            { text: "USA", correct: false},
            { text: "Argentina", correct: true},
            { text: "England", correct: false},
            { text: "Spain", correct: false},
        ]
    },    {
        question: "What letter does not appear in any state name?",
        answers: [
            { text: "A", correct: false},
            { text: "X", correct: false},
            { text: "Z", correct: false},
            { text: "Q", correct: true},
        ]
    },    {
        question: "What is a cow-bison hybrid named?",
        answers: [
            { text: "beefalo", correct: true},
            { text: "cowson", correct: false},
            { text: "bicow", correct: false},
            { text: "abomination", correct: false},
        ]
    },    {
        question: "How long is the longest word?",
        answers: [
            { text: "189,819 letters", correct: true},
            { text: "61 letters", correct: false},
            { text: "942 letters", correct: false},
            { text: "11 letters", correct: false},
        ]
    },    {
        question: "How many calories do blue whales get in one mouthful?",
        answers: [
            { text: "10,000", correct: false},
            { text: "500,00", correct: true},
            { text: "250,00", correct: false},
            { text: "5,000", correct: false},
        ]
    },    {
        question: "What number does the first A appear in?",
        answers: [
            { text: "hundreds", correct: false},
            { text: "tens", correct: false},
            { text: "thousands", correct: true},
            { text: "ones", correct: false},
        ]
    },    {
        question: "What car company made the first huuman sized remote control car",
        answers: [
            { text: "Chevy", correct: false},
            { text: "Lexus", correct: false},
            { text: "Ford", correct: false},
            { text: "Mercedes", correct: true},
        ]
    },    {
        question: "How much was the Terminator script sold for?",
        answers: [
            { text: "1 million dollars", correct: false},
            { text: "1 dollar", correct: true},
            { text: "10 thousand", correct: false},
            { text: "100 thousand", correct: false},
        ]
    },    {
        question: "What was the biggest empire?",
        answers: [
            { text: "Ottoman", correct: false},
            { text: "British", correct: true},
            { text: "Persian", correct: false},
            { text: "Mongol", correct: false},
        ]
    },    {
        question: "How old is the oldest pregnancy test?",
        answers: [
            { text: "1340 years", correct: false},
            { text: "5034 years", correct: false},
            { text: "3383 years", correct: true},
            { text: "4028 years", correct: false},
        ]
    },    {
        question: "What country won the first World Cup?",
        answers: [
            { text: "Uruguay", correct: true},
            { text: "England", correct: false},
            { text: "Spain", correct: false},
            { text: "Madrid", correct: false},
        ]
    }
];