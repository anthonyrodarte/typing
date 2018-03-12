var $prompt = document.querySelector('p.text-prompt')
var $input = document.querySelector('input.input-text')
var $feedback = document.querySelector('div.feedback')
var $errors = document.querySelector('div.errors')

var errors = 0

var promptText = {
  text: `This is your typing test. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto.`,
  position: 0,
}

function postPrompt(words, location, position) {
  var $words = words.text

  var $pre = document.createElement('span')
  $pre.classList.add('pre')
  $pre.textContent = $words.slice(0, position)

  var $current = document.createElement('span')
  $current.classList.add('current')
  $current.textContent = $words[position]

  var $next = document.createElement('span')
  $next.classList.add('next')
  $next.textContent = $words.slice(position + 1)

  location.append($pre, $current, $next)

}

function checker(userInput, promptSegment) {
  if (userInput === promptSegment) {
    promptText.position++
    $prompt.textContent = ""
    postPrompt(promptText, $prompt, promptText.position)
    $feedback.textContent = ""
    $feedback.textContent = "Great!"

  } else {
    $feedback.textContent = ""
    $feedback.textContent = "Wrong!"
    errors++
    $errors.textContent = errors
  }
}

$input.addEventListener('input', function() {
  var segment = promptText.text.slice(0, $input.value.length)
  checker($input.value, segment)
})

postPrompt(promptText, $prompt, promptText.position)
