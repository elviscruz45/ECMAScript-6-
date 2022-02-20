"""Complete the solution so that it splits the string into pairs of two characters.
If the string contains an odd number of characters then it should replace the missing
second character of the final pair with an underscore ('_').
Examples:
solution('abc') # should return ['ab', 'c_']
solution('abcdef') # should return ['ab', 'cd', 'ef']"""

def solution(s):
    texto=s
    lista=[]
    
    for a in range(len(texto)):
        if a<2:
            lista.append(texto[a])
    print(lista)
            


solution('abcdefe')