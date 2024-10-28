// EDITAR EL NOMBRE DEL ARCHIVO EN EL MAIN DEL PACKAGE.JSON

// Definición de la interfaz Database
interface Database {
    connect(): void;
    disconnect(): void;
    find(query: string): any;
    insert(data: any): void;
    update(id: number, data: any): void;
    delete(id: number): void;
  }
  
  // Implementación de la clase MySQLDatabase
  class MySQLDatabase implements Database {
    connect(): void {
      console.log("Connected to MySQL database.");
    }
  
    disconnect(): void {
      console.log("Disconnected from MySQL database.");
    }
  
    find(query: string): any {
      console.log(`Executing MySQL query: ${query}`);
      return { result: "MySQL query result" };
    }
  
    insert(data: any): void {
      console.log("Inserting data into MySQL:", data);
    }
  
    update(id: number, data: any): void {
      console.log(`Updating record with ID ${id} in MySQL with data:`, data);
    }
  
    delete(id: number): void {
      console.log(`Deleting record with ID ${id} from MySQL`);
    }
  }
  
  // Implementación de la clase SQLiteDatabase
  class SQLiteDatabase implements Database {
    connect(): void {
      console.log("Connected to SQLite database.");
    }
  
    disconnect(): void {
      console.log("Disconnected from SQLite database.");
    }
  
    find(query: string): any {
      console.log(`Executing SQLite query: ${query}`);
      return { result: "SQLite query result" };
    }
  
    insert(data: any): void {
      console.log("Inserting data into SQLite:", data);
    }
  
    update(id: number, data: any): void {
      console.log(`Updating record with ID ${id} in SQLite with data:`, data);
    }
  
    delete(id: number): void {
      console.log(`Deleting record with ID ${id} from SQLite`);
    }
  }
  
  // Ejemplos de uso
  const mysqlDb = new MySQLDatabase();
  mysqlDb.connect();
  mysqlDb.insert({ name: "Product1", price: 100 });
  mysqlDb.find("SELECT * FROM products");
  mysqlDb.update(1, { name: "Updated Product1", price: 150 });
  mysqlDb.delete(1);
  mysqlDb.disconnect();
  
  const sqliteDb = new SQLiteDatabase();
  sqliteDb.connect();
  sqliteDb.insert({ name: "Product2", price: 200 });
  sqliteDb.find("SELECT * FROM products");
  sqliteDb.update(2, { name: "Updated Product2", price: 250 });
  sqliteDb.delete(2);
  sqliteDb.disconnect();
  