
first_name = input("enter your first name").lower()
last_name = input("enter your last name").lower()

def usernamemania(x,y):
    print (x[0]+y[0:7])

usernamemania(first_name, last_name)
