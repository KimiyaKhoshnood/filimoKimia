const free = async () => {
    axios.get("http://localhost:3004/free").then((res) => {
      document.querySelector("#freeh3").innerHTML = res.data.topic;
  
      let tempForSwiper2 = "";
      for (let i in res.data.swiperFree) {
        tempForSwiper2 += `<div class="swiper-slide text-center flex items-center justify-center">
                    <img class="w-full rounded-xl" src="${res.data.swiperFree[i][0]}" alt=""/>
                    <h4 class="w-fit text-[11px] py-1 text-white">${res.data.swiperFree[i][1]}</h4>
                  </div>`;
      }
      document.querySelector("#swiperitems2").innerHTML = tempForSwiper2;
    });
};

export default free;