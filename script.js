const d = new Date();
console.log(d);
const hour = d.getHours();
console.log(hour);
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  const music = document.getElementById("music");
  const number = document.getElementById("number");
  if (number.value != "") {
    const saat = number.value;
    const newSaat = parseInt(saat);

    console.log(typeof newSaat, newSaat);
    if (newSaat <= 20) {
    //   music.setAttribute("autoplay", 1);
    //   console.log("Çalışıyor");
    //   console.log(music.attributes);
    music.play()
    } else {
     music.scrollTop()
    }
  } else {
    console.log("program hiç çalışmadı");
  }
});
