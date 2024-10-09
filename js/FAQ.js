const FAQ = async () => {
  try {
    const res = await axios.get("http://localhost:3004/FAQ");
    FAQCodes(res);
  } catch (error) {
    console.log(error.message);
  }
};

const FAQCodes = (res) => {
  document.querySelector("#FAQ>h3").innerHTML = res.data.topic;
  document.querySelector("#FAQ>span").innerHTML = res.data.span;

  let tempFAQ = "";
  res.data.FAQs.map((elem) => {
    let word = elem.text;
    if (elem.marked !== false) {
      elem.marked.map((elem2) => {
        word = word.replace(
          elem2,
          `<span class="text-[#FDC13C]">${elem2}</span>`
        );
      });
    }

    tempFAQ += `<div class="p-[15px] bg-[#171717] border border-gray-800 rounded-lg flex flex-col gap-2 max-h-[55px] cursor-pointer transition-all duration-1000 ease-linear">
        <div class="flex">
          <h5 class="text-white text-[15px] flex-1">${elem.title}</h5>
          <div class="w-[20px] flex justify-center items-center rotate-0"><img class="w-fit h-fit" src="./media/plus-large-svgrepo-com.svg" alt=""></div>
        </div>
        <div class="text-[#B6B6B6] text-[12px] hidden overflow-hidden">${word}</div>
        </div>`;
  });
  document.querySelector("#FAQ>div").innerHTML = tempFAQ;

  let FAQbox = document.querySelectorAll("#FAQ>div>div");
  let FAQtext = document.querySelectorAll("#FAQ>div>div>div:nth-child(2)");
  let FAQtopic = document.querySelectorAll("#FAQ>div>div>div:nth-child(1)>div");

  Array.from(FAQbox).map((elem, i) => {
    elem.addEventListener("click", () => {
      if (FAQtext[i].classList.contains("hidden")) {
        elem.classList.add("!max-h-[200px]");
        FAQtext[i].classList.remove("hidden");
        FAQtopic[i].classList.add("!rotate-45");
        document
          .querySelectorAll("#FAQ>div>div>div:nth-child(1)>h5")
          [i].classList.remove("text-white");
        document
          .querySelectorAll("#FAQ>div>div>div:nth-child(1)>h5")
          [i].classList.add("text-[#F4843F]");
      } else {
        elem.classList.remove("!max-h-[200px]");
        FAQtext[i].classList.add("hidden");
        FAQtopic[i].classList.remove("!rotate-45");
        document
          .querySelectorAll("#FAQ>div>div>div:nth-child(1)>h5")
          [i].classList.remove("text-[#F4843F]");
        document
          .querySelectorAll("#FAQ>div>div>div:nth-child(1)>h5")
          [i].classList.add("text-white");
      }
    });
  });

  document.querySelector("#dropdownMobile>li").addEventListener("click", () => {
    document.querySelector("#FAQmobile").classList.remove("hidden");
    document.querySelector("#FAQmobile").classList.add("flex");
    document.querySelector("#FAQmobile > h3").innerHTML = res.data.topic;

    let tempFAQmobile = "";
    res.data.FAQs.map((elem) => {
      let wordMobile = elem.text;
      if (elem.marked !== false) {
        elem.marked.map((elem2) => {
          wordMobile = wordMobile.replace(
            elem2,
            `<span class="text-[#FDC13C]">${elem2}</span>`
          );
        });
      }

      tempFAQmobile += `<div class="p-[15px] bg-[#3A3A3A] rounded-lg flex flex-col gap-2 max-h-[90px] cursor-pointer transition-all duration-500 ease-linear">
          <div class="flex">
          <h5 class="text-white text-[13px] flex-1">${elem.title}</h5>
          <div class="w-[20px] flex justify-center items-center"><img class="w-fit h-fit" src="./media/plus-svg-green.svg" alt=""></div>
          </div>
          <div class="text-[#B6B6B6] text-[12px] hidden leading-6 overflow-hidden">${wordMobile}</div>
          </div>`;
    });
    document.querySelector("#FAQmobile>div").innerHTML = tempFAQmobile;

    let FAQboxMobile = document.querySelectorAll("#FAQmobile>div>div");
    let FAQtextMobile = document.querySelectorAll(
      "#FAQmobile>div>div>div:nth-child(2)"
    );
    let FAQtopicMobile = document.querySelectorAll(
      "#FAQmobile>div>div>div:nth-child(1)>div"
    );

    Array.from(FAQboxMobile).map((elem, i) => {
      elem.addEventListener("click", () => {
        console.log("click");
        if (FAQtextMobile[i].classList.contains("hidden")) {
          elem.classList.add("!max-h-[200px]");
          FAQtextMobile[i].classList.remove("hidden");
          FAQtopicMobile[i].classList.add("rotate-45");
          document
            .querySelectorAll("#FAQmobile>div>div>div:nth-child(1)>h5")
            [i].classList.remove("text-white");
          document
            .querySelectorAll("#FAQmobile>div>div>div:nth-child(1)>h5")
            [i].classList.add("text-[#1CB561]");
        } else {
          elem.classList.remove("!max-h-[200px]");
          FAQtextMobile[i].classList.add("hidden");
          FAQtopicMobile[i].classList.remove("rotate-45");
          document
            .querySelectorAll("#FAQmobile>div>div>div:nth-child(1)>h5")
            [i].classList.remove("text-[#1CB561]");
          document
            .querySelectorAll("#FAQmobile>div>div>div:nth-child(1)>h5")
            [i].classList.add("text-white");
        }
      });
    });

    document.querySelector("#FAQmobile>span").addEventListener("click", () => {
      document.querySelector("#FAQmobile").classList.remove("flex");
      document.querySelector("#FAQmobile").classList.add("hidden");
      document.querySelector("#listForDots").classList.add("hidden");
    });
  });
};
export default FAQ;
