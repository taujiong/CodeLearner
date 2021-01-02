from typing import List
import heapq

# https://leetcode-cn.com/problems/sliding-window-maximum/
# 困难，优先队列
def maxSlidingWindow(nums: List[int], k: int) -> List[int]:
  # 注意 Python 默认的优先队列是小根堆
  q = [(-nums[i], i) for i in range(k)]
  heapq.heapify(q)

  ans = [-q[0][0]]
  for i in range(k, len(nums)):
      heapq.heappush(q, (-nums[i], i))
      while q[0][1] <= i - k:
          heapq.heappop(q)
      ans.append(-q[0][0])
  
  return ans
