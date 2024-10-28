// EDITAR EL NOMBRE DEL ARCHIVO EN EL MAIN DEL PACKAGE.JSON

// Definición de la interfaz BaseObject
interface BaseObject {
    id: number;
  }
  
  // Interfaces User, Product y Order que heredan de BaseObject
  interface User extends BaseObject {
    name: string;
    email: string;
  }
  
  interface Product extends BaseObject {
    name: string;
    price: number;
    category: string;
  }
  
  interface Order extends BaseObject {
    productId: number;
    userId: number;
    quantity: number;
  }
  
  // Función genérica para imprimir datos
  function printData<T extends BaseObject>(item: T): void {
    console.log(`ID: ${item.id}`);
    
    // Verificar el tipo y mostrar propiedades específicas
    if ('name' in item && 'email' in item) {
      console.log(`Name: ${(item as User).name}`);
      console.log(`Email: ${(item as User).email}`);
    } else if ('name' in item && 'price' in item) {
      console.log(`Name: ${(item as Product).name}`);
      console.log(`Price: ${(item as Product).price}`);
      console.log(`Category: ${(item as Product).category}`);
    } else if ('productId' in item && 'userId' in item) {
      console.log(`Product ID: ${(item as Order).productId}`);
      console.log(`User ID: ${(item as Order).userId}`);
      console.log(`Quantity: ${(item as Order).quantity}`);
    }
  }
  
  // Ejemplos de uso
  const user: User = { id: 1, name: "Alice", email: "alice@example.com" };
  const product: Product = { id: 2, name: "Laptop", price: 1500, category: "Electronics" };
  const order: Order = { id: 3, productId: 2, userId: 1, quantity: 2 };
  
  printData(user);
  printData(product);
  printData(order);
  