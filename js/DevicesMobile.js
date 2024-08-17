const devicesMobile = async () => {
    axios.get("http://localhost:3004/devices").then((res) => {
      document.querySelector(
        "#filimoDevicesMobile>div>div"
      ).innerHTML = `<img class="w-[80%]" src="${res.data.imgDevicesMobile}" alt="">`;
      document.querySelector("#filimoDevicesMobile>div>h2").innerHTML =
        res.data.textsMobile.h2;
      document.querySelector("#filimoDevicesMobile>div>span").innerHTML =
        res.data.textsMobile.span;
      document.querySelector(
        "#filimoDevicesMobile>div>a"
      ).innerHTML = `<img class="w-[25px]" src="${res.data.textsMobile.btnDownload[1]}" alt="">${res.data.textsMobile.btnDownload[0]}`;
  
      let tempdevicesLogoMobile = "";
      for (let i in res.data.mobileLogos) {
        tempdevicesLogoMobile += `<img class="h-[25px] w-fit" src="${res.data.mobileLogos[i]}" alt="">`;
      }
      document.querySelector("#devicesLogoMobile").innerHTML =
        tempdevicesLogoMobile;
    });
};

export default devicesMobile;