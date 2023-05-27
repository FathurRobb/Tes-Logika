function getNumberOfSocks(){
    const inputValue = document.getElementById("socks").value;
    const inputArray = inputValue.split(' ');

    let socks = {};
    for (let i = 0; i < inputArray.length; i++) {
        socks[inputArray[i]] ? socks[inputArray[i]] ++ : socks[inputArray[i]] = 1;
    }

    let pairs = 0;
    for (let key in socks) {
        pairs += Math.floor(socks[key] / 2);
    }

    alert("Outputnya adalah "+ pairs)
}