(() => {

  const sizes = [
    100,
    150,
    200,
    250,
    300
  ];

  const types = [
    '/g',
    '/c',
    '',
    '/gif'
  ];

  let addedCount = false;
  let countElement;
  let count = 0;

  function addCage() {
    const img = document.createElement('img');
    const type = types[Math.floor(Math.random() * types.length)];
    const size = sizes[Math.floor(Math.random() * sizes.length)];
    const url = `http://www.placecage.com${type}/${size}/${size}`;
    img.setAttribute('src', url);
    img.style.position = 'absolute';
    img.style.top = `${Math.random() * (window.innerHeight - size)}px`;
    img.style.left = `${Math.random() * (window.innerWidth - size)}px`;
    img.style.transition = 'all 0.1s linear';
    document.body.appendChild(img);

    img.onmouseover = function() {
      var size = 1 + Math.round(Math.random() * 10) / 100;
      var angle = Math.round(Math.random() * 20 - 10);
      var result = "rotate(" + angle + "deg) scale(" + size + "," + size + ")";
      this.style.transform = result;
    };

    img.onmouseout = function() {
      var size = .9 + Math.round(Math.random() * 10) / 100;
      var angle = Math.round(Math.random() * 6 - 3);
      var result = "rotate(" + angle + "deg) scale(" + size + "," + size + ")";
      this.style.transform = result;
    };

    count++;
    if (!addedCount) {
      countElement = document.createElement('p');
      document.body.appendChild(countElement);
      countElement.style.fontFamily = 'sans-serif';
      countElement.style.fontWeight = '700';
      countElement.style.color = 'red';
      countElement.style.position = 'absolute';
      countElement.style.bottom = '10px';
      countElement.style.textAlign = 'center';
      countElement.style.width = '100%';
      countElement.style.fontSize = '36px';
      countElement.style.zIndex = '999999';
      addedCount = true;
      document.querySelector('h1').remove();
    }
    countElement.textContent = `${count} CAGES CREATED`;
  }

  document.addEventListener('click', (e) => {
    if (e.target.tagName === 'IMG') {
      addCage();
    }
  });
  
  const pressed = [];
  const secretCode = 'cage';

  window.addEventListener('keyup', event => {
    pressed.push(event.key);
    pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
    if (pressed.join('').includes(secretCode)) {
      addCage();
    }
  });

})();