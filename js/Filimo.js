const filimo = async () => {
    axios.get("http://localhost:3004/filimo").then((res) => {
      document.querySelector(
        "#filimo>div"
      ).innerHTML = `<img src="${res.data.filimoLogo}" alt="">`;
  
      let tempFilimo = "";
      for (let i in res.data.texts) {
        tempFilimo += `<div class="flex gap-2"><div class="w-[20px] h-[20px] rounded-full bg-green-700/30"><img src="${res.data.checkPic}" alt=""></div><span class="text-gray-400 text-[14px] flex w-fit">${res.data.texts[i]}</span></div>`;
      }
      document.querySelector("#filimo>span").innerHTML = tempFilimo;
  
      document.querySelector(
        "#filimo>a"
      ).innerHTML = `<img class="w-[25px]" src="${res.data.btnBuy[1]}" alt="">${res.data.btnBuy[0]}`;
    });
};

export default filimo;