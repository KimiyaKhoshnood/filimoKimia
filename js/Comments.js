const comments = async () => {
  try {
    const res = await axios.get("http://localhost:3004/comments");
    commentsCodes(res);
  } catch (error) {
    console.log(error.message);
  }
};

const commentsCodes = (res) => {
  document.querySelector("#commentsh3").innerHTML = res.data.topic;

  let tempForSwiper3 = "";
  res.data.swipper.map((elem) => {
    tempForSwiper3 += `<div class="p-6 swiper-slide flex border border-gray-700 rounded-xl bg-[#1A1A1A] h-fit">
              <div class="flex justify-center py-3">
                <div class="h-[30px]"><img class="h-full" src="./media/profile.webp" alt=""></div>
                     <h4 class="text-[16px] text-gray-400 flex-1 flex items-center px-2">${elem.title}</h4>
                     <div class="h-[30px]"><img class="h-full" src="./media/virgol.webp" alt=""></div>
                 </div> 
               <p class="text-[13px] text-white h-[100px]">${elem.text}</p>
             </div>`;
  });
  document.querySelector("#swiperitems3").innerHTML = tempForSwiper3;
};
export default comments;
