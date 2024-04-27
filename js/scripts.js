const generatePasswordButton = document.querySelector("#generate-password")
const generatedPasswordElement = document.querySelector("#generated-password")
const copyPasswordButton = document.querySelector(".buttons").querySelector("#copy-password")
const closePasswordButton = document.querySelector(".buttons").querySelector("#close-password")

const getLetterLowerCase = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}

const getLetterUpperCase = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}

const getNumber = () => {
    return Math.floor(Math.random() * 10).toString()
}

const getSymbol = () => {
    const symbols = "!#$%&'()*+,-./:;<=>?@"
    return symbols[Math.floor(Math.random() * symbols.length)]
}

const generatePassword = (getLetterLowerCase, getLetterUpperCase, getNumber, getSymbol) => {
    let password = ""

    const passwordLength = 8
    const generators = [
        getLetterLowerCase,
        getLetterUpperCase,
        getNumber,
        getSymbol
    ]

    for (i = 0; i < passwordLength; i = i + generators.length) {
        generators.forEach(() => {
          const randomValue = generators[Math.floor(Math.random() * generators.length)]();
    
          password += randomValue;
        });
      }

    password = password.slice(0, passwordLength)

    generatedPasswordElement.style.opacity = "1"
    generatedPasswordElement.style.position = "relative"
    generatedPasswordElement.querySelector(".password-info").querySelector("h4").innerText = password
}

generatePasswordButton.addEventListener("click", () => {
    generatePassword(
        getLetterLowerCase,
        getLetterUpperCase,
        getNumber,
        getSymbol
    )
})

copyPasswordButton.addEventListener("click", (e) => {
    e.preventDefault();
  
    const password = generatedPasswordElement.querySelector("h4").innerText
  
    navigator.clipboard.writeText(password)
    copyPasswordButton.style.backgroundColor = "#838383"

    setTimeout(() => {
        copyPasswordButton.style.backgroundColor = "#bbbbbb"
    }, 1000)
})

closePasswordButton.addEventListener("click", () => {
    closePasswordButton.style.backgroundColor = "#fd4949"

    generatedPasswordElement.style.opacity = "0"

    setTimeout(() => {
        generatedPasswordElement.style.position = "absolute"
    }, 500)
})
