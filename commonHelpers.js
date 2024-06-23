import{a as S,S as M,i as u}from"./assets/vendor-f144e563.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))p(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const d of i.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&p(d)}).observe(document,{childList:!0,subtree:!0});function s(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerPolicy&&(i.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?i.credentials="include":t.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function p(t){if(t.ep)return;t.ep=!0;const i=s(t);fetch(t.href,i)}})();function x(e){return`<li class="gallery-item">
    <a class="gallery-link" href="${e.largeImageURL}">
      <img class="gallery-image" src="${e.webformatURL}" alt="${e.tags}" />
    </a>
    <ul class="info-list">
        <li class="info-item">
          <h4 class="info-item-header">Likes</h4>
          <p class="info-item-value">${e.likes}</p>
        </li>
        <li class="info-item">
          <h4 class="info-item-header">Views</h4>
          <p class="info-item-value">${e.views}</p>
        </li>
        <li class="info-item">
          <h4 class="info-item-header">Comments</h4>
          <p class="info-item-value">${e.comments}</p>
        </li>
        <li class="info-item">
          <h4 class="info-item-header">Downloads</h4>
          <p class="info-item-value">${e.downloads}</p>
        </li>
      </ul>
    </li>`}function y(e){return e.map(x).join("")}const B=S.create({baseURL:"https://pixabay.com/api/",params:{key:"44401278-613f3c82386bcb5b22d8a73ae",image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:15}});async function L(e,o){return(await B.get("",{params:{q:e,page:o}})).data}const T={message:"We're sorry, but you've reached the end of search results.",messageColor:"white",backgroundColor:"#EF4040",iconUrl:"imageUrl",maxWidth:"360px",position:"bottomRight",theme:"dark"},b=new M(".gallery a",{captionsData:"alt",captionDelay:250}),O=document.querySelector(".search-form"),n=document.querySelector(".gallery"),f=document.querySelector(".load-more-btn"),v=document.querySelector(".loader");let r="",l=0;const $=15;let c=0;O.addEventListener("submit",q);async function q(e){if(e.preventDefault(),l=1,n.innerHTML="",w(),r=e.target.elements.searchImg.value.trim(),!r){g("please write something"),h(),a();return}try{const o=await L(r);if(c=Math.ceil(o.totalHits/$),c===0){g("no matches"),a(),m();return}const s=y(o.hits);n.innerHTML=s,b.refresh(),E()}catch{u.show("Error!")}a(),m()}f.addEventListener("click",R);async function R(){w(),h(),l+=1;try{const e=await L(r,l),o=y(e.hits);n.insertAdjacentHTML("beforeend",o),b.refresh(),k()}catch{u.show("Error!")}a(),m()}function w(){v.classList.remove("visually-hidden")}function a(){v.classList.add("visually-hidden")}function E(){f.classList.remove("visually-hidden")}function h(){f.classList.add("visually-hidden")}function m(){l>=c?(h(),c&&u.info(T)):E()}function g(e){u.error({message:e,position:"topRight"})}function k(){const o=n.children[0].getBoundingClientRect().height;scrollBy({top:o*2,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
