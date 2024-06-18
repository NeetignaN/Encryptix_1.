// Mouse move effect for elements with class 'move'
document.addEventListener('mousemove', function(e) {
    document.querySelectorAll('.move').forEach(layer => {
        const speed = parseFloat(layer.getAttribute('speed'));

        const x = (window.innerWidth - e.pageX * speed) / 120;
        const y = (window.innerHeight - e.pageY * speed) / 120;

        layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
    });
});


    document.querySelector('.button').addEventListener('click', function() {
        document.querySelector('.modal').style.display = 'block';
    });

    document.querySelector('.close').addEventListener('click', function() {
        document.querySelector('.modal').style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        const modal = document.querySelector('.modal');
        if (event.target === modal) {
            modal.style.display = 'none';
        }
        
    });

   

    
