const footer = async () => {
  try {
    const res = await axios.get("http://localhost:3004/footer");
    footerCodes(res);
  } catch (error) {
    console.log(error.message);
  }
};

const footerCodes = (res) => {
  let tempDropdownFooter = "";
  res.data.left.items.map((elem) => {
    tempDropdownFooter += `<a href="" class="text-gray-400 hover:text-white text-[11px] w-full flex p-2">${elem}</a>`;
  });

  document.querySelector(
    "#footer>button"
  ).innerHTML = `${res.data.left.text}<img class="w-[25px] p-[3px]" src="${res.data.left.image}" alt="">
  <div id="dropdown-content-buttom" class="hidden fixed bottom-6 w-[110px] bg-[#181818] p-3 rounded-md flex-wrap shadow-md shadow-black">${tempDropdownFooter}</div>`;

  let tempfooter = "";
  res.data.right.map((elem) => {
    if (elem.image) {
      if (!elem.items) {
        tempfooter += `<a class="flex items-center hover:text-white" href="">
        <img class="w-[25px] p-[3px]" src="${elem.image}" alt="">${elem.text}`;
      } else {
        let tempDropdownFooter = "";
        elem.items.map((elem2) => {
          tempDropdownFooter += `<a href="" class="text-gray-400 hover:text-white text-[11px] w-full flex p-2">${elem2}</a>`;
        });

        tempfooter += `<button class="flex items-center hover:text-white" href="">
        <img class="w-[25px] p-[3px]" src="${elem.image}" alt="">${elem.text}
        <div id="dropdown-content-buttom" class="hidden fixed bottom-7 w-[150px] bg-[#181818] p-3 rounded-md flex-wrap shadow-md shadow-black">${tempDropdownFooter}</div>
        </button>`;
      }
    } else {
      tempfooter += `<a class="flex items-center hover:text-white" href="">
      ${elem.text}
      </a>`;
    }
  });
  document.querySelector("#footer>span").innerHTML = tempfooter;
};

export default footer;
