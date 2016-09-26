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

