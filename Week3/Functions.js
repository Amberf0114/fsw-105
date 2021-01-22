var peopleWhoWantToSeeMadMaxFuryRoad = [ 
    {
        name: "Mike",
        age: 12,
        gender: "male"
    }, {
        name: "Madeline",
        age:80,
        gender: "female"
    },{
        name: "Sam",
        age: 4,
        gender: "female"
    }
]
console.log("part1")

for (var i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++) {
    if (peopleWhoWantToSeeMadMaxFuryRoad[i].age < 18) {
        console.log("not old enough");
    } else {
        console.log("old enough");
    }
}

console.log("part2")

for (var i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++) {
    
    if (peopleWhoWantToSeeMadMaxFuryRoad[i].age < 18) {
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is not old enough to see Mad Max");

    } else {
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough to see Mad Max");
    }
}
console.log("part3")

for (var i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++) {

    if (peopleWhoWantToSeeMadMaxFuryRoad[i].age < 18) {
        if (peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "female") {
            console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is not old enough to see Mad Max Fury Road, do not let her in.")
        }
        else if (peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "male") {
            console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is not old enough to see Mad Max Fury Road, do not let him in.")
        }
    } else {
        if (peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "female") {
            console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough to see Mad Max Fury Road, let her in.")
        }
        else if (peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "male") {
            console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough to see Mad Max Fury Road, let him in.")
        }
    }
}

console.log("part4")

for(var i = 0; i <= 100; i++) {
    (i%2 == 0) ?  console.log("even"): console.log("odd")
}