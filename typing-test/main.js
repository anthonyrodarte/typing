var $prompt = document.querySelector('p.text-prompt')
var promptText = {
  text: `This is your writing test`
}

function postPrompt(words, location) {
  location.textContent = words.text
}

postPrompt(promptText, $prompt)
