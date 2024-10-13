document.querySelector('.search-btn').addEventListener('click', function () {
    const searchValue = document.getElementsByName('search')[0].value.toLowerCase();
    const elementsWithNames = document.querySelectorAll('[name]');
    let found = false;

    elementsWithNames.forEach(item => {
        if (item.textContent.toLowerCase().includes(searchValue) && searchValue) {
            found = true;
            item.scrollIntoView({ behavior: 'smooth', block: 'center' });
            item.style.backgroundColor = 'yellow';
        } else {
            item.style.backgroundColor = '';
        }
    });

    if (!found) {
        alert('No match');
    }
});