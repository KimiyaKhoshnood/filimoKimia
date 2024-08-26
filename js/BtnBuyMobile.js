const btnBuy = async (elem) => {
    axios.get("http://localhost:3004/btnBuy").then((res) => {
        elem.innerHTML = `<img class="w-[25px]" src="${res.data[1]}" alt="">${res.data[0]}`;
    })
}
export default btnBuy;