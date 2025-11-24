document.addEventListener('DOMContentLoaded', function () {
	const form = document.querySelector('form[action="#"]');
	const emailInput = document.getElementById('email');
	const messageDiv = document.querySelector('.message');

	if (!form || !emailInput || !messageDiv) return;

	form.addEventListener('submit', function (e) {
		e.preventDefault();
		const email = emailInput.value.trim();

		if (!email) {
			messageDiv.textContent = 'Please enter a valid email address.';
			return;
		}

		messageDiv.textContent = `Thank you! Your email address ${email} has been added to our mailing list!`;
		emailInput.value = '';
	});
});