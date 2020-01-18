const form = document.getElementById('popupForm');
const input = form.userId;
const preloader = document.getElementById('preloader');

const removeValidation = () => {
    input.classList.remove('invalid');

    input.removeEventListener('input', removeValidation);
};

const addValidation = () => {
    input.classList.add('invalid');
 
    input.addEventListener('input', removeValidation);
};

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const value = input.value;
    if (!value) {
        addValidation();
        return;
    }

    form.classList.add('disabled');
    preloader.classList.remove('disabled');

    chrome.storage.local.set(
        {userId: value},
        () => {
            form.classList.remove('disabled');
            preloader.classList.add('disabled');
        }
    );
});