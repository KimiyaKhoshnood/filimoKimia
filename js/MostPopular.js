const mostPopular = async () => {
    axios.get("http://localhost:3004/mostPopular").then((res) => {
      document.querySelector("#h2Popular").innerHTML = res.data.h2;
  
      let toggleFilm = document.querySelector(
        "#toggleFilmSeries>div:nth-child(1)"
      );
      let toggleSeries = document.querySelector(
        "#toggleFilmSeries>div:nth-child(2)"
      );
  
      series(res);
  
      toggleFilm.addEventListener("click", () => {
        toggleSeries.classList.remove("bg-gray-700");
        toggleFilm.classList.add("bg-gray-700");
        series(res);
      });
  
      toggleSeries.addEventListener("click", () => {
        toggleFilm.classList.remove("bg-gray-700");
        toggleSeries.classList.add("bg-gray-700");
        film(res);
      });
    });
};

const film = (res) => {
    console.log("film");
  
    let html = "";
    for (let i in res.data.film) {
      html += `<li id="mostPopularFilms" class="rounded-xl w-[165px] opacity-80"><img class="rounded-xl w-full" src="${res.data.film[i]}" alt=""></li>`;
    }
    document.querySelector("#popMoviesList").innerHTML = html;
  
    document
      .querySelector("#popMoviesList>li:nth-child(1)")
      .classList.add("scale-110");
    document
      .querySelector("#popMoviesList>li:nth-child(1)")
      .classList.add("border-2");
    document
      .querySelector("#popMoviesList>li:nth-child(1)")
      .classList.add("border-gray-400");
    document
      .querySelector("#popMoviesList>li:nth-child(1)")
      .classList.remove("opacity-80");
  
    let listPopFilm = Array.from(document.querySelectorAll("#mostPopularFilms"));
  
    addAboutFilm(res, 0);
    let temp = 0;
  
    for (let i in listPopFilm) {
      listPopFilm[i].addEventListener("click", () => {
        console.log("click");
        listPopFilm[temp].classList.remove("scale-110");
        listPopFilm[temp].classList.remove("border-2");
        listPopFilm[temp].classList.remove("border-gray-400");
        listPopFilm[temp].classList.add("opacity-80");
        listPopFilm[i].classList.remove("opacity-80");
        listPopFilm[i].classList.add("scale-110");
        listPopFilm[i].classList.add("border-2");
        listPopFilm[i].classList.add("border-gray-400");
        temp = i;
  
        addAboutFilm(res, temp);
      });
    }
};
  
const addAboutFilm = (res, temp) => {
    console.log(res.data.imageboxFilm[temp].bg);
    document.querySelector(
      "#bgPop"
    ).className = `bg-${res.data.imageboxFilm[temp].bg} w-full bg-cover`;
  
    document.querySelector(
      "#popLogo"
    ).innerHTML = `<img class="w-fit h-full" src="${res.data.imageboxFilm[temp].logo}" alt="" />`;
  
    document.querySelector("#h3pop").innerHTML =
      res.data.imageboxFilm[temp].texts.title;
    document.querySelector("#director").innerHTML =
      res.data.imageboxFilm[temp].texts.director;
  
    let htmlForCapsole = "";
    for (let i in res.data.imageboxFilm[temp].texts.capsole) {
  
      htmlForCapsole += `<span class="py-[3px] px-[15px] bg-gray-800 rounded-xl">${res.data.imageboxFilm[temp].texts.capsole[i]}</span>`;
    }
    document.querySelector(`#capsolbox`).innerHTML = htmlForCapsole;
  
    document.querySelector("#describ").innerHTML =
      res.data.imageboxFilm[temp].texts.describ;
  
    document.querySelector("#swiperitems").innerHTML = "";
    document.querySelector("#popFilmsList").innerHTML = `<div
                id="btnBuyHero"
                class="bg-green-600 hover:bg-green-700 transition-colors duration-200 cursor-pointer text-[11px] rounded-md w-[260px] py-[10px] px-[16px] mb-[24px] flex justify-center items-center text-white gap-1"
              ><img class="w-[25px]" src="${res.data.imageboxFilm[temp].btnBuy[1]}" alt="">${res.data.imageboxFilm[temp].btnBuy[0]}</div>
              <span class="text-white text-[10px] pb-[24px]">${res.data.imageboxFilm[temp].about}</span>`;
};
  
const series = (res) => {
    console.log("series");
  
    let html = "";
    for (let i in res.data.series) {
      html += `<li id="mostPopularFilms" class="rounded-xl w-[165px] opacity-80"><img class="rounded-xl w-full" src="${res.data.series[i]}" alt=""></li>`;
    }
    document.querySelector("#popMoviesList").innerHTML = html;
  
    document
      .querySelector("#popMoviesList>li:nth-child(1)")
      .classList.add("scale-110");
    document
      .querySelector("#popMoviesList>li:nth-child(1)")
      .classList.add("border-2");
    document
      .querySelector("#popMoviesList>li:nth-child(1)")
      .classList.add("border-gray-400");
    document
      .querySelector("#popMoviesList>li:nth-child(1)")
      .classList.remove("opacity-80");
  
    let listPopFilm = Array.from(document.querySelectorAll("#mostPopularFilms"));
  
    addAboutMovie(res, 0);
    let temp = 0;
  
    for (let i in listPopFilm) {
      listPopFilm[i].addEventListener("click", () => {
        console.log("click");
        listPopFilm[temp].classList.remove("scale-110");
        listPopFilm[temp].classList.remove("border-2");
        listPopFilm[temp].classList.remove("border-gray-400");
        listPopFilm[temp].classList.add("opacity-80");
        listPopFilm[i].classList.remove("opacity-80");
        listPopFilm[i].classList.add("scale-110");
        listPopFilm[i].classList.add("border-2");
        listPopFilm[i].classList.add("border-gray-400");
        temp = i;
  
        addAboutMovie(res, temp);
      });
    }
};
  
const addAboutMovie = (res, temp) => {
    document.querySelector(
      "#bgPop"
    ).className = `bg-${res.data.imagebox[temp].bg} h w-full bg-cover`;
  
    document.querySelector(
      "#popLogo"
    ).innerHTML = `<img class="w-fit" src="${res.data.imagebox[temp].logo}" alt="" />`;
  
    document.querySelector("#h3pop").innerHTML =
      res.data.imagebox[temp].texts.title;
    document.querySelector("#director").innerHTML =
      res.data.imagebox[temp].texts.director;
  
    let htmlForCapsole = "";
    for (let i in res.data.imagebox[temp].texts.capsole) {
      htmlForCapsole += `<span class="py-[3px] px-[15px] bg-gray-800 rounded-xl">${res.data.imagebox[temp].texts.capsole[i]}</span>`;
    }
    document.querySelector(`#capsolbox`).innerHTML = htmlForCapsole;
  
    document.querySelector("#describ").innerHTML =
      res.data.imagebox[temp].texts.describ;
  
    document.querySelector("#popFilmsList").innerHTML = "";
  
    let tempForSwiper = "";
    for (let i in res.data.imagebox[temp].items) {
      tempForSwiper += `<div class="swiper-slide text-center flex items-center justify-center">
                    <img class="w-full rounded-xl" src="${res.data.imagebox[temp].items[i][0]}" alt=""/>
                    <h4 class="w-fit text-[11px] text-white">${res.data.imagebox[temp].items[i][1]}</h4>
                  </div>`;
    }
    document.querySelector("#swiperitems").innerHTML = tempForSwiper;
};

export default mostPopular;