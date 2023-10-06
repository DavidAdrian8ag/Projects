# Creating a Password

print("Welcome to your Bank")
pin = int(input("Pleas insert your PIN to access your account:"))

while pin != 210526:
    print("That is NOT your PIN")
    pin = int(input("Please try again "))

if pin == 210526:
    print("Welcome to your account")