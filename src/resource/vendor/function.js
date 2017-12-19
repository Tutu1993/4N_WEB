function delay(ms) {
	return new Promise((resolve, reject) => {
		setTimeout(resolve, ms)
	});
}

function regScroll(myHandler) {
	if (window.onscroll === null) {
		window.onscroll = myHandler
	} else if (typeof window.onscroll === 'function') {
		var oldHandler = window.onscroll;
		window.onscroll = function () {
			myHandler();
			oldHandler();
		}
	}
}

function removeScrollHandler(){
  window.onscroll=''
}

export { delay }
export { regScroll, removeScrollHandler }
