const free = async () => {
  try {
    const res = await axios.get("http://localhost:3004/free");
    freeCodes(res);
  } catch (error) {
    console.log(error.message);
  }
};

const freeCodes = (res) => {
  document.querySelector("#freeh3").innerHTML = res.data.topic;

  let tempForSwiper2 = "";
  res.data.swiperFree.map((elem) => {
    tempForSwiper2 += `<div class="swiper-slide text-center flex items-center justify-center">
                <img class="w-full rounded-xl" src="${elem.src}" alt=""/>
                <h4 class="w-fit text-[11px] py-1 text-white">${elem.title}</h4>
              </div>`;
  });
  document.querySelector("#swiperitems2").innerHTML = tempForSwiper2;
};

export default free;
