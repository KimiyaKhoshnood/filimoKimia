const comments = async () => {
    axios.get("http://localhost:3004/comments").then((res) => {
      document.querySelector("#commentsh3").innerHTML = res.data.topic;
  
      let tempForSwiper3 = "";
      for (let i in res.data.swipper) {
        tempForSwiper3 += `<div class="p-6 swiper-slide flex border border-gray-700 rounded-xl bg-[#1A1A1A] h-fit">
                    <div class="flex justify-center py-3">
                      <div class="h-[30px]"><img class="h-full" src="./media/profile.webp" alt=""></div>
                      <h4 class="text-[16px] text-gray-400 flex-1 flex items-center px-2">${res.data.swipper[i][0]}</h4>
                      <div class="h-[30px]"><img class="h-full" src="./media/virgol.webp" alt=""></div>
                    </div> 
                    <p class="text-[13px] text-white h-[100px]">${res.data.swipper[i][1]}</p>
                  </div>`;
      }
      document.querySelector("#swiperitems3").innerHTML = tempForSwiper3;
    });
};

export default comments;