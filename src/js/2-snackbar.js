const formData = {
    email: "",
    message: "" 
}

const form = document.querySelector("form")
const storageKey = "feedback-form-state";

storageCheck()

form.addEventListener('input', (event) => {
    event.preventDefault()
    const element = event.currentTarget.elements

    formData.email = element.email.value
    formData.message = element.message.value

    let strFormdata = JSON.stringify(formData);
    localStorage.setItem(storageKey, strFormdata); 
} )

function storageCheck(){
    const savedMessage = localStorage.getItem(storageKey);

    if(savedMessage){
        const savedData = JSON.parse(savedMessage); 
        form.elements.email.value = savedData.email; 
        form.elements.message.value = savedData.message;
    }
}

form.addEventListener('submit', (event) => {
    event.preventDefault()
    

    const keys = Object.keys(formData)
    let keyCheck = keys.map(key => form.elements[key].value)

    if(keyCheck.includes('')){
        return alert("Fill please all fields")
    } else{
        localStorage.removeItem(storageKey)
        form.reset()
        return console.log(formData);
    }

})