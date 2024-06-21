export interface Reserva {
  id?: string; // ID del documento en Firestore
  fecha: Date;
  hora: string;
  canchaId: string; // ID de la cancha reservada
  clienteNombre: string; // Nombre del cliente que reservó
  estadoPago: 'rojo' | 'amarillo' | 'gris'; // Estado de pago
  montoPagado?: number; // Monto pagado (si es pago parcial)
}
