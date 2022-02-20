#Python Tutorial
#Python Introduction

print("Hello, World!")

#The Python Command Line
#--------------------------------------------------------------------------------------------------------
#Python Syntax
#--------------------------------------------------------------------------------------------------------
#Python Variables - Assign Multiple Values
#Unpack a Collection
#Python - Output Variables
#Output Variables
#The global Keyword

#--------------------------------------------------------------------------------------------------------

#Python Data Types


#Text Type:	str
#Numeric Types:	int, float, complex
#Sequence Types:	list, tuple, range
#Mapping Type:	dict
#Set Types:	set, frozenset
#Boolean Type:	bool
#Binary Types:	bytes, bytearray, memoryview


#--------------------------------------------------------------------------------------------------------
#Python Numbers

"""
int
float
complex
"""
#--------------------------------------------------------------------------------------------------------
#Python Casting
"""Specify a Variable Type"""

#--------------------------------------------------------------------------------------------------------
#Python Strings
#Looping Through a String


for x in "banana":
      print(x)

#String Length

a = "Hello, World!"
print(len(a))

#Check String

txt = "The best things in life are free!"
print("free" in txt)


txt = "The best things in life are free!"
if "free" in txt:
  print("Yes, 'free' is present.")
  
#--------------------------------------------------------------------------------------------------------
#Python - Slicing Strings

a="Hello World"
b=a[-1]

print(b)

#--------------------------------------------------------------------------------------------------------

#Upper Case

a = "Hello, World!"
print(a.upper())

#Remove Whitespace
a = " Hello,       World!       n       "
print(a.strip()) # returns "Hello, World!"


#Replace String
a = "Hello, World!"
print(a.replace("H", "J"))

#Split String
a = "Hello, World!"
print(a.split("o")) # returns ['Hello', ' World!']

#String Concatenation


quantity = 3
itemno = 567
price = 49.95
myorder = "I want {} pieces of item {} for {} dollars."
print(myorder.format(quantity, itemno, price))


quantity = 3
itemno = 567
price = 49.95
myorder = "I want to pay {2} dollars for {0} pieces of item {1}."
print(myorder.format(quantity, itemno, price))


#Python - Escape Characters

#--------------------------------------------------------------------------------------------------------
# String Methods
"""
Method	                Description
capitalize()	        Converts the first character to upper case
casefold()	            Converts string into lower case
center()	            Returns a centered string
count()	                Returns the number of times a specified value occurs in a string
encode()	            Returns an encoded version of the string
endswith()	            Returns true if the string ends with the specified value
expandtabs()	        Sets the tab size of the string
find()	                Searches the string for a specified value and returns the position of where it was found
format()	            Formats specified values in a string
format_map()	        Formats specified values in a string
index()	                Searches the string for a specified value and returns the position of where it was found
isalnum()	            Returns True if all characters in the string are alphanumeric
isalpha()	            Returns True if all characters in the string are in the alphabet
isdecimal()	            Returns True if all characters in the string are decimals
isdigit()	            Returns True if all characters in the string are digits
isidentifier()	        Returns True if the string is an identifier
islower()	            Returns True if all characters in the string are lower case
isnumeric()	            Returns True if all characters in the string are numeric
isprintable()	        Returns True if all characters in the string are printable
isspace()	            Returns True if all characters in the string are whitespaces
istitle()	            Returns True if the string follows the rules of a title
isupper()	            Returns True if all characters in the string are upper case
join()	                Joins the elements of an iterable to the end of the string
ljust()	                Returns a left justified version of the string
lower()	                Converts a string into lower case
lstrip()	            Returns a left trim version of the string
maketrans()	            Returns a translation table to be used in translations
partition()         	Returns a tuple where the string is parted into three parts
replace()	            Returns a string where a specified value is replaced with a specified value
rfind()	                Searches the string for a specified value and returns the last position of where it was found
rindex()	            Searches the string for a specified value and returns the last position of where it was found
rjust()	                Returns a right justified version of the string
rpartition()	        Returns a tuple where the string is parted into three parts
rsplit()	            Splits the string at the specified separator, and returns a list
rstrip()	            Returns a right trim version of the string
split()	                Splits the string at the specified separator, and returns a list
splitlines()	        Splits the string at line breaks and returns a list
startswith()	        Returns true if the string starts with the specified value
strip()	                Returns a trimmed version of the string
swapcase()	            Swaps cases, lower case becomes upper case and vice versa
title()	                Converts the first character of each word to upper case
translate()	            Returns a translated string
upper()	                Converts a string into upper case
zfill()	                Fills the string with a specified number of 0 values at the beginning

"""


#--------------------------------------------------------------------------------------------------------
#Python Booleans

#--------------------------------------------------------------------------------------------------------
#Python Lists
count = {i: text.count(i) for i in set(text)}


text="casaca"
a=set(text)
print(a)

thislist = ["apple", "banana", "cherry"]
thislist.insert(6,"casa")

print(thislist)
print(len(thislist))

#Python - Add List Items

thislist = ["apple", "banana", "cherry"]
thislist.append("orange")
print(thislist)


thislist = ["apple", "banana", "cherry"]
thislist.append("orange")
print(thislist)


thislist = ["apple", "banana", "cherry"]
thislist.remove("banana")
print(thislist)

thislist = ["apple", "banana", "cherry"]
thislist.pop()
print(thislist)


thislist = ["apple", "banana", "cherry"]
for x in thislist:
  print(x)


thislist = ["apple", "banana", "cherry"]
i = 0
while i < len(thislist):
  print(thislist[i])
  i = i + 1



def myfunc(n):
      return abs(n - 50)

thislist = [100, 50, 65, 82, 23]

thislist.sort(key = myfunc)

print(thislist)





thislist = ["apple", "banana", "cherry"]
mylist = thislist.copy()
print(mylist)


thislist = ["apple", "banana", "cherry"]
mylist = list(thislist)
print(mylist)



#Join Two Lists

#--------------------------------------------------------------------------------------------------------
# Python Tuples

thistuple = ("apple", "banana", "cherry")
y = ("orange",)
thistuple += y

print(thistuple)


thistuple = ("apple", "banana", "cherry")
y = list(thistuple)
y.remove("apple")
thistuple = tuple(y)
print(thistuple)

#Python - Unpack Tuples



fruits = ["apple", "banana", "cherry"]
(green, yellow, red) = fruits
print(green)
print(yellow)
print(red)

#Python - Loop Tuples

#--------------------------------------------------------------------------------------------------------

#Python Sets

myset = {"apple", "banana", "cherry"}


#Python - Remove Set Items

thisset = {"apple", "banana", "cherry"}

thisset.remove("banana")

print(thisset)

#--------------------------------------------------------------------------------------------------------
#Python Dictionaries

thisdict = {
  "brand": "Ford",
  "model": "Mustang",
  "year": 1964,
  "year": 2020
}
print(thisdict)

thisdict =	{
  "brand": "Ford",
  "model": "Mustang",
  "year": 1964
}
x = thisdict.get("model")
print(x)

a=thisdict.get("model")
print(a)

thisdict = {
  "brand": "Ford",
  "model": "Mustang",
  "year": 1964
}

x = thisdict.keys()

print(type(x))

# Python - Copy Dictionaries

#Copy a Dictionary

thisdict = {
  "brand": "Ford",
  "model": "Mustang",
  "year": 1964
}
mydict = thisdict.copy()
print(mydict)


#Python - Nested Dictionaries

#--------------------------------------------------------------------------------------------------------
#Python If ... Else

a = 33
b = 200

if b > a:
  pass

#--------------------------------------------------------------------------------------------------------
#Python While Loops
fruits = ["apple", "banana", "cherry"]
for x in fruits:
  
  if x == "cherry":
    break
  print(x)

#--------------------------------------------------------------------------------------------------------
#Python Functions
#Recursion


def tri_recursion(k):
  if(k > 0):
    result = k + tri_recursion(k - 1)
    print(result)
  else:
    result = 0
  return result

print("\n\nRecursion Example Results")

tri_recursion(6)

#--------------------------------------------------------------------------------------------------------
#Python Lambda

def myfunc(n):
  return lambda a : a * n

mytripler = myfunc(3)

print(mytripler(11))

def myfunc(n):
  return lambda a:a*n


# other

def myfunc(n):
      return lambda a : a * n

mytripler = myfunc(3)

print(mytripler(11))
      
#
def myfunc(n):
      return lambda a : a * n

mydoubler = myfunc(2)
mytripler = myfunc(3)

print(mydoubler(11))
print(mytripler(11))


#--------------------------------------------------------------------------------------------------------
#--------------------------------------------------------------------------------------------------------
#--------------------------------------------------------------------------------------------------------
#--------------------------------------------------------------------------------------------------------
#--------------------------------------------------------------------------------------------------------
#--------------------------------------------------------------------------------------------------------
#--------------------------------------------------------------------------------------------------------
#--------------------------------------------------------------------------------------------------------
#--------------------------------------------------------------------------------------------------------
#--------------------------------------------------------------------------------------------------------
#--------------------------------------------------------------------------------------------------------
#--------------------------------------------------------------------------------------------------------
#--------------------------------------------------------------------------------------------------------
#--------------------------------------------------------------------------------------------------------
#--------------------------------------------------------------------------------------------------------
#--------------------------------------------------------------------------------------------------------
#--------------------------------------------------------------------------------------------------------
#--------------------------------------------------------------------------------------------------------
#--------------------------------------------------------------------------------------------------------
#--------------------------------------------------------------------------------------------------------
#--------------------------------------------------------------------------------------------------------
#--------------------------------------------------------------------------------------------------------
#--------------------------------------------------------------------------------------------------------
#--------------------------------------------------------------------------------------------------------
#--------------------------------------------------------------------------------------------------------
#--------------------------------------------------------------------------------------------------------
#--------------------------------------------------------------------------------------------------------
#--------------------------------------------------------------------------------------------------------
#--------------------------------------------------------------------------------------------------------
#--------------------------------------------------------------------------------------------------------
#--------------------------------------------------------------------------------------------------------
#--------------------------------------------------------------------------------------------------------
#--------------------------------------------------------------------------------------------------------
#--------------------------------------------------------------------------------------------------------
#--------------------------------------------------------------------------------------------------------
#--------------------------------------------------------------------------------------------------------
#--------------------------------------------------------------------------------------------------------
#--------------------------------------------------------------------------------------------------------


