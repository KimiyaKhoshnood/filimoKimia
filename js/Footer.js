const footer = async () => {
    axios.get("http://localhost:3004/footer").then((res) => {
      let tempDropdownFooter = ""
      for (let i in res.data.left[2]) {
        tempDropdownFooter += `<a href="" class="text-gray-400 hover:text-white text-[11px] w-full flex p-2">${res.data.left[2][i][0]}</a>`
      }

      document.querySelector(
        "#footer>button"
      ).innerHTML = `${res.data.left[0]}<img class="w-[25px] p-[3px]" src="${res.data.left[1]}" alt="">
      <div id="dropdown-content-buttom" class="hidden fixed bottom-6 w-[110px] bg-[#181818] p-3 rounded-md flex-wrap">${tempDropdownFooter}</div>`;

  
      let tempfooter = "";
      for (let i in res.data.right) {
        if (res.data.right[i][1] != false) {
          if (res.data.right[i].length == 2) {
            tempfooter += `<a class="flex items-center hover:text-white" href="">
            <img class="w-[25px] p-[3px]" src="${res.data.right[i][1]}" alt="">${res.data.right[i][0]}`;
          } else {
            let tempDropdownFooter = ""
            for (let j in res.data.right) {
              tempDropdownFooter += `<a href="" class="text-gray-400 hover:text-white text-[11px] w-full flex p-2">${res.data.right[i][2][j]}</a>`
            }

            tempfooter += `<button class="flex items-center hover:text-white" href="">
            <img class="w-[25px] p-[3px]" src="${res.data.right[i][1]}" alt="">${res.data.right[i][0]}
            <div id="dropdown-content-buttom" class="hidden fixed bottom-7 w-[150px] bg-[#181818] p-3 rounded-md flex-wrap">${tempDropdownFooter}</div>
            </button>`;
          }
        } else {
          tempfooter += `<a class="flex items-center hover:text-white" href="">
          ${res.data.right[i][0]}
          </a>`;
        }
      }
      document.querySelector("#footer>span").innerHTML = tempfooter;
    });
};

export default footer;