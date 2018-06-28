letterCounts = {};
wordsCounts = {};
document.getElementById("countButton").onclick = function () {
    var typedText = document.getElementById("textInput").value;
    typedText = typedText.toLowerCase();


    typedText = typedText.replace(/[^a-z'\s]+/g, "");
 
    for (let i = 0; i < typedText.length; i++) {
        currentLetter = typedText[i];
    if (letterCounts[currentLetter] === undefined) {
        letterCounts[currentLetter] = 1;
    } else {
        letterCounts[currentLetter]++;
    }
}
    for (letter in letterCounts) {
        let span = document.createElement("span");
        let textContent = document.createTextNode('"' + letter + "\": " + letterCounts[letter] + ", ");
        span.appendChild(textContent);
        document.getElementById("lettersDiv").appendChild(span);
    }
    let words = typedText.split(/\s/);
    for(let i = 0; i < words.length; i++){
       currentWord = words[i];
       if(wordsCounts[currentWord] === undefined){
           wordsCounts[currentWord] = 1;
       } else {
           wordsCounts[currentWord]++;
       }

    }
    for (words in wordsCounts) {
        let span = document.createElement("span");
        let textContent = document.createTextNode('"' + words + "\": " + wordsCounts[words] + ", ");
        span.appendChild(textContent);
        document.getElementById("wordsDiv").appendChild(span);

}
}
