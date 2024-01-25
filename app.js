const observer  = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        // console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add('show');
        } else{
            entry.target.classList.remove('show');
        }
    });
});


function clearTextboxes() {
    // Get the input elements
    var textbox1 = document.getElementsByClassName('.input');
  
    // Clear the input values
    textbox1.value = '';
    // textbox2.value = '';
}

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));