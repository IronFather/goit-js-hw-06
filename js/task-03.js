const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

function makeNewGallery(arr) {
  const newGalleryEl = [];
  
  images.forEach(({ url, alt } = image) => {
    const liEl = document.createElement("li");
    const newImageEl = document.createElement("img");
    newImageEl.src = url;
    newImageEl.alt = alt;

    newImageEl.width = 200;

    liEl.append(newImageEl);
    newGalleryEl.push(liEl);
  });

  return newGalleryEl;
}
const galleryOfFaunaEl = document.querySelector(".gallery");
galleryOfFaunaEl.append(...makeNewGallery(images));


