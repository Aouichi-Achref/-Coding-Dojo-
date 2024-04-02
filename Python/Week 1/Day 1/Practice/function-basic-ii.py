
y=10
x =5
arr=[8,4,1,3,5]

def count_down(j):
    arr=[]
    for i in range (j,-1,-1):
        arr.append(i)
    print(arr)
count_down(x)

def print_and_return(j,k):
    print(j)
    return k
print_and_return(x,y)

def first_plus_length(array):
    f_p_l=array[0]+len(array)
    print(f_p_l)
    return f_p_l

first_plus_length(arr)


def values_greater_than_second(arr):
    newarr=[]
    count=0
    if len(arr)<2:
        return False
    else:
        for i in range(0,len(arr)):
            if arr[i]> arr[1]:
                newarr.append(arr[i])
                count+=1
        print(count)
    return newarr

values_greater_than_second(arr)


def this_length_that_value(j,k):
    newarr=[]
    for i in range(0,j):
        newarr.append(k)
    print(newarr)
    return newarr

this_length_that_value(x,y)