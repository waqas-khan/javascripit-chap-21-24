
// program 1 
// var firstName = prompt("Enter your first name:");
// var lastName = prompt("Enter your last name:");
// var fullName = firstName + lastName;
// alert("Welcome" + fullName);



// program 2
// var mobile = prompt("Enter your favourite mobile model:");
// var length = mobile.length;
// document.write("Favourite mobile is " + mobile  + "<br>");
// document.write("length of string" + length);



// program 3
// var country = "pakistan";
// document.write(country.indexOf("n") );


// prgram 4
// var word = "hello world";
// document.write("String: " + word + "<br>");
// document.write("last index of 'l': " + word.lastIndexOf("l"));


// program 5
// var word = "pakistani";
// document.write("string: " + word + "<br/>");
// document.write("word at 3rd index: " + word.charAt(3));


// program 6
// var firstName = prompt("Enter your first name:");
// var lastName = prompt("Enter your last name:");
// var fullName = firstName.concat(lastName);
// alert("Welcome" + fullName);


// program 7
// var city = "Hyderabad";
// document.write("city: " + city +"<br>");
// document.write("After replacemet: " + city.replace("Hyder","Islam"))


// program 8
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// document.write("message: " + message + "<br>");
// document.write("After replacement: " + message.replace("and", "&"));


// program 9
// var num = 472;
// document.write("value: " + num + "<br/>");
// document.write("Type: " + typeof(num)+ "<br/>");
// var num = num.toString();
// document.write("value: " + num + "<br/>" )
// document.write("Type: " + typeof(num)+ "<br/>");


// program 10
// var url = prompt("Enter url:");
// document.write("url: " + url + "<br>");
// document.write("Domain: " + url.slice(3, url.length));


// program 11
// var input = prompt("Enter anything:");
// document.write("User input: " + input + "<br>");
// document.write("Upper case: " + input.toUpperCase() + "<br>");



// program 12
// var input = prompt("Enter anything:");
// document.write("User input: " + input + "<br>");
// document.write("Upper case: " + input.toLowerCase() + "<br>");

// program 13
// var input = prompt("Enter anything:");
// document.write("User input: " + input + "<br>");
// document.write("Upper case: " + input.charAt(0).toUpperCase()  + input.slice(1,input.length).toLowerCase() + "<br>");


// program 14
// var num = 35.36;
// document.write("Number: " + num + "<br>");
// document.write( "Result: " + num.toString().slice(0,2) + num.toString().slice(3,5));


// program 15
// var a = 3;
// var b = 3;
// var x = a.toString() + b.toString();
// document.write("a is " + a + ".<br>" +  "b is " + b + ".<br>" + "a + b is " + x )


// program 16
// var a = 3;
// var b = 3;
// var y = a.toString() - b.toString();
// document.write("a is " + a + ".<br>" +  "b is " + b + ".<br>" + "a + b is " + y );


// program 17
// var name = prompt("Enter user name");
// for(i=0;i<name.length; i++){
// var x = name.charCodeAt(i);
//  if( x == 33 || x == 44 ||x == 46 || x == 64){
//         alert("please enter a valid user name");
//  }
// }


// program 18
// var a = ["cake", "apple pie", "cookie", "chips", "patties"];
// var flag = false;
// var search = prompt("Welcome to bakkery. What do you want to order:");
// search1 = search.toLowerCase();
// for(i=0;i<a.length; i++){
//     if(a[i] == search1){
// alert(search  + " is available at index" + a[i].indexOf());
//         flag = true;
//         break;
//     }
// }
// if(flag == false){
//     alert(" We are sorry " + search + " is not available at our bakery");
// }


// program 19
// var input1 = prompt();
// var input2 = prompt();
// if(input1.length == input2.length){
//     document.write(input1 + " is equal to "+ input2)
// }
// if(input1.length < input2.length){
//     document.write(input1 + " is smaller than "+ input2)
// }
// if(input1.length > input2.length){
//     document.write(input1 + " is greater than "+ input2)
// }


// program 20
// var password = prompt("Enter password");
// document.write("Entered password: " + password + "<br>");
// if(password.length>6){
//     document.write("Password can not more than 6 words <br/>");
// }
// for(i=0;i<password.length; i++){
//     if( password.charCodeAt(i) >= 32 && password.charCodeAt(i) <= 47 || password.charCodeAt(i) >= 58 && password.charCodeAt(i) <= 64 ){
//     document.write("Enter a valid password <br/>");
//     break;
//     }
// }
// if(password.charCodeAt(0) >= 048 && password.charCodeAt(0) <= 57){
//     document.write("password can't begin with Number");
//     console.log(password.charCodeAt(0));
// }


// program 21
// var university = "University of Karachi";
// university = university.split("");
// document.write(university.join("<br>"));


// program 22
// var userInput = prompt("Enter something:");
// document.write("User input: " + userInput + "<br>");
// document.write( "Last character of input " +userInput[userInput.length-1]);


// program 23
//         var text = "The quick brown fox jumps over the lazy the the the dog";
//         var startIndex = 0;
//         var counter = 0;
//         var search = 'the'

//         for (var a = 0; a < text.length; a++) {
//             console.log(a)
//             var newIndex = text.indexOf(search, startIndex);
//             if (newIndex !== -1) {
//                 counter++;
//                 startIndex = newIndex + 1;
//             } else {
//                 break;
//             }
//         }
// document.write("Text: " + text + "<br>");
// document.write("There are " + counter + " occurance(s) of word 'the'");

// program 24
// var str = prompt("Enter Any name");
// var vovels = "aeiou";
// var cons = "bcdfghjklmnpqrstvwxyz"
// Counter1 = 0;
// Counter2 = 0;
// for(i=0; i < str.length; i++){
//     for(j=0; j < vovels.length; j++){
//         if(str[i] === vovels[j]){
//             Counter1++;
//         }
//     }
// }
// for(i=0; i < str.length; i++){
//     for(j=0; j < cons.length; j++){
//         if(str[i] === cons[j]){
//             Counter2++;
//         }
//     }
// }

// document.write( "Number of vovels: " + Counter1 + "<br>");
// document.write("Number of consonents: " + Counter2);