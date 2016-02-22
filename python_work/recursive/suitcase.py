# You are trying to pack your suitcase for a trip without paying additional
# fees.  Unfortunately different airlines have different weight limits.

# Write a program that takes a list of numbers representing the weight of the
# various items you want to take with you and a integer representing the
# weight limit. This function should return


def subset(capacity, items):
    if capacity <= 0 or items == []:
        return 0
    elif items[0] > capacity:
        return subset(capacity, items[1:])
    else:
        loseIt = subset(capacity, items[1:])
        useIt = items[0] + subset(capacity - items[0], items[1:])
        return max(loseIt, useIt)

print (subset(4, [5, 1, 2]))
print (subset(42, [5, 10, 18, 23, 30, 45]))
