export const $ = selector => {
	let elements = document.querySelectorAll(selector);
	return Array.prototype.slice.call(elements);
};
