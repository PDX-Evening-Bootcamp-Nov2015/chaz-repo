# write a function (called double) that takes and integer n and returns twice
#the value of n

# Then write a function that takes a double and a list and returns a list
# of each number doubled
list1 = [1,2,3,4,5]


def double(x):
    return x*2

def square(x):
    return x*x


def listy(y, fync):
    print (y)
    newlist = []
    for num in y:
        (newlist.append(fync(num)))
    return newlist

print (listy(list1, square))
