

export function main() {
    const k = 16
    const arr = [2, 5, 3, 6, 7, 0, 0, 23, 11]
    
    
    function search(arr, x) {
        let newArr = [];
        for (let i = 0; i <= arr.length; i++) {
             let j=i
             let sum = 0
             let innerArr=[]
            while (x <= sum &&  j<=arr.length) {
              if(sum+arr[j]<=x){
                sum += arr[j]
                innerArr.push(arr[j])
                j++
                if (sum == x){
                    newArr.push([...innerArr])
                    newArr.push(slice.Arr(i,j))
                }else{
                  break
                }
              }
            }
        }
        console.log(newArr)
        return newArr
    }
    
    search(arr,k)
    }
    
    