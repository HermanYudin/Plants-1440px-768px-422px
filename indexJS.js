let itemBtns = document.querySelectorAll('.service-item');
let activeCategory = [];
let articles = document.querySelectorAll('.services-article');

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
        console.log(el.classList)
        if (activeCategory.includes(el.classList[1])) {
            el.classList.add('active')
        } else el.classList.remove('active');
    })
}