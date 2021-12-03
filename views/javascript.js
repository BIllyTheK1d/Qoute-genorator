const loader = document.querySelector('.loader');

const getQuote = async () => {
    loader.classList.remove('hide');
    loader.classList.add('hide');
}
getQuote();