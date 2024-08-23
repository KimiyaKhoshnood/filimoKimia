const kids = async () => {
    axios.get("http://localhost:3004/kids").then((res) => {
      document.querySelector(
        "#imgOfKids"
      ).innerHTML = `<img class="max-h-[475px] h-fit max-w-[520x]" src="${res.data.imgKids}" alt="">`;
  
      document.querySelector("#textOfKids>h3").innerHTML = res.data.h3;
      document.querySelector("#textOfKids>span").innerHTML = res.data.span;
  
      let tempForBtnKids = "";
      for (let i in res.data.btnKids) {
        tempForBtnKids += `<a class="bg-white hover:bg-gray-200 transition-colors duration-200 cursor-pointer py-2 px-4 rounded-md text-[13px]" href="#">${res.data.btnKids[i]}</a>`;
      }
      document.querySelector("#textOfKids>div").innerHTML = tempForBtnKids;
    });
};

export default kids;