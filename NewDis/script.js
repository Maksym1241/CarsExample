let images = [
  'https://via.placeholder.com/150',
  'https://via.placeholder.com/200',
  'https://via.placeholder.com/250',
];

let index = 0;

setInterval(() => {
  let imageElements = document.querySelectorAll('#images-list img');
  imageElements.forEach((imageElement) => {
    imageElement.src = images[index];
  });

  index = (index + 1) % images.length;
}, 10000);
