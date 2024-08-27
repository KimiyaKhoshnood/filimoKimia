const btnBuy = async (elem) => {
    axios.get("http://localhost:3004/btnBuy").then((res) => {
        elem.innerHTML = `<img class="w-[25px]" src="${res.data.svg}" alt="">${res.data.text}`;
    })
}
export default btnBuy;