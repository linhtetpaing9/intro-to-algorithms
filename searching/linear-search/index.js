var numbers = Array.from( { length: 300 } , ( index, value ) => value + 1 );

var query = 150;

(function search(query, numbers){
	let result = numbers.find(function(item) {
		return item == query; 
	});
	determineResult(result);
})(query , numbers);

function determineResult(result){
	if( typeof result == 'undefined'){
		console.log(`Search Result Not Found => ${result}`);
	}else {
		console.log(`Search Result Found => ${result}`);
	}
}
