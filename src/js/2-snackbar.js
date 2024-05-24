import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector("form");

form.addEventListener('submit', submitResult);

function submitResult(event) {
    event.preventDefault();
    const formElements = form.elements;

    const userInput = formElements.delay.value;
    const radioBtn = formElements.state.value;
    console.log(radioBtn);

    new Promise((resolve, reject) => {
        setTimeout(() => {
            if (radioBtn === 'fulfilled') {
                iziToast.success({
                    title: 'OK',
                    message: `✅ Fulfilled promise in ${userInput}ms`,
                });
                resolve(`Fulfilled promise in ${userInput}ms`);
            } else if (radioBtn === 'rejected') {
                iziToast.error({
                    title: 'Error',
                    message: `❌ Rejected promise in ${userInput}ms`,
                });
                reject(`Rejected promise in ${userInput}ms`);
            }
        }, +userInput);
    })
    .then(response => {
        console.log(response);
    })
    .catch(error => {
        console.error(error);
    });
}
