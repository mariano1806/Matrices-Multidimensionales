import json

def main():
    people = []
    
    while True:
        name = input("Ingrese el nombre: ")
        surname = input("Ingrese el apellido: ")
        dni = input("Ingrese el DNI: ")
        
        phones = []
        while True:
            phone = input("Ingrese un número de teléfono (o presione Enter para finalizar): ")
            if phone == "":
                break
            phones.append(phone)
        
        people.append([name, surname, dni, phones])
        
        another = input("¿Desea ingresar otra persona? (s/n): ").lower()
        if another != 's':
            break
    
    print("\nDatos ingresados:")
    print(json.dumps(people, indent=2, ensure_ascii=False))

if __name__ == "__main__":
    main()
