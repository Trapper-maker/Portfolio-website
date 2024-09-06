var typed = new Typed(".text", {
    strings: ["Frontend Developer" , "Web Developer" , "Computer Technician"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});
document.querySelectorAll('.radial-bar').forEach(function(bar) {
    let percentage = bar.getAttribute('data-percentage');
    let path = bar.querySelector('.path');
    let offset = (502 - (502 * percentage) / 100);
     path.style.strokeDashoffset = offset;
});
document.querySelector('form').addEventListener('submit', function(e) {
    const name = document.querySelector('input[name="name"]').value;
    const email = document.querySelector('input[name="email"]').value;

    if (name === '' || email === '') {
        e.preventDefault();
        alert('Please fill in all required fields');
    }
});
