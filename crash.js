function crash() {
	if (confirm('This will crash your browser!')) {
	// Open Tabs
	while (true){window.open('https://example.org')}
	console.log('Starting Script...');
} else {
	//Do nothing
	alert('Script Canceled!');
	window.location.href = 'index.html';
	console.log('User Canceled...');
	console.log('Nothing will happen');
}
}
