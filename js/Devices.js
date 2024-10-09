const devices = async () => {
  try {
    const res = await axios.get("http://localhost:3004/devices");
    devicesCodes(res);
  } catch (error) {
    console.log(error.message);
  }
};

const devicesCodes = (res) => {
  document.querySelector(
    "#imgOfDevices"
  ).innerHTML = `<img class="h-fit" src="${res.data.imgDevices}" alt="">`;
  document.querySelector("#textOfDevices>h3").innerHTML =
    res.data.texts.h3.title;
  document.querySelector("#textOfDevices>span").innerHTML =
    res.data.texts.h3.content;

  let tempDevicesItems = "";
  res.data.texts.h4.map((elem) => {
    tempDevicesItems += `<div class="flex py-3">
                <div class="w-[50px] flex justify-center">
                  <img class="h-fit" src="${elem.src}" alt="">
                </div>
                <div>
                  <h4 class="text-[14px] text-[#D8D8D8]">
                    ${elem.title}
                  </h4>
                  <span class="text-[11px] text-[#A1A1A1]">
                    ${elem.span}
                  </span>
                </div>
              </div>`;
  });

  document.querySelector("#itemsOfDevices").innerHTML = tempDevicesItems;

  document.querySelector(
    "#btnBuyDevices"
  ).innerHTML = `<img class="w-[25px]" src="${res.data.btnBuy.src}" alt="">${res.data.btnBuy.text}`;
};

export default devices;
