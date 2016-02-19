# write a function (mult) that takes two numbers and returns the result
# of multiplying those two numbers together

# now write a function(apply_it) that takes three arguments: a function,
# and two arguments and returns the result of calling the function with
# the two arguments


def mult(x,y):
    newvar = x*y
    return newvar

def apply_it(func, x, y):
    newestvar = func(x,y)
    return newestvar

print (apply_it(mult, 3, 4))
