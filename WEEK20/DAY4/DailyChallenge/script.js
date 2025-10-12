async function loadEmoji() {
  const res = await fetch('/emoji');
  const data = await res.json();
  renderQuestion(data.emoji, data.options);
}

function renderQuestion(emoji, options) {
  document.getElementById('emoji').textContent = emoji;
  const optionsDiv = document.getElementById('options');
  optionsDiv.innerHTML = '';
  options.forEach(opt => {
    const btn = document.createElement('button');
    btn.textContent = opt;
    btn.onclick = () => submitGuess(opt);
    optionsDiv.appendChild(btn);
  });
}

async function submitGuess(answer) {
  const res = await fetch('/guess', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ answer }),
  });
  const data = await res.json();
  document.getElementById('feedback').textContent = data.message;
  document.getElementById('score').textContent = data.score;
  renderQuestion(data.nextEmoji, data.options);
}

// Load first question
loadEmoji();
