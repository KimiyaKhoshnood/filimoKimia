const mostPopular = async () => {
  try {
    const res = await axios.get("http://localhost:3004/mostPopular");
    mostPopularCodes(res);
  } catch (error) {
    console.log(error.message);
  }
};

const mostPopularCodes = (res) => {
  document.querySelector("#h2Popular").innerHTML = res.data.h2;

  let toggleFilm = document.querySelector("#toggleFilmSeries>div:nth-child(1)");
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
};

const film = (res) => {
  let html = "";
  res.data.film.map((elem) => {
    html += `<li id="mostPopularFilms" class="rounded-xl w-[165px] opacity-80"><img class="rounded-xl w-full transition-all duration-1000" src="${elem.src}" alt=""></li>`;
  });
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

  listPopFilm.map((elem, i) => {
    elem.addEventListener("click", () => {
      console.log("click");
      listPopFilm[temp].classList.remove("scale-110");
      listPopFilm[temp].classList.remove("border-2");
      listPopFilm[temp].classList.remove("border-gray-400");
      listPopFilm[temp].classList.add("opacity-80");
      elem.classList.remove("opacity-80");
      elem.classList.add("scale-110");
      elem.classList.add("border-2");
      elem.classList.add("border-gray-400");
      temp = i;

      addAboutFilm(res, temp);
    });
  });
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

  res.data.imageboxFilm[temp].texts.capsole.map((elem) => {
    htmlForCapsole += `<span class="py-[3px] px-[15px] bg-gray-800 rounded-xl">${elem}</span>`;
  });
  document.querySelector(`#capsolbox`).innerHTML = htmlForCapsole;

  document.querySelector("#describ").innerHTML =
    res.data.imageboxFilm[temp].texts.describ;

  document.querySelector("#swiperitems").innerHTML = "";
  document.querySelector("#popFilmsList").innerHTML = `<div
                id="btnBuyHero"
                class="bg-green-600 hover:bg-green-700 transition-colors duration-200 cursor-pointer text-[11px] rounded-md w-[260px] py-[10px] px-[16px] mb-[24px] flex justify-center items-center text-white gap-1"
              ><img class="w-[25px]" src="${res.data.imageboxFilm[temp].btnBuy.src}" alt="">${res.data.imageboxFilm[temp].btnBuy.text}</div>
              <span class="text-white text-[10px] pb-[24px]">${res.data.imageboxFilm[temp].about}</span>`;
};

const series = (res) => {
  console.log("series");

  let html = "";
  res.data.series.map((elem) => {
    html += `<li id="mostPopularFilms" class="rounded-xl w-[165px] opacity-80"><img class="rounded-xl w-full  transition-all duration-1000" src="${elem}" alt=""></li>`;
  });
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

  listPopFilm.map((elem, i) => {
    elem.addEventListener("click", () => {
      console.log("click");
      listPopFilm[temp].classList.remove("scale-110");
      listPopFilm[temp].classList.remove("border-2");
      listPopFilm[temp].classList.remove("border-gray-400");
      listPopFilm[temp].classList.add("opacity-80");
      elem.classList.remove("opacity-80");
      elem.classList.add("scale-110");
      elem.classList.add("border-2");
      elem.classList.add("border-gray-400");
      temp = i;

      addAboutMovie(res, temp);
    });
  });
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
  res.data.imagebox[temp].texts.capsole.map((elem) => {
    htmlForCapsole += `<span class="py-[3px] px-[15px] bg-gray-800 rounded-xl">${elem}</span>`;
  });
  document.querySelector(`#capsolbox`).innerHTML = htmlForCapsole;

  document.querySelector("#describ").innerHTML =
    res.data.imagebox[temp].texts.describ;

  document.querySelector("#popFilmsList").innerHTML = "";

  let tempForSwiper = "";
  res.data.imagebox[temp].items.map((elem, i) => {
    tempForSwiper += `<div class="swiper-slide text-center flex items-center justify-center">
                    <img class="w-full rounded-xl" src="${elem.src}" alt=""/>
                    <h4 class="w-fit text-[11px] text-white">${elem.title}</h4>
                  </div>`;
  });
  document.querySelector("#swiperitems").innerHTML = tempForSwiper;
};

export default mostPopular;
