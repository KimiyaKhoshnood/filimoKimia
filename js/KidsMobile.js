const kidsMobile = async () => {
  try {
    const res = await axios.get("http://localhost:3004/kidsMobile");
    kidsMobileCodes(res);
  } catch (error) {
    console.log(error.message);
  }
};

const kidsMobileCodes = (res) => {
  let tempforTop = `<img class="h-[188px] w-[847px]" src="${res.data.topAnimation}" alt="">`;
  tempforTop += tempforTop;
  document.querySelector("#topAnimationKids>div").innerHTML = tempforTop;

  let tempNumforTop = 0;
  function animationTop() {
    tempNumforTop -= 0.1;
    document.querySelector("#topAnimationKids>div").style.right =
      tempNumforTop + "px";

    if (Math.abs(tempNumforTop) >= window.innerWidth) {
      tempNumforTop = -0;
    }
    window.requestAnimationFrame(animationTop);
  }
  animationTop();

  document.querySelector("#h2KidsMobile").innerHTML = res.data.topic;
  document.querySelector("#spanKidsMobile").innerHTML = res.data.span;

  let tempforBottom = "";
  res.data.bottomAnimation.map((elem) => {
    tempforBottom += `<img class="h-[66px] w-[66px]" src="${elem}" alt="">`;
  });
  tempforBottom += tempforBottom;
  tempforBottom += tempforBottom;
  document.querySelector("#bottomAnimationKids>div").innerHTML = tempforBottom;

  let tempNumforBottom = 0;
  function animationBottom() {
    tempNumforBottom -= 0.1;
    document.querySelector("#bottomAnimationKids>div").style.right =
      tempNumforBottom + "px";

    if (Math.abs(tempNumforBottom) >= window.innerWidth) {
      tempNumforBottom = -0;
    }
    window.requestAnimationFrame(animationBottom);
  }
  animationBottom();
};

export default kidsMobile;
