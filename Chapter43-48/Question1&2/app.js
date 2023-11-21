const mobilePhones = [
    {
        image:"./assets/iphone_evo.gif",
        title:"Iphone.gif",
    },
    {
        image:"./assets/note20.gif",
        title:"Samsung Note10.gif",
    },
    {
        image:"./assets/huawei.gif",
        title:"Huawei.gif",
    },
    {
        image:"./assets/oneplus.gif",
        title:"Oneplus.gif",
    },

];
const mobilesDiv = document.querySelector(".mobile-images");
mobilePhones.forEach((items) => {
    mobilesDiv.innerHTML += ` 
    <div>
    <img src=${items.image} onclick="alertHandler()">
    <a href="#" onclick="alertHandler()">${items.title}</a>
</div>` 
console.log(mobilesDiv);
})
function alertHandler() {
    alert("Thanks for purchasing a phone from us.")
}