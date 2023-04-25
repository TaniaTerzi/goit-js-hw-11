

const getInput = document.querySelector('#search-form');
console.log(getInput);

const button = document.querySelector('button');
console.log(button);


const getInputValue = (event => {
    const inputValue = event.target.value;
    console.log(inputValue);
});

getInput.addEventListener('input', getInputValue);