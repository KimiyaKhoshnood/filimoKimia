import btnBuy from "./BtnBuyMobile.js";

const heroMobile = async () => {
  try {
    const res = await axios.get("http://localhost:3004/heroSection");
    heroMobileCodes(res);
  } catch (error) {
    console.log(error.message);
  }
};

const heroMobileCodes = (res) => {
  let tempforbgHeroMobile = "";
  res.data.bgMobile.map((elem) => {
    tempforbgHeroMobile += `<img class="absolute w-full transition-opacity ease-linear duration-1000" src="${elem}" alt="">`;
  });
  document.querySelector("#bgHeroMobile").innerHTML = tempforbgHeroMobile;

  let bgHeroMobile = Array.from(document.querySelectorAll("#bgHeroMobile>img"));
  let imgIndexHeroMobile = 0;
  function changeBackground() {
    bgHeroMobile[imgIndexHeroMobile].classList.remove("opacity-100");
    bgHeroMobile[imgIndexHeroMobile].classList.add("opacity-0");

    imgIndexHeroMobile++;

    if (imgIndexHeroMobile >= bgHeroMobile.length) {
      imgIndexHeroMobile = 0;
    }
    bgHeroMobile[imgIndexHeroMobile].classList.add("opacity-100");
  }
  setInterval(changeBackground, 3000);

  document.querySelector("#heroMobile>h1").innerHTML = res.data.toph1;
  document.querySelector("#heroMobile>span").innerHTML = res.data.spanMobile;

  btnBuy(document.querySelector("#btnBuyHeroMobile"));

  document.querySelector(
    "#heroMobile>div"
  ).innerHTML = `<img class="w-fit" src="${res.data.logoMobile}" alt="">`;
};

export default heroMobile;
