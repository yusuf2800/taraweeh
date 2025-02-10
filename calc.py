import math

count = 2.1
parts = ["2.1"]

for _ in range(23):
  if count+0.6<math.floor(count)+1:
    count+=1.1
  else:
    count+=1.7
  parts.append(f"{count:.1f}")

print(parts)
