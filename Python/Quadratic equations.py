# Program to get the "roots" of a quadratic equation

print("A quadratic equation has the following form: ax^2+bx+c=0")
print("To solve, Please introduce:")
a = float(input("a: "))
b = float(input("b: "))
c = float(input("c: "))

x1 = (-b+(b**2-(4*a*c))**0.5)/(2*a)
x2 = (-b-(b**2-(4*a*c))**0.5)/(2*a)

print("One of the root is: ",x1)
print("The second root is: ",x2)