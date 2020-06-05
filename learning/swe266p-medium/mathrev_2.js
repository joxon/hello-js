//                      intOffsetArray[3]                               XREF[1,4]:   main:0804845b (R) ,
//                      int119 (0804a040+4)                                          main:08048491 (R) ,
//                      intArrayBase (0804a040+8)                                    main:080484bc (*) ,
//                      intOffsetArray                                               main:08048511 (R) ,
//                                                                                   main:08048511 (R)
// 0804a040 63  00  00       int[49]
//          00  77  00
//          00  00  45
//    0804a040 [0]                      99,           119,            69,            30
//    0804a050 [4]                     130,            84,             9,            50
//    0804a060 [8]                      28,            98,            14,           100
//    0804a070 [12]                     41,            28,            70,            70
//    0804a080 [16]                    104,            39,           126,            74
//    0804a090 [20]                     39,            79,           101,            35
//    0804a0a0 [24]                     51,            39,            67,            51
//    0804a0b0 [28]                     12,            55,           101,            40
//    0804a0c0 [32]                     76,           104,            13,            52
//    0804a0d0 [36]                     19,           108,            32,            72
//    0804a0e0 [40]                     61,           116,            87,            47
//    0804a0f0 [44]                     68,            36,            43,            96
//    0804a100 [48]                   9999

const offset = [
  99,
  119,
  69,
  30,
  130,
  84,
  9,
  50,
  28,
  98,
  14,
  100,
  41,
  28,
  70,
  70,
  104,
  39,
  126,
  74,
  39,
  79,
  101,
  35,
  51,
  39,
  67,
  51,
  12,
  55,
  101,
  40,
  76,
  104,
  13,
  52,
  19,
  108,
  32,
  72,
  61,
  116,
  87,
  47,
  68,
  36,
  43,
  96,
  9999,
];

const getAscii = (offset, prev) => {
  for (let ascii = 0; ascii < 128; ascii++) {
    if ((prev * ascii) % 0x83 === offset) {
      return ascii;
    }
  }
};

let flag = String.fromCharCode(99); // c
let i = 1;
while (offset[i] < 1000) {
  flag += String.fromCharCode(getAscii(offset[i], flag.charCodeAt(i - 1)));
  ++i;
}
console.log(flag);

// cs527{0H_y3aH_1_c4N_w0rK_w1th_n0N-l1n34R_7hiNGs}
