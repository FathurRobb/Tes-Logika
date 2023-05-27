function containsSpecialChars(str) {
    const specialChars = /[`!@#$%^&*()_+\=\[\]{};':"\\|<>\/~]/;
    return specialChars.test(str);
}

function getCountWords() {
    const inputValue = document.getElementById("words").value;
    const inputArray = inputValue.split(' ');

    let countWord = 0;
    for (let i = 0; i < inputArray.length; i++) {
        containsSpecialChars(inputArray[i]) ? countWord += 0 : countWord += 1;
    }

    alert("Outputnya adalah "+ countWord)
}