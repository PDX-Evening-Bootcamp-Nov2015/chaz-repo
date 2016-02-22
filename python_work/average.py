
list1 = open('nums.txt', 'r')
def averages(x):
    list2 = []
    for num in x:
        list2.append(eval(num.strip()))
    print(list2)
    return list2


def addemup(y):
    final = sum(y) / len(y)
    print (int(final))

addemup(averages(list1))
