const headerMobile = async () => {
    axios.get("http://localhost:3004/header").then((res) => {
      document.querySelector(
        "#headerMobile>div:nth-child(1)"
      ).innerHTML = `<img class="w-[100px]" src="${res.data.logo}" alt="">`;
  
      document.querySelector(
        "#headerMobile>div:nth-child(2)>div:nth-child(1)"
      ).innerHTML = `<img class="w-[20px] h-[20px]" src="${res.data.liitems.l1[1]}" alt="">`;
  
      document.querySelector(
        "#headerMobile>div:nth-child(2)>div:nth-child(2)"
      ).innerHTML = `<img class="w-[20px] h-[20px]" src="${res.data.dots}" alt="">`;
  
      document.querySelector("#headerMobile>div:nth-child(2)>div:nth-child(2)").addEventListener("click", ()=> {
        document.querySelector("#listForDots").classList.toggle("hidden")
      })
  
      document.querySelector(
        "#headerMobile>div:nth-child(2)>div:nth-child(3)"
      ).innerHTML = res.data.btnEnter;
    });
};

export default headerMobile;