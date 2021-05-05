let insert = document.getElementById('insert');

window.addEventListener('keydown', (e) => {
	console.log(e);
	insert.innerHTML = `
		<div class="key">
			${e.key === ' ' ? 'Space' : e.key}
			<small>Pressed keyboard key</small>
		</div>
		<div class="key">
			${e.keyCode}
			<small>Keycode number</small>
		</div>
	`
});
