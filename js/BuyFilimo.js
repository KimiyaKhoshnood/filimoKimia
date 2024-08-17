const buyFilimo = async () => {
    axios.get("http://localhost:3004/buyFilimo").then((res) => {
      document.querySelector(
        "#buyFilimo>div:nth-child(1)"
      ).innerHTML = `<img class="w-[160px] px-1" src="${res.data.logo}" alt="">`;
      document.querySelector("#buyFilimo>h2").innerHTML = res.data.h2;
      document.querySelector(
        "#buyFilimo>a"
      ).innerHTML = `<img class="w-[25px]" src="${res.data.btnBuy[1]}" alt="">${res.data.btnBuy[0]}`;
      document.querySelector(
        "#buyFilimo>span"
      ).innerHTML = `<img class="w-[20px] p-1" src="${res.data.span[1]}" alt="">${res.data.span[0]}`;
  
      let tempbuyFilimo = "";
      for (let i in res.data.text) {
        tempbuyFilimo += `<div class="flex text-[12px] items-center gap-1 py-1"><img class="w-[25px] p-1" src="${res.data.checkPic}" alt="">${res.data.text[i]}</div>`;
      }
      document.querySelector("#spansOfbuyFilimo").innerHTML = tempbuyFilimo;
      document.querySelector(
        "#spansOfbuyFilimo>div"
      ).innerHTML = `<img class="w-[25px] p-1" src="${res.data.checkPicMobile}" alt="">${res.data.text[0]}`;
      document
        .querySelector("#spansOfbuyFilimo>div")
        .classList.add("bg-green-700/10");
      document
        .querySelector("#spansOfbuyFilimo>div")
        .classList.add("rounded-2xl");
    });
};

export default buyFilimo;