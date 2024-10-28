# print("hello") print statement
# var1 = "Bob"
# print(var1) creates variable and prints it
# a = 10
# print(type(a)) 
# b = 13.4
# print(type(b))
# c = True
# print(type(c))
# d = "Hello"
# print(type(d))
# creation of all 4 data types and then prints the types
# e = 4 + 8j # j is the imaginary number in python, would be i in mathematics
# print(type(e)) results in complex type

# a = 10
# b = 20
# print(a+b)
# print(a-b)
# print(a*b)
# print(a/b)
# ^ basic arithmetic operations ^
# print(a<b)
# print(a>b)
# print(a==b) #double equals checks if two values are equal, single gives a variable its value
# print(a!=b) 
# ^ relational operations ^
# a = True
# b = False
# print(a&b)
# print(a&a)
# print(b&b)
# print(a|b)
# print(a|a)
# print(b|b)
# ^ logical operations ^

# a1 = "Hello there"
# print(a1[0]) #prints first character
# print(a1[-1]) #prints last character
# print(a1[6:11]) #prints set of characters from beginning:last, last is not inclusive
# print(len(a1)) #length of respective string
# print(a1.upper()) #makes whole string uppercase
# print(a1.lower()) #makes whole string lowercase
# print(a1.title()) #capitalizes every first letter
# ^ basic string commands ^

# tup1 = (1, "a", True, "b", 23.0) # <-- tuple
# print(tup1)
# print(tup1[0])
# print(tup1[-1]) # extraction is same as that of a string
# print(tup1[1:4])
# tup1[0] = 100 # error: tuples are immutable, values cannot be changed or added
# ^tuples^

# l1 = [1, "a", True, 2, "b", False]
# print(l1)
# print(l1[0])
# print(l1[2:5])
# l1[0] = 100 # sets first value to 100
# print(l1)
# l1.append("s") #adds to list
# print(l1)
# l1.append([1,2,3,4,5]) #adds another list within list
# print(l1)
# l1.pop()
# print(l1) #removes last element which is the
# whole of the second list in this case
# l1.pop()
# print(l1)
# ^lists^

# d1 = {"mango":45, "apple":30, "orange":77, "guava": 125}
# print(d1)
# print(d1.keys()) #accesses keys
# print(d1.values()) #accesses values
# d1["mango"] = 100 #changes the value
# print(d1)
# ^dictionaries^

# s1 = {1, "a", 3.78}
# print(s1)
# s1 = {1, 1, "a", 3.78} #even though 1 appears twice, it is only printed once
# s1.add("hello world")
# print(s1)
# s1.update(["aarav", 123, 3+6j]) #adds multiple elements, order is random
# print(s1)
# ^sets^

#a=10
#b=20
#if (b>a):
#    print("b is greater than a") #true, so statement executes
#if (a>b):
#    print("a is greater than b") #false, does not execute
#if(a>b):
#    print("a is greater than b")
#else:
#    print("b is greater than a")

#a=10
#b=20
#c=30
#if(a>b) & (a>c):
#    print("a is the greatest")
#elif(b>a) & (b>c):
#    print("b is the greatest")
#else: 
#    print("c is the greatest")

#tup1=("a", "b", "c")
#if "a" in tup1:
#    print("a is present")

#l1 = [10, 20, 30, 40, 50]
#if l1[0] == 10:
#    l1[0]=100
#    print(l1)

#d1={"mango":10,"apple":20,"banana":30}
#if d1["mango"]==10:
#    d1["mango"]=d1["mango"]+100
#print(d1)

#import numpy as np
#n1=np.array([10,20,30,40,50])
#print(n1)
#print(type(n1)) #tells us this is an numpy.ndarray
#n2=np.array([[10,20,30],[30,20,10]])
#print(n2)
#n3 = np.zeros((1,2))
#print(n3)
#n4=np.zeros((6,6))
#print(n4)
#n5 = np.full((3,3),7)
#print(n5)
#n6 = np.arange(1,11) #1-10, not inclusive
#print(n6) 
#n7 = np.arange(100,300,50) 
#print(n7)
#n8 = np.random.randint(100,200,10) # min, max, amt of values
#print(n8)
#n9 = np.array([[1,2,3,4],[5,6,7,8]])
#print(n9.shape) #prints shape of array
#n9.shape=(4,2) #changes the shape of the array
#print(n9)

#a = np.array([10,20])
#b = np.array([30,40])
#print(np.sum([a,b])) #adds every int in the arrays included
#print(np.sum([a,b],axis=0)) #adds the first values with each other
#print(np.sum([a,b],axis=1)) #adds the ints in the arrays

#c = np.array([10,20,30])
#d = np.array([30,40,50])
#print(np.vstack([c,d]))
#print(np.hstack([c,d]))
#print(np.column_stack([c,d]))

#import pandas as pd
#s1 = pd.Series([10,20,30,40,50],index=['a','b','c','d','e']) #gives each value its own respective key
#print(s1)
#d1 = {'k1':10,'k2':20,'k3':30} # defines values and keys as if it is a dictionary
#print(pd.Series(d1))

 #student = {"Student_Name":['Bob','Sam','Jeff','John'], "Student_Grades":[87,70,93,67]}
 #print(pd.DataFrame(student)) #uses data from dictionary to create dataframe
# csv_url = 'https://archive.ics.uci.edu/ml/machine-learning-databases/iris/iris.data'
# col_names = ['Sepal_Length','Sepal_Width','Petal_Length','Petal_Width','Class']
# iris =  pd.read_csv(csv_url, names = col_names)
# print(iris.head()) #prints data and attributes for first 5 values, labeled 0-4
# print(iris.head(10)) #prints first 10 this time
# print(iris.tail()) #prints last 5
# print(iris.describe()) # gives the count, standard deviation, and 5 number summary of the data
# print(iris.iloc[0:3,0:2]) #extracts first 3 records and first 2 columns
# iris1=iris.iloc[99:107,2:4]
# print(iris.iloc[10:21,[0,4]]) #exctracts from specific columns
# print(iris.loc[33:44,("Sepal_Width","Petal_Width")]) #can also write columns to be used, case sensitive
# print(iris['Sepal_Length']>5) #returns boolean
# print(iris[iris['Sepal_Length']>5]) #returns what is true
# irisFinal=iris[(iris['Petal_Length']>2) & (iris['Class']=='virginica')]
# print(irisFinal.head())

#^pandas/data manipulation ^

#from matplotlib import pyplot as plt
#import numpy as np
#line plot
#x = np.arange(1,11)
#y = 2*x
#plt.plot(x,y)
#plt.show()