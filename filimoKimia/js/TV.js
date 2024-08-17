const TV = async () => {
    axios.get("http://localhost:3004/TV").then((res) => {
      document.querySelector("#textOfTV>h3").innerHTML = res.data.texts.h3[0];
      document.querySelector("#textOfTV>span").innerHTML = res.data.texts.h3[1];
  
      document.querySelector(
        "#TVh4-1>div:nth-child(1)"
      ).innerHTML = `<img class="h-fit" src="${res.data.texts.h4[0][0]}" alt="">`;
      document.querySelector("#TVh4-1>div:nth-child(2)>h4").innerHTML =
        res.data.texts.h4[0][1];
      document.querySelector("#TVh4-1>div:nth-child(2)>span").innerHTML =
        res.data.texts.h4[0][2];
  
      document.querySelector(
        "#TVh4-2>div:nth-child(1)"
      ).innerHTML = `<img class="h-fit" src="${res.data.texts.h4[1][0]}" alt="">`;
      document.querySelector("#TVh4-2>div:nth-child(2)>h4").innerHTML =
        res.data.texts.h4[1][1];
      document.querySelector("#TVh4-2>div:nth-child(2)>span").innerHTML =
        res.data.texts.h4[1][2];
  
      document.querySelector(
        "#btnTV"
      ).innerHTML = `${res.data.btnTV[0]}<img class="w-[25px] p-1" src="${res.data.btnTV[1]}" alt="">`;
  
      document.querySelector(
        "#imgOfTV"
      ).innerHTML = `<img class="w-full" src="${res.data.imgTV}" alt="">`;
    });
};

export default TV;