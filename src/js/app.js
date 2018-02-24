const articles = document.querySelectorAll('.articles');
const navs = document.querySelectorAll('nav ul li a');
const intro = document.querySelector('.intro');
const introHeading = intro.querySelector('h1');

const clearTl = new TimelineLite();

clearTl
    .set(articles, { display: 'none', autoAlpha: 0 })


function enter(article) {
    const enterTl = new TimelineLite();

    enterTl
        .set(article.children, {autoAlpha: 0})
        .fromTo(article, 0.7, 
            { display: 'none', autoAlpha: 0, scale: 0 }, 
            { display: 'block', autoAlpha: 1, scale: 1 }
        )
        .to(article.children[0], 0.3, { autoAlpha: 1 }, '-=0.1')
        .to(article.children[1], 0.3, { autoAlpha: 1 }, '-=0.2')
    ;
}

function exit(article) {
    const exitTl = new TimelineLite();

    exitTl
        .set(article, { display: 'none', autoAlpha: 0 });
}

function removeLinkActive() {
    navs.forEach( nav => {
        nav.classList.remove('active');
    })
}

function handleClick(e) {

    removeLinkActive();

    intro.classList.add('hide');

    e.preventDefault();

    articles.forEach( article => {

        if (article.style.display == 'block') {
            exit(article);
        }

        if (article.dataset.target == e.target.dataset.href ) {
            enter(article)
            e.target.classList.add('active');
        } else if (article.dataset.target == e.target.dataset.href) {
            enter(article)
            e.target.classList.add('active');
        } else if (article.dataset.target == e.target.dataset.href) {
            enter(article)
            e.target.classList.add('active');
        } else if (article.dataset.target == e.target.dataset.href) {
            enter(article)
            e.target.classList.add('active');
        }
    })
}


navs.forEach(nav => nav.addEventListener('click', handleClick))


const typewriter = new Typewriter(introHeading, {
    loop: false
});

typewriter
    .typeString('Hello World!')
    .pauseFor(2500)
    .deleteChars(6)
    .typeString('Bangladesh!')
    .pauseFor(2500)
    .start();