// EDITAR EL NOMBRE DEL ARCHIVO EN EL MAIN DEL PACKAGE.JSON

// Definición de la interfaz User
interface User {
    id: number;
    name: string;
    email: string;
  }
  
  // Interfaz Admin que hereda de User y añade propiedades específicas
  interface Admin extends User {
    role: string;
  }
  
  // Función para imprimir datos de usuario, acepta tanto User como Admin
  function printUserInfo(user: User | Admin): void {
    console.log(`ID: ${user.id}`);
    console.log(`Name: ${user.name}`);
    console.log(`Email: ${user.email}`);
    
    // Verificar si el usuario es un Admin para imprimir el rol
    if ("role" in user) {
      console.log(`Role: ${user.role}`);
    }
  }
  
  // Ejemplo de uso
  const normalUser: User = { id: 1, name: "Alice", email: "alice@example.com" };
  const adminUser: Admin = { id: 2, name: "Bob", email: "bob@example.com", role: "Administrator" };
  
  printUserInfo(normalUser);
  printUserInfo(adminUser);
  