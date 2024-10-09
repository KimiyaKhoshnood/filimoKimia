const btnBuy = async (elem) => {
  try {
    const res = await axios.get("http://localhost:3004/btnBuy");
    btnBuyCodes(res, elem);
  } catch (error) {
    console.log(error.message);
  }
};

const btnBuyCodes = (res, elem) => {
  elem.innerHTML = `<img class="w-[25px]" src="${res.data.svg}" alt="">${res.data.text}`;
};

export default btnBuy;
