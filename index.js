const movePage = (name) => {
    const el = document.getElementById(name)
    el.scrollIntoView({ behavior: 'smooth' })
}