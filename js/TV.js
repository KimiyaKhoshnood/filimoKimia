const TV = async () => {
  try {
    const res = await axios.get("http://localhost:3004/TV");
    TVCodes(res);
  } catch (error) {
    console.log(error.message);
  }
};

const TVCodes = (res) => {
  document.querySelector("#textOfTV>h3").innerHTML =
    res.data.texts.titleAndDesc.title;
  document.querySelector("#textOfTV>span").innerHTML =
    res.data.texts.titleAndDesc.desc;

  let tempTVitems = "";
  res.data.texts.h4.map((elem) => {
    tempTVitems += `<div class="flex py-3">
                <div class="w-[50px] flex justify-center px-2">
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

  document.querySelector("#itemsOfTV").innerHTML = tempTVitems;

  document.querySelector(
    "#btnTV"
  ).innerHTML = `${res.data.btnTV.text}<img class="w-[25px] p-1" src="${res.data.btnTV.src}" alt="">`;

  document.querySelector(
    "#imgOfTV"
  ).innerHTML = `<img class="w-full" src="${res.data.imgTV}" alt="">`;
};

export default TV;
