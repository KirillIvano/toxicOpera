const form = document.getElementById('popupForm');
const input = form.userId;
const preloader = document.getElementById('preloader');
const toggle = document.getElementById('toggle');

// elements helpers

const removeValidation = () => {
    input.classList.remove('invalid');
    input.removeEventListener('input', removeValidation);
};

const addValidation = () => {
    input.classList.add('invalid');
    input.addEventListener('input', removeValidation);
};

const disableToggleButton = () => {
    toggle.setAttribute('disabled', 'true');
};

const enableToggleButton = () => {
    toggle.removeAttribute('disabled');
};

const activateToggleButton = () => {
    toggle.classList.add('active');
};

const deactivateToggleButton = () => {
    toggle.classList.remove('active');
};

const setLoading = () => {
    form.classList.add('disabled');
    preloader.classList.remove('disabled');
};

const removeLoading = () => {
    form.classList.remove('disabled');
    preloader.classList.add('disabled');
};

// storage helpers
const getApplicationActivity = (cb) =>
    chrome.storage.local.get(['isActive'], ({isActive}) => cb(isActive)); 

const setApplicationActivity = (isActive, cb) =>
    chrome.storage.local.set({isActive: !isActive}, cb);

const setErasedUserId = (userId, cb) => chrome.storage.local.set({userId}, cb);

// handlers
const toggleApplicationHandler = () => {
    disableToggleButton();

    getApplicationActivity((isActive) => {
        isActive ? deactivateToggleButton() : activateToggleButton();
        setApplicationActivity(isActive);
        enableToggleButton();
    });
};

const submitIdHandler = e => {
    e.preventDefault();

    const value = input.value;
    if (!value) {
        addValidation();
        return;
    }

    setLoading();
    setErasedUserId(value, removeLoading);
};

const actualizePopup = () =>
    getApplicationActivity(
        isActive => console.log(isActive) || (isActive ? activateToggleButton() : deactivateToggleButton())
    );  


actualizePopup();
// listeners
toggle.addEventListener('click', toggleApplicationHandler);
form.addEventListener('submit', submitIdHandler);