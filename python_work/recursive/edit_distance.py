# The objective is to find the least number of substitutions, insertions, and
# deletions required to get from one string to another.

# Consider transforming the string “alien” into the string “sales.” We can
# begin by inserting an “s” at the front of “alien” to make “salien”. Then we
# delete the “i” to make “salen.” Then we replace the “n” with an “s” to make
# “sales.” That took three operations, and indeed it is not possible to
# transform “alien” to “sales” with fewer than three operations.

# Consider transforming the string “alien” into the string “sales.” We can
# begin by inserting an “s” at the front of “alien” to make “salien”. Then we
# delete the “i” to make “salen.” Then we replace the “n” with an “s” to make
# “sales.” That took three operations, and indeed it is not possible to transform
# “alien” to “sales” with fewer than three operations.

# One extreme is that one (or both) of the strings are empty. For example,
# imagine that first is the empty string. For the moment, let’s assume that
# second is not empty—for example it might be “spam”. Then the distance between
# the two strings must be the length of second since we must insert that many
# letters into the empty string to get to second. Similarly, if second is empty
# then the distance must be the length of first, since we must delete that many
# symbols from first.



def distance(first, second):
    '''Returns the edit distance between first and second.'''

    if first == '':
        return len(second)
    elif second == '':
        return len(first)
    elif first[0] == second[0]:
        return distance(first[1:], second[1:])
    else:
        substitution = 1 + distance(first[1:], second[1:])
        deletion = 1 + distance(first[1:], second)
        insertion = 1 + distance(first, second[1:])
        return min(substitution, deletion, insertion)

print(distance("ATCG", "GTAC"))
print(distance('spam', 'poems'))
