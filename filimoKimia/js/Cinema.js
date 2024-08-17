const cinema = async () => {
    axios.get("http://localhost:3004/cinema").then((res) => {
      document.querySelector("#cinemah3").innerHTML = res.data.topic;
  
      let tempCinema = "";
      for (let i in res.data.texts) {
        tempCinema += `<div class="flex gap-2"><div class="w-[20px] h-[20px] rounded-full bg-green-700/30"><img src="${res.data.checkPic}" alt=""></div><span class="text-gray-400 text-[14px] flex w-fit">${res.data.texts[i]}</span></div>`;
      }
      document.querySelector("#cinemaCheckBox").innerHTML = tempCinema;
  
      document.querySelector(
        "#onlineCinemaBox>div:nth-child(1)"
      ).innerHTML = `<img class="rounded-lg" src="${res.data.card.img}" alt="">`;
  
      document.querySelector("#onlineCinemaBox>div:nth-child(2)>h4").innerHTML =
        res.data.card.h4;
      document.querySelector("#onlineCinemaBox>div:nth-child(2)>span").innerHTML =
        res.data.card.span;
  
      let tempCinemaCapsole = "";
      for (let i in res.data.card.capsole) {
        tempCinemaCapsole += `<span class="py-[3px] px-[15px] bg-black/5 backdrop-blur-xl rounded-xl">${res.data.card.capsole[i]}</span>`;
      }
      document.querySelector("#onlineCinemaBox>div:nth-child(2)>div").innerHTML =
        tempCinemaCapsole;
    });
};

export default cinema;