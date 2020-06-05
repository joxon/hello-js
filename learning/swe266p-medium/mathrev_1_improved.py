import math

#                      characterC[2]                                   XREF[1,4]:   main:0804845b (R) ,
#                      characterC[3]                                                main:0804848d (R) ,
#                      int17 (0804a040+4)                                           main:080484af (*) ,
#                      characterC                                                   main:080484d9 (R) ,
#                                                                                   main:080484d9 (R)
# 0804a040 63  00  00       int[31]
#          00  11  00
#          00  00  f2
#    0804a040 [0]                      99,            17,           -14,            21
#    0804a050 [4]                     -25,            16,           -63,             1
#    0804a060 [8]                      55,           -12,             3,           -49
#    0804a070 [12]                     61,           -58,            62,           -65
#    0804a080 [16]                      2,             2,            42,            15
#    0804a090 [20]                    -62,             7,            40,             9
#    0804a0a0 [24]                    -53,             1,            62,           -59
#    0804a0b0 [28]                     -2,            72,          9999


offset = [
    99,
    17,
    -14,
    21,
    -25,
    16,
    -63,
    1,
    55,
    -12,
    3,
    -49,
    61,
    -58,
    62,
    -65,
    2,
    2,
    42,
    15,
    -62,
    7,
    40,
    9,
    -53,
    1,
    62,
    -59,
    -2,
    72,
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

# ctf{br34k_b1n4r135_n07_h34r75}
# ctf{break_binaries_not_hearts}
