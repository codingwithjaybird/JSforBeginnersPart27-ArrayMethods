// ARRAY METHODS:

// toString()

let courses = ["html", "css", "javascript", "php", "react"];
console.log(courses);
console.log(courses.toString());


// join()
console.log(courses.join("+++"));

// pop()
courses.pop();
console.log(courses);


// push()
courses.push("angular");
console.log(courses);


// concat()
let list1 = ["pens", "pencils"];
let list2 = ["keyboard", "mouse"];
let list3 = ["pc", "monitor"];
let finalList = list1.concat(list2, list3);
console.log(finalList);

console.log(list1.concat("markers"));


// splice()
let num = ["one", "two", "three", "four"];
let splicedNum = num.splice(2, 1, "five");
console.log(splicedNum);
console.log(num);

// slice()
let names = ["Adam", "Max", "Beth", "Claire"];
let newNames = names.slice(2);
console.log(newNames);
console.log(names); 