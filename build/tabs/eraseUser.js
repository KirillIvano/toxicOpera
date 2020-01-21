chrome.storage.local.get(['userId', 'isActive'], ({userId, isActive}) => {
    if (!isActive) {
        return;
    }

    // eslint-disable-next-line no-undef
    const messageBox = document.querySelector(`[data-list-id="${userId}"]`);

    if (messageBox) {
        messageBox.style.display = 'none';
    } else {
        console.log('Toxic debug: Element not found');
    }
});
