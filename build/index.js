// delete concrete user
const deleteUser = () => 
    chrome.tabs.executeScript(null, {
        file: 'tabs/eraseUser.js',
    });

const MESSAGES_URL = 'https://vk.com/im';

const checkUrlAndEraseUser = (url, timeout) => MESSAGES_URL === url && setTimeout(deleteUser, timeout);

// handle page change
chrome.history.onVisited.addListener(({url}) => checkUrlAndEraseUser(url, 500));

// handle tab change
chrome.tabs.onActivated.addListener(({tabId}) => {
    chrome.tabs.get(
        tabId,
        ({url}) => checkUrlAndEraseUser(url, 0)
    );
});

// handle updates
chrome.webRequest.onCompleted.addListener(
    deleteUser,
    {
        urls: ['https://vk.com/al_im.php'],
    },
);

