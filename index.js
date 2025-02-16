import{S as c,i as l}from"./assets/vendor-B2mb6eXk.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function e(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(t){if(t.ep)return;t.ep=!0;const o=e(t);fetch(t.href,o)}})();function m(a){const r=a.map(e=>`<li class="gallery-item">
      <a class="gallery-link" href="${e.largeImageURL}">
      <img
        class="gallery-image"
        src="${e.webformatURL}"
        data-source="${e.largeImageURL}"
        alt="${e.tags.split(",",3)}"
      />
      </a>
        <div class="img-info">
            <span class="img-span"> Likes: <br> ${e.likes}</span>
            <span class="img-span"> Views: <br> ${e.views}</span>
            <span class="img-span"> Comments: <br> ${e.comments}</span>
            <span class="img-span"> Downloads: <br> ${e.downloads}</span>
        </div>
      </li>`).join("");s.container.insertAdjacentHTML("afterbegin",r),new c(".gallery a",{captionsData:"alt",captionDelay:250})}const s={container:document.querySelector(".gallery"),formSubmit:document.querySelector(".form"),loader:document.querySelector(".loader")},u="48810135-3fc2af65eea4986756bc51882",p="https://pixabay.com/api/?";function f(a){const r=new URLSearchParams({key:u,q:a,image_type:"photo",orientation:"horizontal",safesearch:!0});return s.container.innerHTML="",s.loader.style.display="block",fetch(`${p}${r}`).then(e=>{if(!e.ok)throw new Error(`HTTP error! Status: ${e.status}`);return e.json()}).then(e=>{setTimeout(function(){m(e.hits),s.loader.style.display="none"},1e3)}).catch(e=>{l.show({message:"Sorry, there are no images matching your search query. Please, try again!",position:"topRight",messageColor:"white",backgroundColor:"#cb4335"})})}function d(a){a.preventDefault();const r=a.currentTarget.elements.inpImg.value;if(r==="")return l.show({message:"Fill please all fields!",position:"topCenter",messageColor:"white",backgroundColor:"#cb4335"}),console.log("Fill please all fields!");console.log(123,r),a.target.reset(),f(r)}s.formSubmit.addEventListener("submit",d);
//# sourceMappingURL=index.js.map
