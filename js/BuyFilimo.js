import btnBuy from "./BtnBuyMobile.js";

const buyFilimo = async () => {
  try {
    const res = await axios.get("http://localhost:3004/buyFilimo");
    buyFilimoCodes(res);
  } catch (error) {
    console.log(error.message);
  }
};

const buyFilimoCodes = (res) => {
  document.querySelector(
    "#buyFilimo>div:nth-child(1)"
  ).innerHTML = `<img class="w-[160px] px-1" src="${res.data.logo}" alt="">`;
  document.querySelector("#buyFilimo>h2").innerHTML = res.data.h2;

  btnBuy(document.querySelector("#buyFilimo>a"));

  document.querySelector(
    "#buyFilimo>span"
  ).innerHTML = `<img class="w-[20px] p-1" src="${res.data.span.src}" alt="">${res.data.span.text}`;

  let tempbuyFilimo = "";

  res.data.text.map((elem) => {
    tempbuyFilimo += `<div class="flex text-[12px] items-center gap-1 py-1"><img class="w-[25px] p-1" src="${res.data.checkPic}" alt="">${elem}</div>`;
  });
  document.querySelector("#spansOfbuyFilimo").innerHTML = tempbuyFilimo;
  document.querySelector(
    "#spansOfbuyFilimo>div"
  ).innerHTML = `<img class="w-[25px] p-1" src="${res.data.checkPicMobile}" alt="">${res.data.text[0]}`;
  document
    .querySelector("#spansOfbuyFilimo>div")
    .classList.add("bg-green-700/10");
  document.querySelector("#spansOfbuyFilimo>div").classList.add("rounded-2xl");
};

export default buyFilimo;
