import{S as l,i as c}from"./assets/vendor-B2mb6eXk.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&t(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();function m(a){const o=new l(".gallery a"),s=a.map(t=>`<li class="gallery-item">
      <a class="gallery-link" href="${t.largeImageURL}">
      <img
        class="gallery-image"
        src="${t.webformatURL}"
        data-source="${t.largeImageURL}"
        alt="${t.tags.split(",",3)}"
      />
      </a>
        <div class="img-info">
            <span class="img-span"> Likes: <br> ${t.likes}</span>
            <span class="img-span"> Views: <br> ${t.views}</span>
            <span class="img-span"> Comments: <br> ${t.comments}</span>
            <span class="img-span"> Downloads: <br> ${t.downloads}</span>
        </div>
      </li>`).join("");n.container.insertAdjacentHTML("afterbegin",s),o.refresh()}const n={container:document.querySelector(".gallery"),formSubmit:document.querySelector(".form"),loader:document.querySelector(".loader")},u="48810135-3fc2af65eea4986756bc51882",f="https://pixabay.com/api/?";function p(a){const o=new URLSearchParams({key:u,q:a,image_type:"photo",orientation:"horizontal",safesearch:!0});return n.container.innerHTML="",n.loader.style.display="block",fetch(`${f}${o}`).then(s=>{if(!s.ok)throw new Error(`HTTP error! Status: ${s.status}`);return s.json()}).then(s=>{m(s.hits),n.loader.style.display="none"}).catch(s=>{c.show({message:"Sorry, there are no images matching your search query. Please, try again!",position:"topRight",messageColor:"white",backgroundColor:"#cb4335"})})}n.formSubmit.addEventListener("submit",d);function d(a){a.preventDefault();const o=a.currentTarget.elements.inpImg.value;if(o==="")return iziToast.show({message:"Fill please all fields!",position:"topCenter",messageColor:"white",backgroundColor:"#cb4335"}),console.log("Fill please all fields!");a.target.reset(),p(o)}
//# sourceMappingURL=index.js.map
