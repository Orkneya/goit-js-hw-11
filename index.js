import{S as c,i as l}from"./assets/vendor-B2mb6eXk.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();function m(a){const o=new c(".gallery a"),s=a.map(r=>`<li class="gallery-item">
      <a class="gallery-link" href="${r.largeImageURL}">
      <img
        class="gallery-image"
        src="${r.webformatURL}"
        data-source="${r.largeImageURL}"
        alt="${r.tags.split(",",3)}"
      />
      </a>
        <div class="img-info">
            <span class="img-span"> Likes: <br> ${r.likes}</span>
            <span class="img-span"> Views: <br> ${r.views}</span>
            <span class="img-span"> Comments: <br> ${r.comments}</span>
            <span class="img-span"> Downloads: <br> ${r.downloads}</span>
        </div>
      </li>`).join("");n.container.insertAdjacentHTML("afterbegin",s),o.refresh()}const n={container:document.querySelector(".gallery"),formSubmit:document.querySelector(".form"),loader:document.querySelector(".loader")},u="48810135-3fc2af65eea4986756bc51882",f="https://pixabay.com/api/?";function p(a){const o=new URLSearchParams({key:u,q:a,image_type:"photo",orientation:"horizontal",safesearch:!0});return n.container.innerHTML="",n.loader.style.display="block",fetch(`${f}${o}`).then(s=>{if(!s.ok)throw new Error(`HTTP error! Status: ${s.status}`);return s.json()}).then(s=>{m(s.hits),n.loader.style.display="none"}).catch(s=>{l.show({message:"Sorry, there are no images matching your search query. Please, try again!",position:"topRight",messageColor:"white",backgroundColor:"#cb4335"})})}n.formSubmit.addEventListener("submit",d);function d(a){a.preventDefault();const o=a.currentTarget.elements.inpImg.value;if(o==="")return l.show({message:"Fill please all fields!",position:"topCenter",messageColor:"white",backgroundColor:"#cb4335"}),console.log("Fill please all fields!");a.target.reset(),p(o)}
//# sourceMappingURL=index.js.map
