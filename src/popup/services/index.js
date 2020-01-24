export const getApplicationActivity = cb =>
    chrome.storage.local.get(['isActive'], ({isActive}) => cb(isActive)); 
export const setApplicationActivity = (isActive, cb) =>
    chrome.storage.local.set({isActive: isActive}, cb);

export const getFullHiding = cb => 
    chrome.storage.local.get(['fullHiding'], ({fullHiding}) => cb(fullHiding));
export const setFullHiding = (fullHiding, cb) => 
    chrome.storage.local.set({fullHiding: fullHiding}, ({fullHiding}) => cb(fullHiding));

export const setErasedUserId = (userId, cb) => chrome.storage.local.set({userId}, cb);
