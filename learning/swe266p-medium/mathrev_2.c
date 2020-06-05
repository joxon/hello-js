int main(void)
{
  char charCurrent;
  int intOffset;
  int charPrevious;
  int *indexIntPtr;
  char *indexCharPtr;
  int in_GS_OFFSET;
  char charInput0;
  char charInput1;
  char charInput2Ptr [126];
  int local_24;
  undefined *local_18;

  local_18 = &stack0x00000004;
  local_24 = *(int *)(in_GS_OFFSET + 0x14);
  __printf_chk(1,"Flag: ");
  __isoc99_scanf("%100s",&charInput0);
  if ((int)charInput0 == intOffsetArray[0]) {
    if (999 < intOffsetArray[1]) {
LAB_0804851b:
      puts("Congratz! :D");
      goto LAB_08048473;
    }
    if (intOffsetArray[1] == ((int)charInput0 * (int)charInput1) % 0x83) {
      indexIntPtr = intOffsetArray + 2;
      indexCharPtr = charInput2Ptr;
      do {
        intOffset = *indexIntPtr;
        if (999 < intOffset) goto LAB_0804851b;
        charCurrent = *indexCharPtr;
        charPrevious = (int)charInput1;
        indexIntPtr = indexIntPtr + 1;
        indexCharPtr = indexCharPtr + 1;
        charInput1 = charCurrent;
      } while (intOffset == (charPrevious * charCurrent) % 0x83);
    }
  }
  puts("Wrong flag.... :(");
LAB_08048473:
  if (local_24 == *(int *)(in_GS_OFFSET + 0x14)) {
    return 0;
  }
                    /* WARNING: Subroutine does not return */
  __stack_chk_fail();
}
