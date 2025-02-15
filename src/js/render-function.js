// Описаний у документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

import { refs } from './pixabay-api';

// ------------------
// function createItem({preview,original,description}){
//   return `<li class="gallery-item">
//     <a class="gallery-link" href="${original}">
//       <img
//         class="gallery-image"
//         src="${preview}"
//         data-source="${original}"
//         alt="${description}"
//       />
//     </a>
//   </li>`;
//   };

//   function CreateItems(items){
//     return items.map(CreateItem).join('');
//   }
  
//   conteiner.insertAdjacentHTML("beforeend", CreateItems(images));
  // ------------------------
  
  // conteiner.addEventListener("click", event=> {
  
  //   event.preventDefault();
  
  //   if(event.target=== event.currentTarget) return;
  
  //   const liImg = event.target.dataset.source;
  
    // const instance = basicLightbox.create(`<img src= ${liImg} />`);
    // instance.show();
  // });

export function renderUsers(users) {
  const markup = users
    .map((user) => {
      return `<li class="gallery-item">
      <a class="gallery-link" href="${user.largeImageURL}">
      <img
        class="gallery-image"
        src="${user.webformatURL}"
        data-source="${user.largeImageURL}"
        alt="${user.tags.split(',')[0]}"
      />
      </a>
        <div class="img-info">
            <span class="img-span"> Likes: <br> ${user.likes}</span>
            <span class="img-span"> Views: <br> ${user.views}</span>
            <span class="img-span"> Comments: <br> ${user.comments}</span>
            <span class="img-span"> Downloads: <br> ${user.downloads}</span>
        </div>
      </li>`;
    })
    .join("");
  refs.container.insertAdjacentHTML("afterbegin",markup);
  const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
  });
}
// ------------------
 // data.hits[1].webformatURL
  // webformatURL — посилання на маленьке зображення для списку карток у галереї
  // largeImageURL — посилання на велике зображення для модального вікна
  // tags — рядок з описом зображення. Підійде для атрибута alt
  // likes — кількість вподобайок
  // views — кількість переглядів
  // comments — кількість коментарів
  // downloads — кількість завантажень


