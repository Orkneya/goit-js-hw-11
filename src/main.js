// import {refs, searchImg} from "./js/pixabay-api";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import { searchImg } from "./js/pixabay-api";
export const refs={
  container : document.querySelector(".gallery"),
  formSubmit: document.querySelector(".form"),
  loader : document.querySelector(".loader"),
}
const mes1 ="Fill please all fields!";

refs.formSubmit.addEventListener('submit', onFormSubmit);
function onFormSubmit(e){
  const inputValue = e.currentTarget.elements.inpImg.value;
  e.preventDefault();
  if (inputValue === ""){
    showError(mes1);
    return console.log(mes1);
  }
    refs.loader.style.display = 'block';
    searchImg(inputValue);
    refs.loader.style.display = 'none';
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


