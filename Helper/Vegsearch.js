

function Vegsearch(list) {
    let serachable = list.filter((x) => {
        return x.isVeg == 1;
    })
    return serachable;
}

export default Vegsearch;