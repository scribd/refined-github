import './monospace-textareas.css';
import features from '.';

function init(): void {
	document.body.classList.add('rgh-monospace-textareas');
}

void features.add({
	id: __filebasename,
	description: 'Use a monospace font for all textareas.',
	screenshot: false
}, {
	waitForDomReady: false,
	repeatOnAjax: false,
	init
});
