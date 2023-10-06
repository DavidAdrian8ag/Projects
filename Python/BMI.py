# The The body mass index (BMI) is a measure that uses your height and weight to work out if your weight is healthy.

print("Lets get your BMI:")
peso = float(input("Please indicate your weight in kg: "))
altura = float(input("Please indicate your height in meters: "))

bmi = (peso)/(altura ** 2)

print("Your BMI: ",bmi)
