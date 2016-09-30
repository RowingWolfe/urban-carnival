/*function chunkArrayInGroups(arr, size) {
    // Break it up.
    var newArr = [];
    for(var i = 0; i < arr.length; i+=size){
        newArr.push(arr.slice(i,i+size));
    }
    console.log(newArr);
    return newArr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);*/
//Great Success!
/*function slasher(arr, howMany) {
    // it doesn't always pay to be first
    console.log(arr);
    arr.splice(0,howMany); //This was too easy... I am confused.
    console.log(arr);
    return arr;
}

slasher([1, 2, 3], 2);*/
//GOT DAYUM!

//Convert to lower case
//use indexOf();
/*
function mutation(arr) {
    var firstWord = arr[0].toLowerCase();
    var secondWord = arr[1].toLowerCase().split('');
    var crossCheck = function(a, b) { return a && firstWord.indexOf(b) !== -1 };
    return secondWord.reduce(crossCheck, true);

}

mutation(["hello", "hey"]);
mutation(["hello", "Hello"])*/
//Struggled much

/*function bouncer(arr) {
    // Don't show a false ID to this bouncer.
    arr = arr.filter(Boolean);
    console.log(arr);
    return arr;
}

bouncer([7, "ate", "", false, 9]);
*/
//Some trouble


/*function destroyer(arr) {
    // Remove all the values
    //console.log(arguments.length);
    //var args = Array.prototype.slice.call(arguments, 1); //Too ugly.
    var args = Array.from(arguments);
    var dontKillUs = [];
    var potentialOpFor = args[0];

    for(var i =0; i<potentialOpFor.length; i++){
        if(args.indexOf(potentialOpFor[i]) == -1){
            dontKillUs.push(potentialOpFor[i]);
        }
    }
    console.log(dontKillUs);
    return dontKillUs;
    //Got frustrated, had to lighten it up. Excuse the inefficient var names.
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
*/
//Fuck this in particular. Never using fuzzy args if I can help it.

/*
function getIndexToIns(arr, num) {
    // Find my place in this sorted array.
    arr.push(num);
    arr = arr.sort(function compareNums(a,b){return a - b;});
    num = arr.indexOf(num);
    console.log(arr);
    return num;
}

getIndexToIns([40, 60], 50);
*/
//EZPZ


//Misread the instructions, kept returning the first divisor after 1.
//I stole it again, I am a filthy, horrid man.
//Though I believe the point is to have me thinking of algorithms to solve problems and I did... just solved the wrong problem. I do also understand how the code below works.
/*function smallestCommons(arr) {
    // Sort array from greater to lowest
    // This line of code was from Adam Doyle (http://github.com/Adoyle2014)
    arr.sort(function(a, b) {
        return b - a;
    });

    // Create new array and add all values from greater to smaller from the
    // original array.
    var newArr = [];
    for (var i = arr[0]; i >= arr[1]; i--) {
        newArr.push(i);
    }

    // Variables needed declared outside the loops.
    var quot = 0;
    var loop = 1;
    var n;

    // Run code while n is not the same as the array length.
    do{
        quot = newArr[0] * loop * newArr[1];
        for (n = 2; n < newArr.length; n++) {
            if (quot % newArr[n] !== 0) {
                break;
            }
        }

        loop++;
    }while (n !== newArr.length);

    return quot;
}

// test here
console.log(smallestCommons([1,5]));*/

/*function steamrollArray(arr) {
    // I'm a steamroller, baby
    var squish = [];
    var roller = function(arg) {
        if (!Array.isArray(arg)) {
            squish.push(arg);
        } else {
            for (var a in arg) {
                roller(arg[a]);
            }
        }
    };
    arr.forEach(roller);
    return squish;
}

steamrollArray([1, [2], [3, [[4]]]]);*/
/*
function binaryAgent(str) {
    binStr = str.split(' ');
    engStr = [];
    for(var i in binStr){
        engStr.push(String.fromCharCode(parseInt(binStr[i], 2)));
    }
    return engStr.join('');
}
*/
function addTogether(a,b) {
    if (typeof a ==='number' && typeof b === 'number') {
        return a + b;
    }
    else if (typeof a ==='number' && typeof b ==='undefined') {
        return function(b) {
            if (typeof b === 'object') {
                return undefined;
            } else {
                return a + b;
            }
        };
    }
}
addTogether(2, 3);