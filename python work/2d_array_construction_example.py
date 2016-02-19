import random

def make_2d(n):
    outer = []
    for i in range (n):
        inner = []
        for j in range(n):
            inner.append(random.randint(1, n**2))
        outer.append(inner)
    return outer

print (make_2d(3))            
