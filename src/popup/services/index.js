const createSinglePropertySetter =
    property =>
    (value, cb) => chrome.storage.local.set({[property]: value}, res => cb(res[property]));

const createSinglePropertyGetter =
    property =>
    cb => chrome.storage.local.get([property], res => cb(res[property])); 

export const getApplicationActivity = createSinglePropertyGetter('isActive');
export const setApplicationActivity = createSinglePropertySetter('isActive');

export const getFullHiding = createSinglePropertyGetter('fullHiding');
export const setFullHiding = createSinglePropertySetter('fullHiding');

export const setErasedUserId = createSinglePropertySetter('userId');
