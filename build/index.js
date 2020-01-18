// delete concrete user
const deleteUser = () => 
    chrome.tabs.executeScript(null, {
        file: 'tabs/deleteUser.js',
    });
            

// handle updates
chrome.webRequest.onCompleted.addListener(
    deleteUser,
    {
        urls: ['https://vk.com/al_im.php'],
    },
);

