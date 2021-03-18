function elementInViewport(el) {
    let top = el.offsetTop;
    let left = el.offsetLeft;
    const width = el.offsetWidth;
    const height = el.offsetHeight;

    while (el.offsetParent) {
        el = el.offsetParent;
        top += el.offsetTop;
        left += el.offsetLeft;
    }

    return (
        top < (window.pageYOffset + window.innerHeight) &&
        left < (window.pageXOffset + window.innerWidth) &&
        (top + height) > window.pageYOffset &&
        (left + width) > window.pageXOffset
    );
}

const movePage = (name) => {
    const el = document.getElementById(name)
    if (!el) return
    el.scrollIntoView({ behavior: 'smooth' })
}

const getViewId = () => {
    const pages = Array.from(document.querySelectorAll('.page'))
    const pageId = pages.map(el => el.id)
    let views = []
    pages.forEach(el => {
        if (elementInViewport(el)) views.push(el.id)
    })

    return pageId.indexOf(views[views.length - 1])
}

const up = () => {
    const pages = Array.from(document.querySelectorAll('.page'))
    const pageId = pages.map(el => el.id)
    movePage(pageId[getViewId() - 1])
}

const down = () => {
    const pages = Array.from(document.querySelectorAll('.page'))
    const pageId = pages.map(el => el.id)
    movePage(pageId[getViewId() + 1])
}
