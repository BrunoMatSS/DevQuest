Array.from(document.querySelectorAll('.container form .inputText')).forEach((element,index) => {
	element.oninvalid = (evt) => {

		evt.preventDefault();

		Array.from(document.querySelectorAll('.required'))[index].classList.add('filled');

		element.classList.add('invalid');
	};

	element.addEventListener('focus', () => {
		Array.from(document.querySelectorAll('.required'))[index].classList.remove('filled')
	});
	
	element.addEventListener('focusout', () => {
		if (element.checkValidity() == false) {
			element.classList.add('invalid');
            Array.from(document.querySelectorAll('.required'))[index].classList.add('filled');
		}
	});
});