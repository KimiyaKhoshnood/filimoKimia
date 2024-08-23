const header = async () => {
    axios.get("http://localhost:3004/header").then((res) => {
      let ulList = document.querySelector("#ulList");
      let html = `<li class=""><img class="w-[80px]" src="${res.data.logo}" alt=""></li>`;
  
      html += `<li class=""><div class="w-[1px] h-[25px] bg-gray-700 mx-7"></div></li>`;

      html += `<div id="headerItemsBox" class="flex items-center gap-6"></div>`
      let html2 = ""

      for (let i in res.data.liitems) {
        if (res.data.liitems[i][1] != false && res.data.liitems[i][2] != false) {
          let tempDropdown = ""
          for (let j in res.data.liitems[i][3]) {
            tempDropdown += `<a class="p-2 text-[12px] w-1/2 text-gray-200 hover:text-amber-500" href="#">${res.data.liitems[i][3][j]}</a>`
          }
          

          html2 += `<li id="headerItems" class="text-gray-300 hover:text-amber-500  cursor-pointer">
          <button class="flex items-center py-2">
          <i class="w-[25px] p-1"><img class="w-[20px]" src="${res.data.liitems[i][1]}" alt=""></i>
          ${res.data.liitems[i][0]}
          <i class="w-[20px]"><img class="w-[20px]" src="${res.data.liitems[i][2]}" alt=""></i>
          </button>
          <div id="dropdown-content" class="hidden absolute bg-[#181818] w-[330px] z-10 p-2 rounded-md flex-wrap">${tempDropdown}</div>
          </li>`;
          
          // dropdown

        } else if (res.data.liitems[i][1] != false) {
          html2 += `<li id="headerItems" class="text-gray-300 hover:text-amber-500 flex items-center cursor-pointer">
          <i class="w-[25px] p-1"><img class="w-[20px]" src="${res.data.liitems[i][1]}" alt=""></i>
          ${res.data.liitems[i][0]}
          </li>`;

        } else if (res.data.liitems[i][2] != false) {
          let tempDropdown = ""
          for (let j in res.data.liitems[i][3]) {
            tempDropdown += `<a class="p-2 text-[12px] w-1/2 text-gray-200 hover:text-amber-500 " href="#">${res.data.liitems[i][3][j]}</a>`
          }


          html2 += `<li id="headerItems" class="text-gray-300 hover:text-amber-500 cursor-pointer">
          <button class="flex items-center py-2">
          ${res.data.liitems[i][0]}
          <i class="w-[25px] p-1"><img class="w-[20px]" src="${res.data.liitems[i][2]}" alt=""></i>
          </button>
          <div id="dropdown-content" class="hidden absolute bg-[#181818] w-[330px] z-10 p-2 rounded-md flex-wrap">${tempDropdown}</div>
          </li>`;

          // dropdown

        } else {
          html2 += `<li id="headerItems" class="text-gray-300">${res.data.liitems[i][0]}</li>`;
        }
      }

      ulList.innerHTML = html;
      document.querySelector("#headerItemsBox").innerHTML = html2


      document.querySelector(
        "#btnBuy"
      ).innerHTML = `<img class="w-[20px]" src="${res.data.btnBuy[1]}" alt="">${res.data.btnBuy[0]}`;
      document.querySelector("#btnEnter").innerHTML = `${res.data.btnEnter}`;
    });
};

export default header;