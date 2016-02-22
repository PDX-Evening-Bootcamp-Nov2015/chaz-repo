
money_list = [1, 5, 10, 25]
sorry = "sorry man you failed to enter an integer, try again"
howmany = "how many {} do you have?:"
print ("welcome to the coin counting program, its awesome!")

try:
    whatpenny = eval(input(howmany.format("pennies")))
except:
    print(sorry)
    whatpenny = eval(input(howmany.format("pennies")))

try:
    whatnickel = eval(input(howmany.format("nickels")))
except:
    print (sorry)
    whatnickel = eval(input(howmany.format("nickels")))

try:
    whatdime = eval(input(howmany.format("dimes")))
except:
    print(sorry)
    whatdime = eval(input(howmany.format("dimes")))

try:
    whatquarter = eval(input(howmany.format("quarters")))
except:
    print(sorry)
    whatquarter = eval(input(howmany.format("quarters")))

def pennycount(w,x,y,z):
        penny = w * money_list[0]
        nickel = x * money_list[1]
        dime = y * money_list[2]
        quarter = z * money_list[3]
        print ("Wow that is so much money, you have a total of ${}".format((penny+nickel+dime+quarter) / 100))
pennycount(whatpenny, whatnickel, whatdime, whatquarter)
