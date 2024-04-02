num1 = 42                  #- variable declaration  - Numbers
num2 = 2.3                 #- variable declaration  - Numbers
boolean = True             #- variable declaration  - Boolean
string = 'Hello World'     #- variable declaration  - Strings
pizza_toppings = ['Pepperoni', 'Sausage', 'Jalepenos', 'Cheese', 'Olives']  #- variable declaration   - List
person = {'name': 'John', 'location': 'Salt Lake', 'age': 37, 'is_balding': False}   #- variable declaration   - Dictionary
fruit = ('blueberry', 'strawberry', 'banana')   #- variable declaration - Tuples
print(type(fruit))               #- log statement  - access value
print(pizza_toppings[1])         #- log statement  - access value
pizza_toppings.append('Mushrooms')  #  add value
print(person['name'])            #- log statement
person['name'] = 'George'        # - change value
person['eye_color'] = 'blue'     #  add value
print(fruit[2])                  #- log statement

if num1 > 45:                    #- if
    print("It's greater")        #- log statement
else:                            #- else
    print("It's lower")          #- log statement

if len(string) < 5:              ##- if
    print("It's a short word!")  #- log statement
elif len(string) > 15:           #- else if
    print("It's a long word!")   #- log statement
else:                            #- else
    print("Just right!")         #- log statement

for x in range(5):               #- for loop
    print(x)                     #- log statement
for x in range(2,5):             #- for loop
    print(x)                     #- log statement
for x in range(2,10,3):          #- for loop
    print(x)                     #- log statement
x = 0                            #- change value
while(x < 5):                    #- for loop
    print(x)                     #- log statement
    x += 1                       #- change value

pizza_toppings.pop()             #- delete value
pizza_toppings.pop(1)            #- delete value

print(person)                    #- log statement
person.pop('eye_color')          # - delete value
print(person)                    #- log statement

for topping in pizza_toppings:   #- for loop
    if topping == 'Pepperoni':   #- if
        continue
    print('After 1st if statement')  #- log statement
    if topping == 'Olives':          #- if
        break                        #

def print_hello_ten_times():        #
    for num in range(10):           #- for loop
        print('Hello')              #- log statement

print_hello_ten_times()

def print_hello_x_times(x):
    for num in range(x):           #- for loop
        print('Hello')             #- log statement

print_hello_x_times(4)

def print_hello_x_or_ten_times(x = 10):
    for num in range(x):          #- for loop x-->- stop
        print('Hello')            #- log statement

print_hello_x_or_ten_times()      
print_hello_x_or_ten_times(4)     


"""
Bonus section
"""

# print(num3)
# num3 = 72
# fruit[0] = 'cranberry'
# print(person['favorite_team'])
# print(pizza_toppings[7])
#   print(boolean)
# fruit.append('raspberry')
# fruit.pop(1)