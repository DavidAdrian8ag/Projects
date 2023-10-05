# Magic Ball
import random

pregunta = input("Aks your Question: ")
numero = random.randint(1, 9)

if numero == 1:
    respuesta = "Yes, definetlty"
elif numero == 2:
    respuesta = "Seems so"
elif numero == 3:
    respuesta = "Of course"
elif numero == 4:
    respuesta = "Not sure, ask again"
elif numero == 5:
    respuesta = "Ask later"
elif numero == 6:
    respuesta = "I don't want to tell you"
elif numero == 7:
    respuesta = "All looks like a solid NO"
elif numero == 8:
    respuesta = "Odds are not with you"
elif numero == 9:
    respuesta = "I don't think so..."
else:
    respuesta = "There was an issue"

print("Pregunta: ", pregunta)
print("Respuesta: ",respuesta)
