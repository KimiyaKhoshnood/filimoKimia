import btnBuy from "./BtnBuyMobile.js";

const freeMobile = async () => {
  try {
    const res = await axios.get("http://localhost:3004/free");
    freeMobileCodes(res);
  } catch (error) {
    console.log(error.message);
  }
};

const freeMobileCodes = (res) => {
  document.querySelector("#freeMobile>h2").innerHTML = res.data.topicMobile;
  document.querySelector("#freeMobile>span").innerHTML = res.data.span;

  let tempfreeMobile = "";
  res.data.swiperFree.map((elem) => {
    tempfreeMobile += `<div class="w-[105px]"><img class="w-full" src="${elem.src}" alt=""></div>`;
  });
  document.querySelector("#freeMobile>div").innerHTML = tempfreeMobile;

  btnBuy(document.querySelector("#btnfreeBuy"));
};

export default freeMobile;
