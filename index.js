import{S as m,i as c}from"./assets/vendor-B2mb6eXk.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();function g(s){const o=s.map(t=>`<li class="gallery-item">
      <a class="gallery-link" href="${t.largeImageURL}">
      <img
        class="gallery-image"
        src="${t.webformatURL}"
        data-source="${t.largeImageURL}"
        alt="${t.tags.split(",")[0]}"
      />
      </a>
        <div class="img-info">
            <span class="img-span"> Likes: <br> ${t.likes}</span>
            <span class="img-span"> Views: <br> ${t.views}</span>
            <span class="img-span"> Comments: <br> ${t.comments}</span>
            <span class="img-span"> Downloads: <br> ${t.downloads}</span>
        </div>
      </li>`).join("");a.container.insertAdjacentHTML("afterbegin",o),new m(".gallery a",{captionsData:"alt",captionDelay:250})}const a={container:document.querySelector(".gallery"),formSubmit:document.querySelector(".form")},l="48810135-3fc2af65eea4986756bc51882";function u(s){const o={key:l,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0},t="https://pixabay.com/api/?";console.log(111,o);const n=t+"key="+l+"&q="+encodeURIComponent(s);console.log(555,n),fetch(n,{params:o}).then(e=>{if(!e.ok)throw new Error(`HTTP error! Status: ${e.status}`);return console.log(9090,o.orientation),console.log(333,e),e.json()}).then(e=>{console.log(222,e.hits[2].largeImageURL),console.log(223,e.hits[1].webformatURL),console.log(233,e.hits[2].tags),console.log(543,e.hits),g(e.hits)}).catch(e=>{c.show({message:"Sorry, there are no images matching your search query. Please, try again!",position:"topRight",messageColor:"white",backgroundColor:"#cb4335"})})}function f(s){s.preventDefault();const o=s.currentTarget.elements.inpImg.value;if(o==="")return c.show({message:"Fill please all fields!",position:"topCenter",messageColor:"white",backgroundColor:"#cb4335"}),console.log("Fill please all fields!");console.log(123,o),u(o),a.formSubmit.reset}a.formSubmit.addEventListener("submit",f);
//# sourceMappingURL=index.js.map
