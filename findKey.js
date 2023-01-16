const findKey = function(object, callback) {
    for (const key in object) {
    if (callback(object[key])) {
    return key;
}
}
return undefined;
}
const obj1 = { 
    "Blue Hill": { stars: 1 },
    "Akaleri": { stars: 3 },
    "noma": { stars: 2 },
    "elBulli": { stars: 3 },
    "Ora": { stars: 2 },
    "Akelarre": { stars: 3 }
};
    const obj2 = {
    "First": { stars: 1 },
    "Second": { stars: 3 },
    "Third": { stars: 2 },
    "Fourth": { stars: 3 },
    "Fifth": { stars: 2 },
    "Sixth": { stars: 3 }
};
const obj3 = {
    "First": { stars: 1 },
    "Second": { stars: 3 },
    "Third": { stars: 2 },
    "Fourth": { stars: 3 },
    "Fifth": { stars: 2 },
    "Sixth": { stars: 4 }
};
const assertEqual = function(actual, expected) {
     if (actual === expected) {
        console.log(✅✅✅ Assertion Passed: ${actual} === ${expected});
    } else {
         console.log(🛑🛑🛑 Assertion Failed: ${actual} !== ${expected});
    }
};
 assertEqual(findKey(obj1, x => x.stars === 2), "noma");
  assertEqual(findKey(obj1, x => x.stars === 4), undefined);
  assertEqual(findKey(obj2, x => x.stars === 3), "Second");
  assertEqual(findKey(obj3, x => x.stars === 4), "Sixth");