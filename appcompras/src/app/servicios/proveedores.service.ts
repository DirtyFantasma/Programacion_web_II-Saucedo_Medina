import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProveedoresService {
getproveedores(){
  return this.proveedores;
}
proveedores: any = [
{
  nombre: 'Telefonica Movistar',
  direccion: 'Paseo de la reforma, #100',
  cp: '28019',
  localidad: 'CDMX',
  estado: 'CDMX',
  telefono: 551234567,
  email: 'info@telefonicamovistar.com.mx',
  contacto: 'juan camaney'
},
{
  nombre: 'Telcel',
  direccion: 'Paseo de la reforma, #101',
  cp: '28010',
  localidad: 'CDMX',
  estado: 'CDMX',
  telefono: 557654321,
  email: 'info@telcel.com.mx',
  contacto: 'Benito juárez'
}
]
  constructor() { }
}
