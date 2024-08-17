const freeMobile = async () => {
    axios.get("http://localhost:3004/free").then((res) => {
      document.querySelector("#freeMobile>h2").innerHTML = res.data.topicMobile;
      document.querySelector("#freeMobile>span").innerHTML = res.data.span;
  
      let tempfreeMobile = "";
      for (let i in res.data.swiperFree) {
        tempfreeMobile += `<div class="w-[105px]"><img class="w-full" src="${res.data.swiperFree[i][0]}" alt=""></div>`;
      }
      document.querySelector("#freeMobile>div").innerHTML = tempfreeMobile;
  
      document.querySelector(
        "#btnfreeBuy"
      ).innerHTML = `<img class="w-[25px]" src="${res.data.btnBuyMobile[1]}" alt="">${res.data.btnBuyMobile[0]}`;
    });
};

export default freeMobile;