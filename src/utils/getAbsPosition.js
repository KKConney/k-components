export function getAbsLeft(obj) {
	var absLeft = obj.offsetLeft;
	while (obj.offsetParent != null) {
		obj = obj.offsetParent;
		absLeft += obj.offsetLeft;
	}
	return absLeft;
}

export function getAbsTop(obj) {
	var absTop = obj.offsetTop;
	while (obj.offsetParent != null) {
		obj = obj.offsetParent;
		absTop += obj.offsetTop;
	}
	return absTop;
}
