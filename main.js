let oink = document.getElementById("pigButton");
console.log(oink);
// great! Now oink is going to be the name of your button. 
// now we need to make the button functional, so I need to add an
// event listener to my oink 

oink.addEventListener('click', function(){
    // console.log("your oink button is working")
    // this is just checking to see if I wrote this correctly.
    // It does wohooo loves it 

    let wordBox = document.getElementById("wordBox");
    // console.log(wordBox);
    // This gives the html properties of the text box. 

    let inputText = wordBox.value;
    console.log(inputText)

    let pigLatin = (inputText) => {
        inputText = inputText.toLowerCase().trim()
          let aIdx = inputText.indexOf('a');
          let eIdx = inputText.indexOf('e');
          let iIdx = inputText.indexOf('i');
          let oIdx = inputText.indexOf('o');
          let uIdx = inputText.indexOf('u');
          let answer = -1;
        
          if (aIdx === answer) {}
          else if (aIdx != answer && answer < aIdx) {answer = aIdx;}
        
           if (eIdx === -1) {}
          else if (answer != -1 && answer > eIdx) {answer = eIdx} 
          else if (answer === -1 && answer < eIdx)
          {answer = eIdx}
        
          if (iIdx === -1) {}
          else if (answer != -1 && answer > iIdx)
          {answer = iIdx} 
          else if (answer === -1 && answer < iIdx)
          {answer = iIdx} 
          
          
          if (oIdx === -1) {}
          else if (answer != -1 && answer > oIdx) {answer = oIdx;}
          else if (answer === -1 && answer < oIdx)
          {answer = oIdx}
        
          if (uIdx === -1) {}
          else if (answer != -1 && answer > uIdx) {answer = uIdx;} 
          else if (answer == -1 && answer < uIdx) {answer = uIdx}
        
        
        
        if (answer === 0) {return inputText + "yay"}
          else if (answer != 0) {return inputText.slice(answer, inputText.length) + inputText.slice(0, answer) + "ay" }
        }
        let pigLatinTranslated = pigLatin(inputText);
        // console.log(pigLatinTranslated);
        // so basically the inputed text has now been translated into pig latin and the outcome has no been called pigLatinTranslated
        // now I need to make it show up in an li 
        // Then I want to make the li disappear once its clicked on, which the css to disappear is already written in my css file
        
        // This code will ensure that the input box will be emptied after submission
        wordBox.value = '';

        let li = document.createElement("li");
        let ul = document.getElementById("thePigLatinWords");
        ul.appendChild(li);
        li.innerText = pigLatinTranslated;

        // add an event listener so we can 
li.addEventListener('click', function(){
    // check that it works.... UPDATE it does 
console.log("li has been clicked");

if(li.className == "") {li.className = 'disappear'}
else {li.className = ''}
})
    }
)