// var string = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam quia, rem animi minus vitae labore quos velit blanditiis reiciendis ratione accusamus, facere veritatis, aliquid, inventore accusantium cum facilis perferendis voluptate. ipsum dolor sit amet, consectetur adipisicing elit. Ducimus vero eligendi quo sed sunt autem laborum hic neque eos? Impedit saepe minima optio eaque veniam sed ea suscipit, id consectetur? ipsum dolor sit amet, consectetur adipisicing elit. Praesentium saepe error, harum, nesciunt fugit inventore minima laudantium molestias veritatis et repellat natus dignissimos sapiente eos illum illo obcaecati maxime magnam. ipsum dolor sit amet, consectetur adipisicing elit. Quos voluptatem tenetur molestias labore velit cupiditate voluptas quo pariatur sunt quisquam, ipsum vero adipisci, laboriosam incidunt ab quidem neque officia assumenda.";
// var ipsum = "ipsum";
// var	array = [];
// var firstChar = string.indexOf(ipsum);
// for(var i = firstChar; i < string.length; i++){
// var index = string.indexOf(ipsum, i);
// if (index == -1){break}
// array.push(index);
// i = index
// }
// console.log(array);


// function helloWorld(){
// 	alert("Hello,World");
// }
// helloWorld();//Выведет на экоан Hello,World
// helloWorld();//ещё раз выведет на жкран Hello,World



// function helloWorld(){
// 	var hello = "My friend";
// 	console.log(hello);
// }
// helloWorld()// !!!!!! без этого не выведется на екран
// console.log(hello);



// var string = "Some string";
// function myFunc(){
	/*var string = "String #2" 
console.log(string); --------------test*/
// }
// myFunc();
// console.log(string);


// function myFunc (argument//-без раздницы как назвать){
//  	console.log(argument);
// }
// myFunc(true);


check();
function check(){
	var result = prompt("Введите число","");
	if (result.indexOf(",")> -1){
		alert("Используйте вместо запятой - точку")
		check();
}
else{
	kv(result);
}
function kv(number){
	console.log(number*number)
	}
}
