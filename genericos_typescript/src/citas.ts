/*1. CLASE CITA*/
class infoCita{
    paciente: string;
    doctor:string;
    fecha: string;
    hora: string;
    motivo:string;

    constructor(paciente: string, doctor:string, fecha:string, hora:string, motivo:string){
        this.paciente = paciente;
        this.doctor= doctor;
        this.fecha= fecha;
        this.hora= hora;
        this.motivo= motivo;
    }
}
class cita <T extends infoCita> {
    private citas: T[] = []; 

    agregar_cita(cita: T): void{
        this.citas.push(cita)
    }
    eliminar_cita(cita:T): T[] | undefined {
        let index = this.citas.indexOf(cita);
        let del = this.citas.splice(index,1);
        return del
    }
    ver_citas():T[] | undefined{
        return this.citas
    }
    ver_cita(nombre:string):T| undefined{
        let citaB = this.citas.find(informacion => informacion.paciente === nombre);
        return citaB
    }
}
const cita1 = new infoCita("Alfredo Perez", "Medico 1", "20-02-2025","8:00am", "dolor de cabeza");
const cita2 = new infoCita("Juan Perez", "Medico 1", "20-02-2025","8:00am", "dolor de cabeza");
const cita3 = new infoCita("Michael Perez", "Medico 1", "20-02-2025","8:00am", "dolor de cabeza");
const cita4 = new infoCita("Anastasio Perez", "Medico 1", "20-02-2025","8:00am", "dolor de cabeza");
const cita5 = new infoCita("Campo Perez", "Medico 1", "20-02-2025","8:00am", "dolor de cabeza");

let cita_med = new cita();
cita_med.agregar_cita(cita1)
cita_med.agregar_cita(cita2)
cita_med.agregar_cita(cita3)
cita_med.agregar_cita(cita4)
cita_med.agregar_cita(cita5)
console.log(cita_med.ver_citas())
console.log(cita_med.eliminar_cita(cita2))
console.log(cita_med.ver_citas())
console.log(cita_med.ver_cita("Anastasio Perez"))