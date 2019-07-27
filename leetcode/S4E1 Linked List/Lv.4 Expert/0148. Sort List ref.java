  // https://leetcode.com/problems/sort-list/discuss/166324/c%2B%2B-and-java-legit-solution.-O(nlogn)-time-and-O(1)-space!-No-recursion!-With-detailed-explaination
  public ListNode sortList(ListNode head) {
    // 创建一个新头
    ListNode dummy = new ListNode(0);
    dummy.next = head;
    // 存放两个子链
    ListNode [] list = new ListNode[2];
    // 标记排序是否完成
    boolean done = (null == head);
    // Keep partitioning our list into bigger sublists length. Starting with a size of 1 and doubling each time
    // 从长度为1的子链开始
    // 将子链拼为更长的子链
    // 每次子链长度变为双倍
    // 步长迭代：step
    // 时间复杂度：O(logn)
    for (int step = 1; !done; step *= 2) {
      // 每次迭代从新头开始
      done = true;
      ListNode prev = dummy;
      ListNode remaining = prev.next;
      // 当剩余子链不为空，继续拼合子链
      // 时间复杂度：O(n)
      do {
        // Split off two sublists of size step
        // 根据步长分割子链
        // 一次分割两条子链
        // 分割迭代：split
        for (int i = 0; i < 2; ++i) {
          // 获得子链头
          list[i] = remaining;
          // 获得子链尾
          ListNode tail = null;
          for (int j = 0; j < step && null != remaining; ++j, remaining = remaining.next) {
            tail = remaining;
          }
          // Terminate our sublist
          // 子链尾设为null
          if (null != tail) {
            tail.next = null;
          }
        }

        // We're done if these are the first two sublists in this pass and they
        // encompass the entire primary list
        // 如果第一次切割就遍历了整个链表，外循环可以停止
        done &= (null == remaining);

        // If we have two sublists, merge them into one
        // 若分割得到两个子链，合并他们
        // 合并迭代：merge
        if (null != list[1]) {
          while (null != list[0] || null != list[1]) {
            int idx = (null == list[1] || null != list[0] && list[0].val <= list[1].val) ? 0 : 1;
            prev.next = list[idx];
            list[idx] = list[idx].next;
            prev = prev.next;
          }

          // Terminate our new sublist
          prev.next = null;
        } else {
          // Only a single sublist, no need to merge, just attach to the end
          // 若分割只得到一个子链，只需把他添到尾巴
          prev.next = list[0];
        }
      } while (null != remaining);
    }

    return dummy.next;
  }