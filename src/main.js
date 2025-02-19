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
  console.log(781, inputValue);
  e.preventDefault();

  console.log(777, inputValue);

  if (inputValue === ""){
    showError(mes1);
    return console.log(mes1);
  }

    console.log(778, inputValue);

    refs.loader.style.display = 'block';
    searchImg(inputValue);

    console.log(779, inputValue);

    refs.loader.style.display = 'none';
    e.target.reset();

    console.log(780, inputValue);
};

export function showError(msg){
  iziToast.show({
        message: msg,
        position:"topRight",
        messageColor: 'white',
        backgroundColor: "#cb4335",
        });
}


