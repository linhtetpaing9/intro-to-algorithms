var numbers = Array.from( { length: 300 } , ( index, value ) => value + 1 );
 
var randomNumber = Math.floor( Math.random() * numbers.length );

(function search(query, numbers){
	let result = numbers.find(function(item) {
		return item == query; 
	});
	determineResult(result);
})(randomNumber , numbers);


function determineResult(result){
	if( typeof result == 'undefined'){
		console.log(`Search Result Not Found => ${result}`);
	}else {
		console.log(`Search Result Found => ${result}`);
	}
}
