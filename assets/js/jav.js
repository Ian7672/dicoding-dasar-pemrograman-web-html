var bol= true;
document.getElementById('dark').addEventListener('click', function() {
    if (bol) {
    document.body.style.backgroundColor = '#FEFFD2';
    document.getElementById('dark').innerHTML = 'Normal';

    } else {
        document.body.style.backgroundColor = '#F5F7F8';
        document.getElementById('dark').innerHTML = 'Baca';

    }
    bol = !bol;
});