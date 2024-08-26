import btnBuy from "./BtnBuyMobile.js";

const freeMobile = async () => {
    axios.get("http://localhost:3004/free").then((res) => {
      document.querySelector("#freeMobile>h2").innerHTML = res.data.topicMobile;
      document.querySelector("#freeMobile>span").innerHTML = res.data.span;
  
      let tempfreeMobile = "";
      for (let i in res.data.swiperFree) {
        tempfreeMobile += `<div class="w-[105px]"><img class="w-full" src="${res.data.swiperFree[i][0]}" alt=""></div>`;
      }
      document.querySelector("#freeMobile>div").innerHTML = tempfreeMobile;

      btnBuy(document.querySelector("#btnfreeBuy"))
    });
};

export default freeMobile;