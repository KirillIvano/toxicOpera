// delete concrete user
const deleteUser = () => 
    chrome.tabs.executeScript(null, {
        file: 'tabs/deleteUser.js',
    });

const MESSAGES_URL = 'https://vk.com/im';

const checkUrlAndDelete = (url, timeout) => MESSAGES_URL === url && setTimeout(deleteUser, timeout);

// handle page change
chrome.history.onVisited.addListener(({url}) => checkUrlAndDelete(url, 500));

// handle tab change
chrome.tabs.onActivated.addListener(({tabId}) => {
    chrome.tabs.get(
        tabId,
        ({url}) => checkUrlAndDelete(url, 0)
    );
});

// handle updates
chrome.webRequest.onCompleted.addListener(
    deleteUser,
    {
        urls: ['https://vk.com/al_im.php'],
    },
);

