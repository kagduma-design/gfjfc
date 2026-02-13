window.onload = function(){

  const gallery = document.getElementById("gallery");

  for(let i=1;i<=30;i++){
    const img = document.createElement("img");
    img.src = i + ".jpg";
    gallery.appendChild(img);
  }
};

function startExperience(){

  const music = document.getElementById("bgMusic");
  music.play();

  document.getElementById("screen1").classList.add("hidden");

  setTimeout(()=>{
    document.getElementById("screen2").classList.remove("hidden");
  },1000);

  setTimeout(()=>{
    document.getElementById("screen2").classList.add("hidden");
    document.getElementById("screen3").classList.remove("hidden");
  },5000);

  setTimeout(()=>{
    document.getElementById("screen3").classList.add("hidden");
    document.getElementById("screen4").classList.remove("hidden");

    startGallery();
  },12000);
}

function startGallery(){

  const gallery = document.getElementById("gallery");

  gallery.style.animation = "slideUp 8s ease forwards";

  setTimeout(()=>{
    gallery.style.animation = "slideDown 8s ease forwards";
  },13000);

  setTimeout(()=>{
    document.getElementById("screen4").classList.add("hidden");
    document.getElementById("screen5").classList.remove("hidden");

    const vid = document.getElementById("valVid");
    vid.play();
  },21000);
}
