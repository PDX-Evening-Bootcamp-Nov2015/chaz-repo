# write a function (is_even(n)) that returns true or false depending on whether
# a number is even or not

# now write a function (filter_it) that takes a function and a list and returns
# a new list of numbers that are even.

list1 = [1,2,3,4,5]

def is_even(n):
    if n % 2 == 0:
        return True
    elif n % 2 == 1:
        return False

print (is_even(8))

def filter_it(n, func):
    newlist = []
    for num in n:
        if is_even(num) == True:
            (newlist.append(is_even(num))
                print (newlist)

filter_it(list1, is_even)
