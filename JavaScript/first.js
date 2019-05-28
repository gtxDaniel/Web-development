var firstName = prompt('What is your first name?');
var lastName = prompt('What is your last name?');
var age = prompt('What is your last age?');

console.log('Your full name is ' + firstName + ' ' + lastName);
console.log('You are ' + age + ' years old'); 


for (var i = -10; i < 19; i++) {
	console.log(i)
}

var col = [12,2,3]
col.forEach(function(ele){
	console.log(ele)
});

// function isUnion(arr){
// 	var first = ar[0];
// 	arr.forEach(function(ele){
// 		if (ele !== first){
// 			return false
// 		}
// 	});
// 	return true;
// }

function sumArr(arr){
	var total = 0;
	arr.forEach(function(ele){
		total += ele;
	});
	return total;
}

"\""