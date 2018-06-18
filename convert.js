var mammoth = require('mammoth');


mammoth.convertToHtml({path: "TheSagaofRedHorn.docx"})
	.then(function(result){
		var html = result.value; // The generated HTML
		console.log(html);
		var messages = result.messages; // Any messages, such as warnings
	})
	.done();
