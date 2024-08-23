const heroSection = async () => {
    axios.get("http://localhost:3004/heroSection").then((res) => {
      let heroSection = document.querySelector("#heroSection")
      let imgIndexHero = 1
      function changeBackground() {
        heroSection.classList.remove(`bg-hero${imgIndexHero}`)
        imgIndexHero++
        if (imgIndexHero > res.data.bg.length) {
          imgIndexHero = 1
        }
        heroSection.classList.add(`bg-hero${imgIndexHero}`)
        
      }
      setInterval(changeBackground, 5000)
  
      document.querySelector("#toph1").innerHTML = res.data.toph1;
      document.querySelector("#h1").innerHTML = res.data.h1;
  
      let tempHeroSection = "";
      for (let i in res.data.underh1) {
        tempHeroSection += `<div class="flex w-fit gap-1">
        <div class="w-[20px] h-[20px] rounded-full bg-green-700/30">
        <img src="${res.data.checkPic}" alt="">
        </div>
        <span class="text-gray-300 text-[14px] flex w-fit">${res.data.underh1[i]}</span>
        </div>`;
      }
      document.querySelector("#underh1").innerHTML = tempHeroSection;
  
      document.querySelector(
        "#btnBuyHero"
      ).innerHTML = `<img class="w-[25px]" src="${res.data.btnBuy[1]}" alt="">${res.data.btnBuy[0]}`;
  
      document.querySelector(
        "#underBtnBuyHero"
      ).innerHTML = `<img class="w-[25px]" src="${res.data.underBtn[1]}" alt="">${res.data.underBtn[0]}`;
    });
};

export default heroSection;