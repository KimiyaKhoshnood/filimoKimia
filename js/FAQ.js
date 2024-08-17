const FAQ = async () => {
    axios.get("http://localhost:3004/FAQ").then((res) => {
      document.querySelector("#FAQ>h3").innerHTML = res.data.topic;
      document.querySelector("#FAQ>span").innerHTML = res.data.span;
  
      let tempFAQ = "";
      for (let i in res.data.FAQs) {
        tempFAQ += `<div class="p-[15px] bg-[#171717] border border-gray-800 rounded-lg flex flex-col gap-2 cursor-pointer">
        <div class="flex">
        <h5 class="text-white text-[15px] flex-1">${res.data.FAQs[i][0]}</h5>
        <div class="w-[20px] flex justify-center items-center"><img class="w-fit h-fit" src="./media/plus-large-svgrepo-com.svg" alt=""></div>
        </div>
        <div class="text-[#B6B6B6] text-[12px] hidden">${res.data.FAQs[i][1]}</div>
        </div>`;
      }
      document.querySelector("#FAQ>div").innerHTML = tempFAQ;
  
  
      let FAQbox = document.querySelectorAll("#FAQ>div>div");
      let FAQtext = document.querySelectorAll("#FAQ>div>div>div:nth-child(2)")
      let FAQtopic = document.querySelectorAll("#FAQ>div>div>div:nth-child(1)>div")
      
      for (let i in Array.from(FAQbox)) {
        FAQbox[i].addEventListener("click", () => {
          console.log("click");
          if (FAQtext[i].classList.contains("hidden")) {
            // console.log("");
            FAQtext[i].classList.remove("hidden")
            FAQtopic[i].classList.add("rotate-45")
            document.querySelectorAll("#FAQ>div>div>div:nth-child(1)>h5")[i].classList.remove("text-white")
            document.querySelectorAll("#FAQ>div>div>div:nth-child(1)>h5")[i].classList.add("text-[#F4843F]")
          } else {
            // console.log("no");
            FAQtext[i].classList.add("hidden")
            FAQtopic[i].classList.remove("rotate-45")
            document.querySelectorAll("#FAQ>div>div>div:nth-child(1)>h5")[i].classList.remove("text-[#F4843F]")
            document.querySelectorAll("#FAQ>div>div>div:nth-child(1)>h5")[i].classList.add("text-white")
          }
        });
      }
    });
};

export default FAQ;