import r2pipe
import math

r = r2pipe.open("mathrev_1", flags=["-2"])
r.cmd("aaaa")
# size of obj.offset
offset_size = int(r.cmd("f ~obj.offset[1]").strip())  # offset size in bytes
offset_length = offset_size // 4
# output of pxd @ obj.offset looks like below
# - offset - |  0  1   2  3   4  5   6  7   8  9   A  B   C  D   E  F| 0123456789ABCDEF
# 0x00404040 |           99            16           -62            -3  c...............
# 0x00404050 |            5            68           -50            22  ....D...........
# 0x00404060 |           13             3             7           -67  ................
# 0x00404070 |           44             8             2             9  ,...............
# 0x00404080 |          -38            39           -20            24  ....'...........
# 0x00404090 |          -70            67           -44            23  ....C...........
# 0x004040a0 |            3           -49            54            -8  ........6.......
# 0x004040b0 |            7           -54            66           -13  ........B.......
# 0x004040c0 |          -29           -21             1            48  ............0...
# 0x004040d0 |           15            10          9999             0  .........'......
# 0x004040e0 |            0             0             0             0  ................


offset = []
# parse the output above into offset array
n_col = 4
n_row = math.ceil(offset_length / n_col)
for i in range(1, n_row + 1):
    for j in range(1, n_col + 1):
        # Print heXadecimal signed integer dump
        offset_element = int(r.cmd("pxd @ obj.offset~:{}[{}]".format(i, j)).strip())
        offset.append(offset_element)

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
