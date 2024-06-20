// Mouse move effect for elements with class 'move'
document.addEventListener('mousemove', function (e) {
    document.querySelectorAll('.move').forEach(layer => {
        const speed = parseFloat(layer.getAttribute('speed'));

        const x = (window.innerWidth - e.pageX * speed) / 120;
        const y = (window.innerHeight - e.pageY * speed) / 120;

        layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
    });
});


document.querySelector('.button').addEventListener('click', function () {
    document.querySelector('.modal').style.display = 'block';
});

document.querySelector('.message').addEventListener('click', function () {
    document.querySelector('.modal').style.display = 'block';
});

document.querySelector('.close').addEventListener('click', function () {
    document.querySelector('.modal').style.display = 'none';
});

window.addEventListener('click', function (event) {
    const modal = document.querySelector('.modal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }

});

document.querySelector('.continue').addEventListener('click', function () {
    event.preventDefault();

    var userName = document.getElementById("name").value;
    var userEmail = document.getElementById("mail").value;


    if (userName.trim() === '' || userEmail.trim() === '') {
        alert('Please enter your name and email to continue.');
        return;
    }
    document.querySelector('.thanks-modal').style.display = 'block';
    document.getElementById('userName').textContent = document.getElementById("name").value;
    document.querySelector('.modal').style.display = 'none';
});

document.querySelector('.close2').addEventListener('click', function () {
    document.querySelector('.thanks-modal').style.display = 'none';
});

window.addEventListener('click', function (event) {
    const modal = document.querySelector('.thanks-modal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }

});


document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger');
    const menu = document.querySelector('.menu');

    // Toggle menu on hamburger click
    hamburger.addEventListener('click', function (e) {
        this.classList.toggle('active');
        menu.classList.toggle('active');
        e.stopPropagation(); // Prevent click event from bubbling to the document
    });

    // Close the menu when clicking outside of it
    document.addEventListener('click', function (e) {
        if (!menu.contains(e.target) && !hamburger.contains(e.target)) {
            hamburger.classList.remove('active');
            menu.classList.remove('active');
        }
    });

    // Close the menu when a link inside it is clicked
    const menuLinks = document.querySelectorAll('.menu a');
    menuLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            hamburger.classList.remove('active');
            menu.classList.remove('active');
        });
    });
});







