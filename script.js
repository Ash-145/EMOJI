const emojiData = [
  { symbol: '&#129409;', code: '129409' }, // 🦁
  // Add more emoji objects as needed
];

const emojiGallery = document.getElementById('emoji-gallery');

emojiData.forEach(emoji => {
  const emojiItem = document.createElement('div');
  emojiItem.classList.add('emoji-item');

  const symbol = document.createElement('span');
  symbol.classList.add('emoji-symbol');
  symbol.innerHTML = emoji.symbol;

  const code = document.createElement('code');
  code.classList.add('emoji-code');
  code.textContent = emoji.code;

  emojiItem.appendChild(symbol);
  emojiItem.appendChild(code);

  emojiGallery.appendChild(emojiItem);
});
