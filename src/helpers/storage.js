export const getFromLocalStorage = (key) => {
	return localStorage.getItem(key);
};

export const setToLocalStorage = (key, value) => {
	localStorage.setItem(key, value);
};

export const overwriteToLocalStorage = (key, value) => {
	localStorage.setItem(key, value);
};
