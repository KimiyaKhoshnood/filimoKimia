import btnBuy from "./BtnBuyMobile.js";

const watchLaterMobile = async () => {
  try {
    const res = await axios.get("http://localhost:3004/watchLaterMobile");
    watchLaterMobileCodes(res);
  } catch (error) {
    console.log(error.message);
  }
};

const watchLaterMobileCodes = (res) => {
  let tempforWatch = "";
  res.data.pics.map((elem) => {
    tempforWatch += `<img class="h-[100px] w-[160px] -skew-x-[20deg] skew-y-1 p-1 rounded-lg" src="${elem}" alt="">`;
  });
  tempforWatch = `<div class="w-[640px] flex flex-wrap">${tempforWatch}</div>`;
  tempforWatch = tempforWatch + tempforWatch + tempforWatch;
  document.querySelector("#watchLaterMobile>div>div>div>div").innerHTML =
    tempforWatch;

  let tempNumforWatch = 0;
  function animation() {
    tempNumforWatch -= 0.1;
    document.querySelector("#watchLaterMobile>div>div>div").style.right =
      tempNumforWatch + "px";

    if (Math.abs(tempNumforWatch) >= window.innerWidth) {
      tempNumforWatch = -0;
    }
    window.requestAnimationFrame(animation);
  }
  animation();

  document.querySelector(
    "#watchLaterImgMobile"
  ).innerHTML = `<img class="w-[200px] h-fit" src="${res.data.img}" alt="">`;
  document.querySelector("#watchLaterMobile>h2").innerHTML = res.data.h2;
  document.querySelector("#watchLaterMobile>span").innerHTML = res.data.span;

  btnBuy(document.querySelector("#watchLaterMobile>a"));
};

export default watchLaterMobile;
