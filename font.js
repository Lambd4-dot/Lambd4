var junction_font = new FontFace('8bit-wonder', 'url(./8bit-wonder/8-BIT WONDER.TTF)');

junction_font.load().then(function(loaded_face) {
	document.fonts.add(loaded_face);
	document.body.style.fontFamily = '"8bit-wonder", Arial';
	// loaded_face holds the loaded FontFace
}).catch(function(error) {
	// error occurred
});


