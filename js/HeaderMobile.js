const headerMobile = async () => {
  try {
    const res = await axios.get("http://localhost:3004/header");
    headerMobileCodes(res);
  } catch (error) {
    console.log(error.message);
  }
};

const headerMobileCodes = (res) => {
  document.querySelector(
    "#headerMobile>div:nth-child(1)"
  ).innerHTML = `<img class="w-[100px]" src="${res.data.logo}" alt="">`;

  document.querySelector(
    "#headerMobile>div:nth-child(2)>div:nth-child(1)"
  ).innerHTML = `<img class="w-[20px] h-[20px]" src="${res.data.liitems[0].svg}" alt="">`;

  document.querySelector(
    "#headerMobile>div:nth-child(2)>div:nth-child(2)"
  ).innerHTML = `<img class="w-[20px] h-[20px]" src="${res.data.dots}" alt="">`;

  let tempdropdownMobile = "";
  res.data.dotsDropdown.map((elem) => {
    tempdropdownMobile += `<li class="py-3 text-[13px] flex gap-1 min-w-[110px] border-b-2 border-[#5b5b5b] cursor-pointer"><img class="w-[15px]" src="${elem.src}" alt="">${elem.text}</li>`;
  });
  document.querySelector("#dropdownMobile").innerHTML = tempdropdownMobile;
  document
    .querySelector("#dropdownMobile>li:nth-last-child(1)")
    .classList.remove("border-b-2");

  document
    .querySelector("#headerMobile>div:nth-child(2)>div:nth-child(2)")
    .addEventListener("click", () => {
      document.querySelector("#listForDots").classList.toggle("hidden");
    });

  document.querySelector(
    "#headerMobile>div:nth-child(2)>div:nth-child(3)"
  ).innerHTML = res.data.btnEnter;
};

export default headerMobile;
