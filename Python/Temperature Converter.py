# Temperature Converter:

print("Insert 1 if you want to convert F to C, 2 if you want C to F")
sel = int(input())
print("Please introduce the temperature to convert:")
temp_inicial = float(input())

if sel ==1:
    temp_final = ((temp_inicial)-32)/1.8
    print("The temperature ", temp_inicial, " F is ",temp_final, " in C")
elif sel == 2:
    temp_final = (temp_inicial*(9/5))+32
    print("The temperature ", temp_inicial, " C is ",temp_final, " in F")
else:
    print("You did not choose a correct option.")

