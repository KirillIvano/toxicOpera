chrome.storage.local.get(
    [
        'userId',
        'isActive',
        'fullHiding',
    ],
    ({
        userId,
        isActive,
        fullHiding,
    }) => {
        if (!isActive) {
            return;
        }

        // eslint-disable-next-line no-undef
        const elementsToBeErased = document.querySelectorAll(`[data-list-id="${userId}"]`);

        if (elementsToBeErased.length) {
            if (fullHiding) {
                elementsToBeErased.forEach(
                    el => el.style.display = 'none'
                );
            } else {
                elementsToBeErased[0].style.display = 'none';
            }
        } else {
            console.log('Toxic debug: Element not found');
        }
    }
);
