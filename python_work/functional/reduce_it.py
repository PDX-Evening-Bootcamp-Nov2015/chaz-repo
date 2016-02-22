# write a function that takes two strings and concatinates them together
# call this function "cat".

# now write a function that takes a function and a list of strings and applies
# the cat function to each element in the list and returns the resulting string


list1 = ["a","b","c", "d", "e", "f"]

def cat(x,y):
    return x + y

def lis(x, func):
    newstring = ""
    for var in x:
        newstring = func(newstring, var)
        print (newstring)
    return newstring

print (lis(list1, cat))
