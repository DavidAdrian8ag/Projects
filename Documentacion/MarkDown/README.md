# Git-Guia
Guia y cosas de GIT

#  Version del curso 1.2.2

# Cabeceras
# Cabecera h1
##  Cabecera h2
###  Cabecera h3
####  Cabecera h4
#####  Cabecera h5
######  Cabecera h6

# Underlines
underline 1
-
underline 2
=

# Formatos de énfasis
- formato *Italica* forma 1
- formato _Italica_ forma 2
- formato **negrita**  forma 1
- formato __negrita__  forma 2
- formato ~~tachado~~ única forma

# Listas
1. uno
2. dos
3. tres
- Desordenadas
- Las listas 
- También pueden ser

# Links
- [Esto es un link a Google](https://google.com "Etiqueta")
- [Esto es un link a index](index.html)
 
 # Imágenes
 ![Logo Github](https://cyclr.com/wp-content/uploads/2022/03/ext-495.png)

 # Code Snippets
 ``` Markdown
 # hello world

you can write text [with links](http://example.com) inline or [link references][1].

* one _thing_ has *em*phasis
* two __things__ are **bold**

[1]: http://example.com

---

hello world
===========

<this_is inline="xml"></this_is>

> markdown is so cool

    so are code segments

1. one thing (yeah!)
2. two thing `i can write code`, and `more` wipee!
  ```
### Otro ejemplo
```  Python
   @requires_authorization(roles=["ADMIN"])
def somefunc(param1='', param2=0):
    r'''A docstring'''
    if param1 > param2: # interesting
        print 'Gre\'ater'
    return (param2 - param1 + 1 + 0b10l) or None

class SomeClass:
    pass

>>> message = '''interpreter
... prompt'''
```     

# Tablas

| Nombre | Apellido | Documento | 
|--------| -------- | --------- |
| Maxi | Burgos | CURP
| Daniel | Castañeda | Acta 
| Joana | Gutierrez | Licencia

# Citas (Bibliográficas)
Este es el texto refente para poner la cita, así como en el diccionario de la RAE.
>esto es la cita

Se requiere otro "enter" para salir de la cita


# Líneas de división (Horizontales)

Para poder hacer una divisón, se deben usar tres guiones con un "enter" de diferencia

---
Pero con este otro que se puede dividir con asteriscos
***
Y también pueden usarse los guiones bajos.
___

# Saltos de línea (Enter)
Se escribe un párrafo

Este es un segundo párrafo

Solo hay que poner un "enter entre ellos"

