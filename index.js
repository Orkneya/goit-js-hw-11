import{S as m,a as u,i as p}from"./assets/vendor-D3PmPE7A.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();function f(o){const s=new m(".gallery a"),a=o.map(r=>`<li class="gallery-item">
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
      </li>`).join("");n.container.insertAdjacentHTML("afterbegin",a),s.refresh()}const d="48810135-3fc2af65eea4986756bc51882",g="https://pixabay.com/api/?",y="Sorry, there are no images matching your search query. Please, try again!";function h(o){const s=new URLSearchParams({key:d,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0});return n.container.innerHTML="",u.get(`${g}${s}`).then(a=>{f(a.data.hits)}).catch(a=>(c(y),console.log("Error:",a)))}const n={container:document.querySelector(".gallery"),formSubmit:document.querySelector(".form"),loader:document.querySelector(".loader")},l="Fill please all fields!";n.formSubmit.addEventListener("submit",b);function b(o){const s=o.currentTarget.elements.inpImg.value;if(o.preventDefault(),s==="")return c(l),console.log(l);n.loader.style.display="block",h(s),n.loader.style.display="none",o.target.reset()}function c(o){p.show({message:o,position:"topRight",messageColor:"white",backgroundColor:"#cb4335"})}
//# sourceMappingURL=index.js.map
