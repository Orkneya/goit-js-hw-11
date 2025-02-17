import {refs, searchImg} from "./js/pixabay-api";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

refs.formSubmit.addEventListener('submit', onFormSubmit);

function onFormSubmit(e){
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
    e.target.reset();
  searchImg(inputValue);
};


