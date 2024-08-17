const header = async () => {
    axios.get("http://localhost:3004/header").then((res) => {
      let ulList = document.querySelector("#ulList");
      let html = `<li class=""><img class="w-[80px]" src="${res.data.logo}" alt=""></li>`;
  
      html += `<li class=""><div class="w-[1px] h-[25px] bg-gray-700"></div></li>`;
  
      for (let i in res.data.liitems) {
        if (res.data.liitems[i][1] != false && res.data.liitems[i][2] != false) {
          html += `<li class="text-gray-300 flex items-center cursor-pointer"><i class="w-[25px] p-1"><img class="w-[20px]" src="${res.data.liitems[i][1]}" alt=""></i>${res.data.liitems[i][0]}<i class="w-[20px]"><img class="w-[20px]" src="${res.data.liitems[i][2]}" alt=""></i></li>`;
        } else if (res.data.liitems[i][1] != false) {
          html += `<li class="text-gray-300 flex items-center cursor-pointer"><i class="w-[25px] p-1"><img class="w-[20px]" src="${res.data.liitems[i][1]}" alt=""></i>${res.data.liitems[i][0]}</li>`;
        } else if (res.data.liitems[i][2] != false) {
          html += `<li class="text-gray-300 flex items-center cursor-pointer">${res.data.liitems[i][0]}<i class="w-[25px] p-1"><img class="w-[20px]" src="${res.data.liitems[i][2]}" alt=""></i></li>`;
        } else {
          html += `<li class="text-gray-300">${res.data.liitems[i][0]}</li>`;
        }
      }
      ulList.innerHTML = html;
  
      document.querySelector(
        "#btnBuy"
      ).innerHTML = `<img class="w-[20px]" src="${res.data.btnBuy[1]}" alt="">${res.data.btnBuy[0]}`;
      document.querySelector("#btnEnter").innerHTML = `${res.data.btnEnter}`;
    });
};

export default header;