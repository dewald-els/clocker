
Clocker.init('clock');

document.getElementById('btn-stop').addEventListener('click', function(){    
    Clocker.stop();
});

document.getElementById('btn-start').addEventListener('click', function(){    
    Clocker.start();
});