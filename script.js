function createCircle() {
  const circlesContainer = document.getElementById('circles-container');
  for (let count = 1; count <= 6; count += 1) {
    const circle = document.createElement('div');
    circle.classList.add('ball');
    circlesContainer.appendChild(circle);
  }
}
createCircle();
