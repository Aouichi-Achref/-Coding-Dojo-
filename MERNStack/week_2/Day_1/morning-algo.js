const arr1=[29,10,1,37,14]
const result1=[]

const arr2=[3,5,2,1,0]
const result2=[]

const arr3=[3,0]
const result3=[]

const arr5=[0]
const result=[]

const arr6=[]
const result6=[]

const arr7=[1,2,3,4,5]
const result7=[]

const arr8=[5,4,3,2,1]
const result8=[]

const arr9=[5,4,0,2,1]
const result9=[]

function insertionSort(arr){
    console.log(`inserted ARR : ${arr}\n`)
    for(let i=1;i<=arr.length;i++){
        for(let j=i-1;j>=0;j--){
            temp=arr[i]
            if(temp<arr[j]){
                arr[j+1]=arr[j]
                if(j===0){
                    arr[j]=temp
                }
            }else{
                arr[]
            }
        }
    }
    console.log(`sorted ARRAY: ${arr}\n`)
    return arr
}

insertionSort(arr1)
console.log("****************")

insertionSort(arr2)
console.log("****************")

insertionSort(arr3)
console.log("****************")

insertionSort(arr5)
console.log("****************")

insertionSort(arr6)
console.log("****************")

insertionSort(arr7)
console.log("****************")

insertionSort(arr8)
console.log("****************")

insertionSort(arr9)
console.log("****************")
