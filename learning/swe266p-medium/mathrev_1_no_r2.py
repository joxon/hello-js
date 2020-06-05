import math

offset = [
    99,
    16,
    -62,
    -3,
    5,
    68,
    -50,
    22,
    13,
    3,
    7,
    -67,
    44,
    8,
    2,
    9,
    38,
    39,
    -20,
    24,
    70,
    67,
    -44,
    23,
    3,
    -49,
    54,
    -8,
    7,
    -54,
    66,
    -13,
    29,
    -21,
    1,
    48,
    15,
    10,
    9999,
]
# Create our input buffer (we know the size from the binary)
flag = [0] * 100
# We know from the binary that flag's first element is equal to offset's first element
flag[0] = offset[0]
# We just reverse the comparison loop
i = 1
while offset[i] < 1000:
    flag[i] = flag[i - 1] + offset[i]
    i += 1
# Finally print the flag converting ascii values to actual characters
print("".join(map(chr, flag)))
