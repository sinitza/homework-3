/**
 * Created by oksanka on 09.11.16.
 */

function asd(element, index, array) {
    return element * 2;
}

function asd1(element, index, array) {
    console.log(element);
}

Array.prototype.myForEach = function (callback) {
    for(var i in this) {
        callback(this[i]);
    }
}

Array.prototype.myMap = function (callback) {
    var newArray = [];
    for(var i = 0; i < this.length; i++) {
        newArray[newArray.length] = (callback(this[i]));
    }
    return newArray;
}


Array.prototype.mySort = function (compareFunction) {
    var i,
        j,
        k,
        n = this.length;
    for(j = 0; j < n; j++) {
        for(i = 0; i < n - 1; i++){
            if (compareFunction(a, b) > 0) {
                if (this[i] < this[i + 1]) {
                    k = this[i];
                    this[i] = this[i + 1];
                    this[i + 1] = k;
                }
            }
            if (compareFunction(a, b) < 0) {
                if (this[i] > this[i + 1]) {
                    k = this[i+1];
                    this[i+1] = this[i];
                    this[i] = k;
                }
            }
            else {
                if (this[i] < this[i + 1]) {
                    k = this[i];
                    this[i] = this[i + 1];
                    this[i + 1] = k;
                }
            }
        }
    }

}

var arr = [1, 2, 3, ,4];
console.log(arr.myForEach(asd1));
console.log(arr.myMap(asd));
var array = [1, 2, 4, 5, 2, 134, 205, 2];
console.log(array.sort());