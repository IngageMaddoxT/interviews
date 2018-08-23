function mergeStrings(a, b) {

    var str1 = a.split(""),
        str2 = b.split(""),
        mergedString = "";

    for (var i = 0; i < str1.length || i < str2.length; i++) {
        if (i < a.length)
            mergedString += a[i];
        if (i < b.length)
            mergedString += b[i];
    }

    return mergedString;
}

function firstNonRepeatingLetter(str) {
    var ignoreCase = str.toLowerCase();

    for (var i = 0; i < str.length; i++) {
        var c = ignoreCase.charAt(i);

        if (ignoreCase.indexOf(c) == i && ignoreCase.indexOf(c, i + 1) == -1) {
            return str.charAt(i);
        } //was working on the else if for all repeated chars...maybe next time
    }
}
