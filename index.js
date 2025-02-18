import{S as c,i as l}from"./assets/vendor-B2mb6eXk.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&t(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function t(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();function m(a){const s=new c(".gallery a"),r=a.map(t=>`<li class="gallery-item">
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
      </li>`).join("");n.container.insertAdjacentHTML("afterbegin",r),s.refresh()}const n={container:document.querySelector(".gallery"),formSubmit:document.querySelector(".form"),loader:document.querySelector(".loader")},u="48810135-3fc2af65eea4986756bc51882",g="https://pixabay.com/api/?";function p(a){const s=new URLSearchParams({key:u,q:a,image_type:"photo",orientation:"horizontal",safesearch:!0});return n.container.innerHTML="",n.loader.style.display="block",fetch(`${g}${s}`).then(r=>{if(!r.ok)throw new Error(`HTTP error! Status: ${r.status}`);return r.json()}).then(r=>{if(r.hits.length===0)return l.show({message:"Sorry, there are no images matching your search query. Please, try again!",position:"topRight",messageColor:"white",backgroundColor:"#cb4335"}),n.loader.style.display="none",console.log("Sorry, there are no images matching your search query. Please, try again!");m(r.hits),n.loader.style.display="none"}).catch(r=>(n.loader.style.display="none",console.log("Error:",r)))}n.formSubmit.addEventListener("submit",d);function d(a){a.preventDefault();const s=a.currentTarget.elements.inpImg.value;if(s==="")return l.show({message:"Fill please all fields!",position:"topCenter",messageColor:"white",backgroundColor:"#cb4335"}),console.log("Fill please all fields!");a.target.reset(),p(s)}
//# sourceMappingURL=index.js.map
