function greeter(person: string): string {
  return "Hello, "+ person;
}

let user = "Jane Doe";

console.log(greeter(user)); //This will work correctly

//Alternatively, you can modify the function to accept an array
function greeterArray(person: string[]): string {
  return "Hello, "+ person.join(" ");
}

let userArray = ["Jane", "Doe"];

console.log(greeterArray(userArray));//This will also work correctly