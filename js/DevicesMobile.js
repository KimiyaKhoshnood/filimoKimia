const devicesMobile = async () => {
  try {
    const res = await axios.get("http://localhost:3004/devices");
    devicesMobileCodes(res);
  } catch (error) {
    console.log(error.message);
  }
};

const devicesMobileCodes = (res) => {
  document.querySelector(
    "#filimoDevicesMobile>div>div"
  ).innerHTML = `<img class="w-[80%]" src="${res.data.imgDevicesMobile}" alt="">`;
  document.querySelector("#filimoDevicesMobile>div>h2").innerHTML =
    res.data.textsMobile.h2;
  document.querySelector("#filimoDevicesMobile>div>span").innerHTML =
    res.data.textsMobile.span;
  document.querySelector(
    "#filimoDevicesMobile>div>a"
  ).innerHTML = `<img class="w-[25px]" src="${res.data.textsMobile.btnDownload.src}" alt="">${res.data.textsMobile.btnDownload.text}`;

  let tempdevicesLogoMobile = "";
  res.data.mobileLogos.map((elem) => {
    tempdevicesLogoMobile += `<img class="h-[25px] w-fit" src="${elem}" alt="">`;
  });
  document.querySelector("#devicesLogoMobile").innerHTML =
    tempdevicesLogoMobile;
};

export default devicesMobile;
