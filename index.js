import{S as g,a as u,i as f}from"./assets/vendor-D3PmPE7A.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))t(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&t(i)}).observe(document,{childList:!0,subtree:!0});function n(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(o){if(o.ep)return;o.ep=!0;const r=n(o);fetch(o.href,r)}})();function d(s){const e=new g(".gallery a"),n=s.map(t=>`<li class="gallery-item">
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
      </li>`).join("");a.container.insertAdjacentHTML("afterbegin",n),e.refresh()}const p="48810135-3fc2af65eea4986756bc51882",h="https://pixabay.com/api/?",l="Sorry, there are no images matching your search query. Please, try again!";function y(s){const e=new URLSearchParams({key:p,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0});return a.container.innerHTML="",u.get(`${h}${e}`).then(n=>{if(n.data.hits.length===0)return c(l),console.log(345,l);d(n.data.hits)}).catch(n=>(c(l),console.log("Error:",n)))}const a={container:document.querySelector(".gallery"),formSubmit:document.querySelector(".form"),loader:document.querySelector(".loader")},m="Fill please all fields!";a.formSubmit.addEventListener("submit",b);function b(s){const e=s.currentTarget.elements.inpImg.value;if(console.log(781,e),s.preventDefault(),console.log(777,e),e==="")return c(m),console.log(m);console.log(778,e),a.loader.style.display="block",y(e),console.log(779,e),a.loader.style.display="none",s.target.reset(),console.log(780,e)}function c(s){f.show({message:s,position:"topRight",messageColor:"white",backgroundColor:"#cb4335"})}
//# sourceMappingURL=index.js.map
