const header = async () => {
  try {
    const res = await axios.get("http://localhost:3004/header");
    headerCodes(res);
  } catch (error) {
    console.log(error.message);
  }
};

const headerCodes = (res) => {
  let ulList = document.querySelector("#ulList");
  let html = `<li class=""><img class="w-[80px]" src="${res.data.logo}" alt=""></li>`;

  html += `<li class=""><div class="w-[1px] h-[25px] bg-gray-700 mx-7"></div></li>`;

  html += `<div id="headerItemsBox" class="flex items-center gap-6"></div>`;
  let html2 = "";

  res.data.liitems.map((elem) => {
    if (elem.svg != false && elem.dropdown != false) {
      let tempDropdown = "";

      elem.dropdownItems.map((elem2) => {
        tempDropdown += `<a class="p-2 text-[12px] w-1/2 text-gray-200 hover:text-amber-500 " href="#">${elem2}</a>`;
      });

      html2 += `<li id="headerItems" class="text-gray-300 hover:text-amber-500  cursor-pointer">
      <button class="flex items-center py-2">
      <i class="w-[25px] p-1"><img class="w-[20px]" src="${elem.svg}" alt=""></i>
      ${elem.text}
      <i class="w-[20px]" id="imgdropdown"><img class="w-[20px]" src="${elem.dropdown}" alt=""></i>
      </button>
      <div id="dropdown-content" class="hidden absolute bg-[#181818] w-[330px] z-10 p-2 rounded-md flex-wrap">${tempDropdown}</div>
      </li>`;


    } else if (elem.svg != false) {
      html2 += `<li id="headerItems" class="text-gray-300 hover:text-amber-500 flex items-center cursor-pointer">
      <i class="w-[25px] p-1"><img class="w-[20px]" src="${elem.svg}" alt=""></i>
      ${elem.text}
      </li>`;

    } else if (elem.dropdown != false) {
      let tempDropdown = "";
      elem.dropdownItems.map((elem2) => {
        tempDropdown += `<a class="p-2 text-[12px] w-1/2 text-gray-200 hover:text-amber-500 " href="#">${elem2}</a>`;
      });

      html2 += `<li id="headerItems" class="text-gray-300 hover:text-amber-500 cursor-pointer">
      <button class="flex items-center py-2">
      ${elem.text}
      <i class="w-[25px] p-1" id="imgdropdown"><img class="w-[20px]" src="${elem.dropdown}" alt=""></i>
      </button>
      <div id="dropdown-content" class="hidden absolute bg-[#181818] w-[330px] z-10 p-2 rounded-md flex-wrap shadow-md shadow-black">${tempDropdown}</div>
      </li>`;

    } else {
      html2 += `<li id="headerItems" class="text-gray-300 hover:text-amber-500 cursor-pointer">${elem.text}</li>`;

    }
  });

  ulList.innerHTML = html;
  document.querySelector("#headerItemsBox").innerHTML = html2;

  document.querySelector(
    "#btnBuy"
  ).innerHTML = `<img class="w-[20px]" src="${res.data.btnBuy[1]}" alt="">${res.data.btnBuy[0]}`;
  document.querySelector("#btnEnter").innerHTML = `${res.data.btnEnter}`;
};

export default header;
