const content = document.querySelector('.content')

const myObserver = new IntersectionObserver((entries) =>{
    console.log(entries)
})


myObserver.observe(content)