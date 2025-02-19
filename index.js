import{S as u,a as f,i as d}from"./assets/vendor-D3PmPE7A.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&t(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();function g(o){const s=new u(".gallery a"),a=o.map(t=>`<li class="gallery-item">
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
      </li>`).join("");n.container.insertAdjacentHTML("afterbegin",a),s.refresh()}const p="48810135-3fc2af65eea4986756bc51882",h="https://pixabay.com/api/?",l="Sorry, there are no images matching your search query. Please, try again!";function y(o){const s=new URLSearchParams({key:p,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0});return n.container.innerHTML="",f.get(`${h}${s}`).then(a=>{if(a.data.hits.length===0)return c(l),console.log(l);g(a.data.hits)}).catch(a=>(c(l),console.log("Error:",a)))}const n={container:document.querySelector(".gallery"),formSubmit:document.querySelector(".form"),loader:document.querySelector(".loader")},m="Fill please all fields!";n.formSubmit.addEventListener("submit",b);function b(o){const s=o.currentTarget.elements.inpImg.value;if(o.preventDefault(),s==="")return c(m),console.log(m);n.loader.style.display="block",y(s),n.loader.style.display="none",o.target.reset()}function c(o){d.show({message:o,position:"topRight",messageColor:"white",backgroundColor:"#cb4335"})}
//# sourceMappingURL=index.js.map
