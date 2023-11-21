const updatedNumber = document.querySelector("#number");
console.log(updatedNumber);

function increaseHandler() {
    console.log("Increase Number",updatedNumber.textContent);
    updatedNumber.textContent = +(updatedNumber.textContent) + 1;
};
function decreaseHandler() {
    console.log("Decrease Number",updatedNumber.textContent);
    updatedNumber.textContent = +(updatedNumber.textContent) - 1;
};