const cinemaMobile = async () => {
  try {
    const res = await axios.get("http://localhost:3004/cinema");
    cinemaMobileCodes(res);
  } catch (error) {
    console.log(error.message);
  }
};

const cinemaMobileCodes = (res) => {
  document.querySelector("#cinemaMobile>h2").innerHTML = res.data.topicMobile;
  document.querySelector("#cinemaMobile>span").innerHTML = res.data.spanMobile;
  document.querySelector(
    "#cinemaMobile>div"
  ).innerHTML = `<img class="w-[140px] rounded-md" src="${res.data.imgMobile}" alt="">`;
};

export default cinemaMobile;
