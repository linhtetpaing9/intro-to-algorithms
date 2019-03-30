var numbers = Array.from( { length: 300 } , ( index, value ) => value + 1 );
 
var query = 300;

(function search(query, numbers){
	let firstIndex = 0;
	let middleIndex = considerMiddleIndex(numbers);
	let lastIndex = considerLastIndex(numbers);

	if( query == numbers[middleIndex] ){
		console.log(`Search Result Found => ${numbers[middleIndex]}`);
	}
	else if( query == numbers[firstIndex]){
		console.log(`Search Result Found => ${numbers[firstIndex]}`);
	}
	else if( query == numbers[lastIndex]){
		console.log(`Search Result Found => ${numbers[lastIndex]}`);
	}
	else if( query < numbers[middleIndex] ){
		search( query , numbers.slice( firstIndex, middleIndex ) );

	}else if( query > numbers[middleIndex] ){
		search( query , numbers.slice( middleIndex, lastIndex ) );
	}
	else{
		console.log('Search Query is not exist in Array');
	}
}(query , numbers));

function considerMiddleIndex(numbers){
	if( numbers.length % 2 == 0 ){
		return ( numbers.length / 2 ) - 1;
	}else{
		return ( ( numbers.length + 1 ) / 2 ) - 1;
	}
}

function considerLastIndex(numbers){
	return numbers.length - 1;
}

