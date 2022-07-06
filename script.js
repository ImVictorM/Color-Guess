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
  return `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
}

window.onload = () => {
  const circles = document.getElementsByClassName('ball');
  for (let index = 0; index < circles.length; index += 1) {
    circles[index].style.backgroundColor = generateRandomColor();
  }
};
