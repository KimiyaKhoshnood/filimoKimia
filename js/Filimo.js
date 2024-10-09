const filimo = async () => {
  try {
    const res = await axios.get("http://localhost:3004/filimo");
    filimoCodes(res);
  } catch (error) {
    console.log(error.message);
  }
};

const filimoCodes = (res) => {
  document.querySelector(
    "#filimo>div"
  ).innerHTML = `<img src="${res.data.filimoLogo}" alt="">`;

  let tempFilimo = "";
  res.data.texts.map((elem) => {
    tempFilimo += `<div class="flex gap-2"><div class="w-[20px] h-[20px] rounded-full bg-green-700/30"><img src="${res.data.checkPic}" alt=""></div><span class="text-gray-300 text-[14px] flex w-fit">${elem}</span></div>`;
  });
  document.querySelector("#filimo>span").innerHTML = tempFilimo;

  document.querySelector(
    "#filimo>a"
  ).innerHTML = `<img class="w-[25px]" src="${res.data.btnBuy.src}" alt="">${res.data.btnBuy.text}`;
};

export default filimo;
