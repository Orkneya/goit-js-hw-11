// import {refs, searchImg} from "./js/pixabay-api";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import { searchImg } from "./js/pixabay-api";
import { renderUsers } from "./js/render-function";
export const refs={
  container : document.querySelector(".gallery"),
  formSubmit: document.querySelector(".form"),
  loader : document.querySelector(".loader"),
}
const mes1 ="Fill please all fields!";
const mes2 = "Sorry, there are no images matching your search query. Please, try again!";

refs.formSubmit.addEventListener('submit', onFormSubmit);
function onFormSubmit(e){
  e.preventDefault();
  const inputValue = e.currentTarget.elements.inpImg.value;
  if (!inputValue.trim()){
    showError(mes1);
    return console.log(mes1);
  }
    refs.loader.style.display = 'block';
    searchImg(inputValue)
    .then(response=>{
      if (response.data.hits.length === 0){
        refs.container.innerHTML = '';
        showError(mes2);
        refs.loader.style.display = 'none';
        return console.log(mes2);
      } 
      renderUsers(response.data.hits);
      refs.loader.style.display = 'none';
    })
    .catch(error=>{
      showError(mes2);
      return console.log("Error:", error);
    });
    e.target.reset();
};

export function showError(msg){
  iziToast.show({
        message: msg,
        position:"topRight",
        messageColor: 'white',
        backgroundColor: "#cb4335",
        });
}


