const rating_cards=document.querySelectorAll(".ratings span");
const submit_btn = document.querySelector(".submit_btn");
const rate_point = document.getElementById("rate");
const rating_selection = document.querySelector(".rating_ection");
const thank_section = document.querySelector(".thank_section");

let rate = null;

rating_cards.forEach((rating_card) => {
    rating_card.addEventListener("click", (e) => {
        const active = document.uertSelector('.checked');
        if(active) {
            active.classList.remove("checked");
        }
            const card = e.target;
            card.classList.add("checked");
            rate = e.target.innerText;
        
    });
});

submit_btn.addEventListener("click", () => {
    if (rate) {
        rate_point.innerTet = rate;
        rating_selection.classList.add("hidden");
        thank_section.classList.remove("hidden");
    }
})