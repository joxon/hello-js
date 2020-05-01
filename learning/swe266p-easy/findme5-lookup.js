const strFlag =
  'c7kvTns7_}U1x}ir(Ca2$5X,Q<e;I^l7J3=Hq:}"syy=dLC)/,-Cc8q|qY9=7%Q^7k&*(#,E|%`bP%i.s!n-pl|I%9_)i=@WBGEP!CU^%%`mamb_]mQIkyK&XTltqC78F[h}{?]"A@o$ch@43+04.e0zZ#=p8<M">uI_58bBiE*)Y:4fu?KQ9xZVv?qC_,lW!8=6M|U8B^AzwR`op-s_4zaT;RMX]96]NPp{MG5n%Sh|iJkw';

const table = [
  0,
  40,
  21,
  19,
  7,
  227,
  28,
  8,
  15,
  198,
  5,
  8,
  146,
  161,
  31,
  8,
  207,
  128,
  211,
  128,
  190,
  143,
  97,
  90,
  123,
  33,
  181,
  4,
  6,
  9,
  -1,
];

let ans = "";

table.forEach((num) => (ans += num >= 0 ? strFlag[num] : ""));

console.log(ans);
