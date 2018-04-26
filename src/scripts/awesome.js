const output = document.querySelector(".output")

// fragment to hold all the stuff so we can put in dom
const fragment = document.createDocumentFragment()

//create factory function to generate input components
    //create input component

const inputFieldFactory = (classList, defalutPlaceholderText, type) => {
    const inputfield = document.createElement("input")
    inputfield.classList = classList
    inputfield.placeholder = defalutPlaceholderText
    inputfield.setAttribute("type", type)
    return inputfield
}
    //create button component

const buttonFactory = (classList, textContent) => {
    const theButton = document.createElement("input")
    theButton.classList = classList
    theButton.placeholder = textContent
    return theButton
}

const createCardButton = buttonFactory("button--submit", "Create Card")

fragment.appendChild(inputFieldFactory("input--text", "enter card text here", "text"))
fragment.appendChild()
//attach event listener to button
//get value of input field
//create card component with text inside
createCardButton.addEventListener("click",function (){
    document.getElementById("input--text")   
})
//create card component

output.appendChild(fragment)