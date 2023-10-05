# Persistent Bugger
# https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec


"""
TODO: Write a function, persistence, that takes in a positive parameter num and returns 
TODO: its multiplicative persistence, which is the number of times 
TODO: you must multiply the digits in num until you reach a single digit.

? For example (Input --> Output):
* 39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
* 999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
* 4 --> 0 (because 4 is already a one-digit number)
"""

def persistence(num):
    count = 0
    
    while num >= 10:
      # 1. str(num) -> convierte el numero ingresado a string
      # 2. list( str(num) ) -> convierte el string en una lista 
      # pasa de '999' a ['9', '9', '9']
      digits = list(str(num)) 

      # Variable auxiliar donde voy a guardar el valor de
      # los numeros multiplicados juntos como enteros
      num = 1
      for digit in digits:
          num *= int(digit)
      
      # Incremento el valor de count
      count += 1
      
    # Terminado el bucle retorno el valor de mi count  
    return count
      
persistence(999)      