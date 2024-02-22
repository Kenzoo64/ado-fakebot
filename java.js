function tambah() {
    var input1 = parseInt(document.getElementById('input1').value);
    var input2 = parseInt(document.getElementById('input2').value);
    
    if(isNaN(input1) || isNaN(input2)){
        alert('jangan masukin bilangan');
        return;
    }

    var hasil = input1 + input2;
    alert(document.getElementById('hasil').textContent = hasil);
}

function ulang() {
    document.getElementById('input1').value = '';
    document.getElementById('input2').value = '';
    document.getElementById('hasil').textContent = '';
}