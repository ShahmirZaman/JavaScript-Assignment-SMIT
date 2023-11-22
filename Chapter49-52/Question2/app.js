const paragraph = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia repudiandae iste distinctio! Id sit alias soluta vel illum sapiente quasi eius sequi? Reprehenderit ipsa natus delectus similique dolore numquam corporis quae soluta amet animi debitis sint nisi quia eaque nemo totam quis officia explicabo voluptates, laborum qui? A dolorem, inventore, voluptatibus doloribus at cupiditate amet laboriosam autem deserunt vitae perferendis sed eveniet! Excepturi debitis inventore aspernatur placeat iure eos at soluta recusandae assumenda nemo aliquid tempore laudantium ipsa ad magnam eligendi quibusdam sed, quasi quod sapiente culpa aliquam nulla? Laborum autem voluptatibus cumque perferendis, similique expedita animi, architecto exercitationem, qui optio quasi repudiandae. Nam soluta accusantium assumenda unde recusandae eligendi accusamus. Harum tempora eos non voluptatum facilis voluptatem architecto, excepturi assumenda earum at sapiente facere ducimus optio! Quas, iste quibusdam! Aliquid fuga atque culpa dolor eius aut soluta exercitationem alias numquam inventore a officia, explicabo nam! Magnam, culpa voluptate!";
const para = document.querySelector("p");
console.log(para);
para.textContent = paragraph.slice(0,400) + "...";
const btn = document.querySelector("button");
function showMore() {
    para.textContent = paragraph;
    btn.textContent = "See Less";
    btn.setAttribute("onclick","showLess()");
}
function showLess() {
    para.textContent = paragraph.slice(0,400) + "......";
    btn.textContent = "See More";
    btn.setAttribute("onclick","showMore()");
}