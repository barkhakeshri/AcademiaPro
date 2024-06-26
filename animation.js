const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        console.log(entry);
        if(entry.isIntersecting>0){
            entry.target.classList.add('show');
        }else{
            entry.target.classList.remove('show');
        }

    })
}, {
    threshold: 0.5 // Adjust the threshold as needed
})

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el)=>observer.observe(el));