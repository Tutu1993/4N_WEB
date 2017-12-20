function delay(ms) {
	return new Promise((resolve, reject) => {
		setTimeout(resolve, ms)
	});
}

function addScrollHandler(myHandler) {
	window.addEventListener('scroll', myHandler)
}

function removeScrollHandler(myHandler) {
	window.removeEventListener('scroll', myHandler)
}

export { delay }
export { addScrollHandler, removeScrollHandler }
