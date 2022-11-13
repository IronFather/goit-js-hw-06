// Напиши скрипт для создания галереи изображений по массиву данных. 
// В HTML есть список ul.gallery.

// 1.Используй массив объектов images для создания элементов <img> вложенных в <li>.
// 2.Для создания разметки используй шаблонные строки и метод insertAdjacentHTML().
// 3.Все элементы галереи должны добавляться в DOM за одну операцию вставки.
// 4.Добавь минимальное оформление галереи флексбоксами или гридами через CSS классы.

const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const   galleryEl = document.querySelector(".gallery");
console.log(galleryEl);

const makeImagesOfGalleryEl = images.map((image) => `<li class="gallery__item"><img class="gallery__img" src="${image.url}" alt="${image.alt}"></></li>`).join("");
console.log(makeImagesOfGalleryEl); //2+

galleryEl.insertAdjacentHTML("afterbegin", makeImagesOfGalleryEl); //2,3+

//4+ in CSS file

