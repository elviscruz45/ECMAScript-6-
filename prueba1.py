person = {    "firstName": "John",    "lastName": "Doe",    "id": 5566,    "fullName": 34    }  


print(person["id"])



def duplicate_count(text):
    text = text.lower()
    count = {i: text.count(i) for i in set(text)}
    count = sorted(count.values())
    result = 0
    for i in count:
        if i > 1:
            result += 1
    print(set(text))
    print(set(count))
    return result


duplicate_count("hollaa")


text="golaggkllaa"
count = {i: text.count(i) for i in set(text)}

print(count)