// modificar en package json el nombre del archivo para el scrit start

// Definición de la clase CuentaBancaria
class CuentaBancaria {
    numeroCuenta: string;
    titular: string;
    saldo: number;
  
    constructor(numeroCuenta: string, titular: string, saldoInicial: number) {
      this.numeroCuenta = numeroCuenta;
      this.titular = titular;
      this.saldo = saldoInicial;
    }
  
    depositar(monto: number): void {
      this.saldo += monto;
      console.log(`Depósito de ${monto} realizado. Nuevo saldo: ${this.saldo}`);
    }
  
    retirar(monto: number): void {
      if (monto > this.saldo) {
        console.log("Fondos insuficientes.");
      } else {
        this.saldo -= monto;
        console.log(`Retiro de ${monto} realizado. Nuevo saldo: ${this.saldo}`);
      }
    }
  
    consultarSaldo(): void {
      console.log(`El saldo actual de la cuenta ${this.numeroCuenta} es: ${this.saldo}`);
    }
  }
  
  // Creación de varias cuentas y prueba de los métodos
  const cuenta1 = new CuentaBancaria("001", "Juan Perez", 1000);
  const cuenta2 = new CuentaBancaria("002", "Ana Gomez", 2000);
  
  cuenta1.depositar(500);
  cuenta1.retirar(300);
  cuenta1.consultarSaldo();
  
  cuenta2.depositar(1000);
  cuenta2.retirar(2500);
  cuenta2.consultarSaldo();
  