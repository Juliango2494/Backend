// EDITAR EL NOMBRE DEL ARCHIVO EN EL MAIN DEL PACKAGE.JSON

// Definición de la interfaz Product
interface Product {
    name: string;
    price: number;
    category: string;
    stock: number;
  }
  
  // Definición de la interfaz Inventory que contiene un array de Product y métodos para agregar y buscar productos
  interface Inventory {
    products: Product[];
  
    addProduct(product: Product): void;
    findProductByName(name: string): Product | undefined;
  }
  
  // Implementación de la interfaz Inventory
  class StoreInventory implements Inventory {
    products: Product[] = [];
  
    addProduct(product: Product): void {
      this.products.push(product);
      console.log(`Product added: ${product.name}`);
    }
  
    findProductByName(name: string): Product | undefined {
      return this.products.find(product => product.name === name);
    }
  }
  
  // Ejemplo de uso
  const inventory = new StoreInventory();
  inventory.addProduct({ name: "Laptop", price: 1500, category: "Electronics", stock: 5 });
  inventory.addProduct({ name: "Smartphone", price: 800, category: "Electronics", stock: 10 });
  
  const foundProduct = inventory.findProductByName("Laptop");
  console.log(foundProduct);
  