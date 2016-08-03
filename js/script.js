function write(msg) {
    //window.alert(msg);
document.getElementById("message").innerHTML += msg + "<br>";

}

//variable and commenting parts


write("hero");
var count = "10";
var cp = parseInt(count);
write(typeof cp + " (size of is) " + count);


function add(fst,secnd){
	// use while it is gloabal >> a=fst;
	var a =fst;
	return fst+secnd;
}

write("100 + 20 : " + add(100,20));
//write("a: "+ a);
write("50 + 20 : " + add(50,20));
//write("a: "+ a); 
if(!window.a){
	write("undefined");
}

/* Null  and undefined */

var nVal=null;
var check=true;
if(!nVal){
	write("null evaluate to false");
}
var hVal=1;
if(hVal){
	write("hVal evaluate to true");
}
if(check==1){
	write("check takes 1 as true");

}
if(check===1){
	write("check takes 1 === as true");
}



/*object*/
//object Literal
var anObj={
	firstValue:1,
	secondValue:"secondValue"
};
write(anObj.toString());

//nested object

var newObj= {
	address:{
		collect:10,
		phrase:"Car"
	}
};
write("Nested collection: "+ newObj.address.phrase+ " -- "+newObj.address.collect);


/* Function */

var squarFunc=function(x){
	return x*x;
}

function square(x){
	return x*x;
}

//Argument function 

function argumentFunction(){
	var sum=0;
	for(var i=0;i<arguments.length;i++){
      //alert(arguments[i]);
		sum+=arguments[i];
	}
	return sum;

}
try{
write("<strong>Argument function</strong>");
write(argumentFunction(10));
write(argumentFunction(10,20));
write(argumentFunction(10,20,30));
write(argumentFunction(10,20,30,40));
}
catch(err){
	alert(err);
}

//closure
var a="hello";
function outer(msg) {
  var b = msg;  
  function middle() {
    var c = "c";    
    // the function 'inner' can access all variables in the outer scopes
    function inner() {
      write (a + b + c);
    }
    inner();
  }
  middle();
}
outer("hi");


/*Iteration Process Exclusive*/
var obj={
	name:"Khairul Omi",
	age:10
};
write("<strong>Iteration</strong>");

for(var i in obj){
	write(obj[i]);
}

/*Error Handling*/


write("<strong>Error Handling</strong>");
try{
	throw{
		name:"Helping Hand ! Error",
		message:"Error occured while processing Loop"
	};
var zsfsadf
}
catch(e){
	write(e.name+"---"+e.message);
}
finally{
	write("concentrate on error");
}

/*string method*/
write("<strong>string handling method</strong>");
var mainstring="shibly i*s my name";
write(mainstring);
write("charAt in 3 index chart +" +mainstring.charAt(2));
write("indexOf in b " +mainstring.indexOf("b"));
write("search of * using regex "+mainstring.search(/\*/));

//slice(start, end)
//slice(firstIndex,endIndex)
write("<strong>Slice in string</strong>");
var words=mainstring.slice(2, 6);
for(var i=0;i<words.length;i++){
	write(words[i]);
}

write("<strong>Split for white space in string</strong>");
words=mainstring.split(" ");
for(var i=0;i<words.length;i++){
	write(words[i]);
}
//splice(firstIndex,count)
var ass=[1,2,3,47,5,7,80];
try{
	ass.splice(2,3);
write("collection is + "+ ass);
}
catch(err){
	alert(err);
}


//script of Date
write("<strong>Date Print</strong>");
var date=new Date(1992,3,8);
write(date);
var iArray=[1,2,3,4,5,6]

write("foreach occured");



/*  advance Javascript training	*/

//Math

write("<h1>Math Program</h1>"+Math.acos(-1));
