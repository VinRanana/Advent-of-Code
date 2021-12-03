from puzzleinput import measurements 

measurement_list = measurements.split()
numbers = [int(el) for el in measurement_list]

increase_count = 0
i = 0
for el in numbers:
  if numbers[i - 1] and numbers[i] > numbers[i - 1]:
    increase_count += 1
  i += 1

print(increase_count)