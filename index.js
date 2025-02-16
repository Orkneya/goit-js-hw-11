import{S as m,i as l}from"./assets/vendor-B2mb6eXk.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();function g(s){const t=s.map(o=>`<li class="gallery-item">
      <a class="gallery-link" href="${o.largeImageURL}">
      <img
        class="gallery-image"
        src="${o.webformatURL}"
        data-source="${o.largeImageURL}"
        alt="${o.tags.split(",")[0]}"
      />
      </a>
        <div class="img-info">
            <span class="img-span"> Likes: <br> ${o.likes}</span>
            <span class="img-span"> Views: <br> ${o.views}</span>
            <span class="img-span"> Comments: <br> ${o.comments}</span>
            <span class="img-span"> Downloads: <br> ${o.downloads}</span>
        </div>
      </li>`).join("");c.container.insertAdjacentHTML("afterbegin",t),new m(".gallery a",{captionsData:"alt",captionDelay:250})}const c={container:document.querySelector(".gallery"),formSubmit:document.querySelector(".form")},i="48810135-3fc2af65eea4986756bc51882";function p(s){const t={key:i,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0},o="https://pixabay.com/api/?";console.log(111,t);const n=o+"key="+i+"&q="+encodeURIComponent(s);fetch(n,{params:t}).then(e=>{if(!e.ok)throw new Error(`HTTP error! Status: ${e.status}`);return e.json()}).then(e=>{console.log(222,e.hits[2].largeImageURL),console.log(543,e.hits),g(e.hits)}).catch(e=>{l.show({message:"Sorry, there are no images matching your search query. Please, try again!",position:"topRight",messageColor:"white",backgroundColor:"#cb4335"})})}function u(s){s.preventDefault();const t=s.currentTarget.elements.inpImg.value;if(t==="")return l.show({message:"Fill please all fields!",position:"topCenter",messageColor:"white",backgroundColor:"#cb4335"}),console.log("Fill please all fields!");console.log(123,t),s.target.reset(),p(t)}c.formSubmit.addEventListener("submit",u);
//# sourceMappingURL=index.js.map
