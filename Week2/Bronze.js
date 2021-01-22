var person = {
    name: "Bobby",
    age: 18
}
if (person.age >= 18) {
    console.log (person.name + " is allowed to go to the movies.")
} else if (person.age < 18) {
    console.log(person.name + " is not allowed to go to the movies.")
}

if (person.name[0] == "B") {
    console.log (person.name + " is allowed to go to the movies.")
} else if (person.name[0] != "B") {
    console.log(person.name + " is not allowed to go to the movies.")
}

if (person.age > 18 && person.name[0] == "B") {
    console.log (person.name + " is allowed to go to the movies.")
} else if (person.age <= 18 || person.name[0] != "B") {
    console.log(person.name + " is not allowed to go to the movies.")
}