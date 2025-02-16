import axios from 'axios';

// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";

import { renderUsers } from "./render-function";

export const refs={
  container : document.querySelector(".gallery"),
  formSubmit: document.querySelector(".form"),
  // fetchUsersBtn : document.querySelector(".btm"),
}

const API_KEY = '48810135-3fc2af65eea4986756bc51882';

 export function searchImg(name){
 const params = {
    key : API_KEY ,
    q : name,
    image_type : "photo",
    orientation : "horizontal",
    safesearch : true,
  };
  const BASE_URl="https://pixabay.com/api/?";
  console.log(111,params);
  
  const url = BASE_URl+"key="+API_KEY+"&q="+encodeURIComponent(name);
  // return axios.get(uBASE_URl,{params});
  fetch(url,{params})
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    // console.log(9090,params.orientation);
    return response.json();
    // Response handling
  })
  .then(data => {
    console.log(222,data.hits[2].largeImageURL);
    console.log(543,data.hits);
    
    renderUsers(data.hits);
    // Data handling
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

// export const options = {
//   method : "GET",
// }
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
// --------------
// export function fetchUsers(e) {
//   console.log(e.target.inpImg.value,111);}
  
// // --------------
// const params = new URLSearchParams({
//   key : API_KEY ,
//   q : name,
//   image_type : "photo",
//   orientation : "horizontal",
//   safesearch : true,
// });
// var gallery = $('.gallery a').simpleLightbox()

// gallery.next(); // Next Image
// gallery.refresh();//refresh image 	Уничтожает и повторно инициализирует лайтбокс, необходимый, например, для вызовов Ajax или после манипуляций с DOM.

// function getAllImg(){
//   const BASE_URL = "https://pixabay.com";
//   const  END_POINT = "/api/";
//   const url = `${BASE_URL}${END_POINT}`;
//   const params = {};
//   return axios.get(url,)
// }