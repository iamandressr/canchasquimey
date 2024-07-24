export interface Jugador {
  id?: string; // ID del documento en Firestore
  nombre: string;
  asistio: boolean;
  reservaId: string; // Propiedad reservaId
  horarioSeleccionado: string; 
}