import axios from 'axios';

// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";

import { renderUsers } from "./render-function";

export const refs={
  container : document.querySelector(".gallery"),
  formSubmit: document.querySelector(".form"),
  loader : document.querySelector(".loader"),
}

const API_KEY = '48810135-3fc2af65eea4986756bc51882';
const BASE_URl="https://pixabay.com/api/?";

 export function searchImg(name){
  const params = new URLSearchParams({
    key : API_KEY ,
    q : name,
    image_type : "photo",
    orientation : "horizontal",
    safesearch : true,
  });

  refs.container.innerHTML = '';
  refs.loader.style.display = 'block';

  return fetch(`${BASE_URl}${params}`)
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    setTimeout(function(){
    renderUsers(data.hits);
    refs.loader.style.display = 'none';}, 1000);
  })
  .catch(error=>{
    iziToast.show({
    message:"Sorry, there are no images matching your search query. Please, try again!",
    position:"topRight",
    messageColor: 'white',
    backgroundColor: "#cb4335",
    });
  });
 }
// ------------------
export function onFormSubmit(e){
  e.preventDefault();
  const inputValue = e.currentTarget.elements.inpImg.value;
  if (inputValue === ""){
    iziToast.show({
      message:"Fill please all fields!",
      position:"topCenter",
      messageColor: 'white',
      backgroundColor: "#cb4335",
      });
    return console.log("Fill please all fields!");
  }

  console.log(123,inputValue);
    e.target.reset();
  searchImg(inputValue);

};
