const word = document.getElementById("word");
const partOfSpeech = document.getElementById("partOfSpeech");
const definition = document.getElementById("definition");


// test case getting the definition for "hello"
    // may be worth having a search function for users to input a word
fetch("https://api.dictionaryapi.dev/api/v2/entries/en/hello")
    .then(res => res.json())
    .then(data => {
        word.innerHTML = data[0].word;
        partOfSpeech.innerHTML = data[0].meanings[0].partOfSpeech;
        definition.innerHTML = data[0].meanings[0].definitions[0].definition;
    });