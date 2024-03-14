
const increment = document.getElementById('increment');
const decrement = document.getElementById('decrement');
const reset = document.getElementById('reset');
const changeBy = document.getElementById('changeBy');
const value = document.querySelector('.value');

increment.addEventListener('click', () => {
    value.textContent = +value.textContent + changeBy.valueAsNumber;
})
decrement.addEventListener('click', () => {
    value.textContent = parseInt(value.textContent) - parseInt(changeBy.value);
})

reset.addEventListener('click', () => {
    value.textContent = 0;
    changeBy.textContent = changeBy.value=0;
})

changeBy.addEventListener('change', () => {
    const changeByValue = changeBy.valueAsNumber;

    if(Number.isNaN(changeByValue)){
        changeBy.value = 1
    }else if(changeByValue < 0){
        changeBy.value = 1
    }else if(changeByValue > 10){
        changeBy.value = 10;
    }
})