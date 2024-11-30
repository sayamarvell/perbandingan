const inputangka = document.getElementById('number');
const tombolcheck = document.getElementById('check');
const hasil = document.getElementById('result');

tombolcheck.addEventListener('click', () => {
    const number = parseInt(inputangka.value);

    if (isNaN(number)) {
        hasil.textContent = 'Please enter a valid number';
    } else if (number % 2 === 0) {
        hasil.textContent = `${number} adalah genap`;
    } else {
        hasil.textContent = `${number} adalah ganjil`;
    }
});