# Guess the number

adivina = 0
intentos = 3

print("To win, you need to guess the correct number")
print("You only have 3 attempts")

while adivina !=6 and intentos > 0:
    adivina = int(input("Try again: "))
    intentos = intentos - 1
    print("You only have ",intentos, " attempts")
    
if intentos == 0:
    print("You lose")
    

if adivina == 6:
    print("You won!!!")