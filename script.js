function createCircle() {
  const circlesContainer = document.getElementById('circles-container');
  for (let count = 1; count <= 6; count += 1) {
    const circle = document.createElement('div');
    circle.classList.add('ball');
    circlesContainer.appendChild(circle);
  }
}

createCircle();

function generateRandomColor() {
  const randomNumber1 = Math.floor(Math.random() * 255);
  const randomNumber2 = Math.floor(Math.random() * 255);
  const randomNumber3 = Math.floor(Math.random() * 255);
  return `rgb(${randomNumber1}, ${randomNumber2}, ${randomNumber3})`;
}

const colorToGuess = document.getElementById('rgb-color');
const specificColor = generateRandomColor();
colorToGuess.innerText = specificColor;

const circles = document.getElementsByClassName('ball');
const randomCircle = circles[Math.floor(Math.random() * circles.length)];
randomCircle.style.backgroundColor = specificColor;
console.log(randomCircle);

for (let index = 0; index < circles.length; index += 1) {
  if (circles[index].style.backgroundColor !== specificColor) {
    circles[index].style.backgroundColor = generateRandomColor();
  }
}

const answer = document.getElementById('answer');
for (let index = 0; index < circles.length; index += 1) {
  circles[index].addEventListener('click', (event) => {
    if (event.target.style.backgroundColor === specificColor) {
      answer.innerText = 'Acertou!';
    } else {
      answer.innerText = 'Errou! Tente novamente!';
    }
  });
}
