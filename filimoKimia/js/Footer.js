const footer = async () => {
    axios.get("http://localhost:3004/footer").then((res) => {
      document.querySelector(
        "#footer>a"
      ).innerHTML = `${res.data.left[0]}<img class="w-[25px] p-[3px]" src="${res.data.left[1]}" alt="">`;
  
      let tempfooter = "";
      for (let i in res.data.right) {
        if (res.data.right[i][1] != false) {
          tempfooter += `<a class="flex items-center hover:text-white" href="">
          <img class="w-[25px] p-[3px]" src="${res.data.right[i][1]}" alt="">${res.data.right[i][0]}
          </a>`;
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