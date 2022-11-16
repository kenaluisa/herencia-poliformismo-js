/*Importación de clases*/
import {Cliente} from './Cliente.js'
import {CuentaCorriente} from './Cuentas/CuentaCorriente.js';
import { Empleado } from './Cuentas/Empleados/Empleado.js';
import { Director } from './Cuentas/Empleados/Director.js';
import { Gerente } from './Cuentas/Empleados/Gerente.js';
import { SistemaAutenticacion } from './sistemaAutenticacion.js';

const cliente = new Cliente('Leonardo','13804050','123224');
const cliente2 = new Cliente('María','16979808','8989');

const cuentaDeLeonardo = new CuentaCorriente(cliente, '1', '001');
const cuentaDeMaria = new CuentaCorriente(cliente2,'2','002');

const empleado1= new Empleado('Mateo Natanael', '44567890',9000);
empleado1.asignarClave('12345');
console.log(SistemaAutenticacion.login(empleado1,'12345'));

const gerente1= new Gerente('Pedro Riveras', '4490678',18000);
gerente1.asignarClave('12356');
console.log(SistemaAutenticacion.login(gerente1,'12356'));


const director1= new Director('Juan Perez', '43789000',34000);
director1.asignarClave('12333');
console.log(SistemaAutenticacion.login(director1,'12333'));

cliente.asignarClave('9090');
console.log(SistemaAutenticacion.login(cliente,'9090'));