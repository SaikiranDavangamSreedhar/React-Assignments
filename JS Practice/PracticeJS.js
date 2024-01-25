// Move all negative numbers to beginning and positive to end with constant extra space


function rearrange(arr,n)
{
    let j = 0;

    for(let i=0;i<n;i++){
        if(arr[i] < 0 ){
            if(i!=j){
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
            j++
        }
    }
};

function printArray(arr,n){
    for(let i = 0;i<n;i++){
        console.log(arr[i] + " ")
    }
}

// let arr = [ -1, 2, -3, 4, 5, 6, -7, 8, 9 ]; 
// let n = arr.length; 

// rearrange(arr,n)

// Find a peak element which is not smaller than its neighbours

function findPeak(arr,n){
    if(n==1) return 0;

    if(arr[0] > arr[1]) return 0;

    if(arr[n-1] > arr[n-1]) return n-1;

    for(let i=0;i<n-1;i++){
        if(arr[i] >= arr[i-1] && arr[i] >= arr[i+1]) 
        return i;
    }
};


// var arr = [1,3,20,4,1,0];

// var n = arr.length

// console.log("index of peak point is " + findPeak(arr,n));

// Write a program to reverse an array or string

function reverseArray(arr){
    start = 0;
    end = arr.length - 1;

    while (start<end){
        var temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;

    }

    return arr;
}

// var arr= [1, 2, 3, 4, 5, 6]; 

// console.log(reverseArray(arr))

// JS program to sort an array in ascending order


function ascendingSort(arr){

    for(i=0;i<arr.length;i++){
        if(arr[i] > arr[i+1]){
            let s = arr[i];
            arr[i] = arr[i+1];
            arr[i+1] = s;

            

        }else{
        i++}
    }

    return arr;

};

// arr=[6,8,4,3,7,2,8];
// ascendingSort(arr);


// K’th Smallest/Largest Element in Unsorted Array

var Arr = [1, 7, 2, 8, 3, 4, 5, 0, 9];
var k = 3;

function kthSmallest(Arr,k){

for(var i=1; i<Arr.length;i++)
    for(var j=0;j<i;j++)
            if(Arr[i] < Arr[j]){
                var x = Arr[i];
                Arr[i] = Arr[j];
                Arr[j] = x;
            }
        return Arr[k-1]  
        }
console.log(kthSmallest(Arr,k)) 

// Count number of occurrences (or frequency) in a sorted array

var arr=[1, 2, 2, 2, 2, 3, 4, 7 ,8 ,8]
let n = arr.length
x = 2; 

function countOccurrences(arr,n,x){
    let res = 0;
    for(let i=0;i<arr.length;i++){
        if(x === arr[i]){
            res++;
        }
    }
    return res;
}

console.log(countOccurrences(arr,n,x))


// Find Subarray with given sum | Set 1 (Non-negative Numbers)

function subArraySum(arr,sum){
    for(let i = 0;i<arr.length;i++){
        let currentSum = arr[i]
        
        if(currentSum == sum){
            console.log("Sum found at indexes" + i)
        }
        else {
            for(let j=i+1;j<n;j++){
                currentSum += arr[j];
                
                if(currentSum == sum){
                    console.log("Sum found between indexes" + i + "and" + j);
                }
            }
        }
    }
    console.log("No subarray found")
}
