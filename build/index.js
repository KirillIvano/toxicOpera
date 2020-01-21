// delete concrete user
const deleteUser = () => 
    chrome.tabs.executeScript(null, {
        file: 'tabs/deleteUser.js',
    });
            
// handle page change
chrome.history.onVisited.addListener(({url}) => {
    if (url === 'https://vk.com/im') {
        setTimeout(() => {
            deleteUser();
        }, 500);
    }
});

// handle updates
chrome.webRequest.onCompleted.addListener(
    deleteUser,
    {
        urls: ['https://vk.com/al_im.php'],
    },
);

