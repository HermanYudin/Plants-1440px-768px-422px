let itemBtns = document.querySelectorAll('.service-item');
let activeCategory = [];
let articles = document.querySelectorAll('.services-article');
let pricesSelect = document.querySelectorAll('.prices-select');
let pricesSelectDiscription = document.querySelectorAll('.prices-select-discription');
let activePrice = 0;

itemBtns.forEach((el,index) => {
    el.addEventListener('click', () => {
        el.classList.toggle('active');
        activeCategory.push(el.dataset.category);
        if(Array.from(itemBtns).every(elem => elem.classList.contains('active'))) {
            itemBtns.forEach(btn => {
                btn.classList.remove('active');
                activeCategory = [];
                itemBtns[index].classList.add('active');
                activeCategory.push(itemBtns[index].dataset.category);
            })
        }
        setActiveArticle();
    })
})

function setActiveArticle() {
    articles.forEach(el => {
        if (activeCategory.includes(el.classList[1])) {
            el.classList.add('active')
        } else el.classList.remove('active');
    })
}

pricesSelect.forEach((el,idx) => {
    el.addEventListener('click', () => {
        pricesSelect.forEach(elems => {
            elems.classList.remove('focus');
    })
    pricesSelectDiscription.forEach(element => {
        element.classList.add('vh');
    });
        activePrice = idx;
        pricesSelect[activePrice].classList.add('focus');
        pricesSelectDiscription[activePrice].classList.remove('vh');
    })
});
