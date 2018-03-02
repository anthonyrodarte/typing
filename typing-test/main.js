var $prompt = document.querySelector('p.text-prompt')
var promptText = {
  text: `This is your writing test`,
  position: 4
}

function postPrompt(words, location, position) {
  var $words = words.text

  var $pre = document.createElement('span')
  $pre.textContent = $words.slice(0, position)

  var $current = document.createElement('span')
  $current.classList.add('current')
  $current.textContent = $words[position]

  var $next = document.createElement('span')
  $next.textContent = $words.slice(position + 1)

  location.append($pre, $current, $next)

}

postPrompt(promptText, $prompt, promptText.position)
