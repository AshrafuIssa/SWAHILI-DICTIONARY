const userInput = document.querySelector('.js-user-input');
const button = document.querySelector('.js-button');
const result = document.querySelector('.js-result');

button.addEventListener('click', (event) => {
  event.preventDefault();
  
  fetch("http://localhost:5008/" + userInput.value)
    .then( response => response.json())
     .then(words => {
       result.innerHTML = `
        <p> WORD: ${words.Word}</p>
        <p> MEANING: ${words.Meaning}</p>
        <p>SYNONYMS: ${words.Synonyms}</p>
        <p>CONJUGATION: ${words.Conjugation}</p>
       `
     })
     .catch(error => {
      result.innerHTML = `<p>${error}</p>`
     })

})

 