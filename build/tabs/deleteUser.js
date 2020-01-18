chrome.storage.local.get('userId', ({userId}) => {
    // eslint-disable-next-line no-undef
    const messageBox = document.querySelector(`[data-list-id="${userId}"]`);

    if (messageBox) {
        messageBox.style.display = 'none';
    } else {
        console.log('Toxic debug: Element not found');
    }
});
