(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))d(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const t of s.addedNodes)t.tagName==="LINK"&&t.rel==="modulepreload"&&d(t)}).observe(document,{childList:!0,subtree:!0});function i(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function d(o){if(o.ep)return;o.ep=!0;const s=i(o);fetch(o.href,s)}})();let c=document.querySelectorAll(".piano__key").length;for(let n=0;n<c;n++)document.querySelectorAll(".piano__key")[n].addEventListener("click",function(){let e=this.innerText.trim();r(e),u(e)});document.addEventListener("keydown",n=>{const e=a[n.key.toUpperCase()];e&&(r(e),u(e))});function r(n){switch(n){case"C":new Audio("./sounds/cSound.mp3").play();break;case"D":new Audio("./sounds/dSound.mp3").play();break;case"E":new Audio("./sounds/eSound.mp3").play();break;case"F":new Audio("./sounds/fSound.mp3").play();break;case"G":new Audio("./sounds/gSound.mp3").play();break;case"A":new Audio("./sounds/aSound.mp3").play();break;case"B":new Audio("./sounds/bSound.mp3").play();break;case"C2":new Audio("./sounds/c2Sound.mp3").play();break;case"C#":new Audio("./sounds/c_sharpSound.mp3").play();break;case"D#":new Audio("./sounds/d_sharpSound.mp3").play();break;case"F#":new Audio("./sounds/f_sharpSound.mp3").play();break;case"G#":new Audio("./sounds/g_sharpSound.mp3").play();break;case"A#":new Audio("./sounds/a_sharpSound.mp3").play();break;default:console.log(`Sound not found for key: ${n}`)}}function u(n){const e=document.querySelector(`.piano__key--${n}`);e?(e.classList.add("pressed"),setTimeout(()=>{e.classList.remove("pressed")},100)):console.error(`No button found for key: ${n}`)}const a={A:"C",S:"D",D:"E",F:"F",G:"G",H:"A",J:"B",K:"C2",W:"C#",E:"D#",T:"F#",Y:"G#",U:"A#"};document.addEventListener("keydown",n=>{const e=a[n.key.toUpperCase()];e&&(r(e),u(e))});
