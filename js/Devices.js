const devices = async () => {
    axios.get("http://localhost:3004/devices").then((res) => {
      document.querySelector(
        "#imgOfDevices"
      ).innerHTML = `<img class="h-fit" src="${res.data.imgDevices}" alt="">`;
      document.querySelector("#textOfDevices>h3").innerHTML =
        res.data.texts.h3[0];
      document.querySelector("#textOfDevices>span").innerHTML =
        res.data.texts.h3[1];
  
      document.querySelector(
        "#sectionh4-1>div:nth-child(1)"
      ).innerHTML = `<img class="h-fit" src="${res.data.texts.h4[0][0]}" alt="">`;
      document.querySelector("#sectionh4-1>div:nth-child(2)>h4").innerHTML =
        res.data.texts.h4[0][1];
      document.querySelector("#sectionh4-1>div:nth-child(2)>span").innerHTML =
        res.data.texts.h4[0][2];
  
      document.querySelector(
        "#sectionh4-2>div:nth-child(1)"
      ).innerHTML = `<img class="h-fit" src="${res.data.texts.h4[1][0]}" alt="">`;
      document.querySelector("#sectionh4-2>div:nth-child(2)>h4").innerHTML =
        res.data.texts.h4[1][1];
      document.querySelector("#sectionh4-2>div:nth-child(2)>span").innerHTML =
        res.data.texts.h4[1][2];
  
      document.querySelector(
        "#sectionh4-3>div:nth-child(1)"
      ).innerHTML = `<img class="h-fit" src="${res.data.texts.h4[2][0]}" alt="">`;
      document.querySelector("#sectionh4-3>div:nth-child(2)>h4").innerHTML =
        res.data.texts.h4[2][1];
      document.querySelector("#sectionh4-3>div:nth-child(2)>span").innerHTML =
        res.data.texts.h4[2][2];
  
      document.querySelector(
        "#btnBuyDevices"
      ).innerHTML = `<img class="w-[25px]" src="${res.data.btnBuy[1]}" alt="">${res.data.btnBuy[0]}`;
    });
};

export default devices;