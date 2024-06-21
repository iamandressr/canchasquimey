import { Injectable, inject } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile, sendPasswordResetEmail } from 'firebase/auth';
import { User } from '../models/user.model';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { getFirestore, setDoc, doc, getDoc } from '@angular/fire/firestore';
import { UtilsService } from './utils.service';
import { Cancha } from '../models/cancha.model';
import { Reserva } from '../models/reserva.model';
import { Jugador } from '../models/jugador.model';
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  private canchasCollection: AngularFirestoreCollection<Cancha>;
  private reservasCollection: AngularFirestoreCollection<Reserva>;

  auth = inject(AngularFireAuth);
  firestore = inject(AngularFirestore);
  utilsSvc = inject(UtilsService);

  constructor(private afs: AngularFirestore) {
    this.canchasCollection = afs.collection<Cancha>('canchas');
    this.reservasCollection = afs.collection<Reserva>('reservas');
  }

  // Métodos para canchas
  getCanchas() {
    return this.canchasCollection.valueChanges();
  }

  addCancha(cancha: Cancha) {
    return this.canchasCollection.add(cancha);
  }

  // Métodos para reservas
  getReservas() {
    return this.reservasCollection.valueChanges();
  }

  addReserva(reserva: Reserva) {
    return this.reservasCollection.add(reserva);
  }


  // Métodos para jugadores
  getJugadoresReserva(reservaId: string): Observable<Jugador[]> {
    return this.afs.collection<Jugador>(`reservas/${reservaId}/jugadores`).valueChanges({ idField: 'id' });
  }

  addJugadorReserva(reservaId: string, jugador: Jugador) {
    return this.afs.collection<Jugador>(`reservas/${reservaId}/jugadores`).add(jugador);
  }

  updateJugadorReserva(reservaId: string, jugadorId: string, jugador: Partial<Jugador>) {
    return this.afs.collection<Jugador>(`reservas/${reservaId}/jugadores`).doc(jugadorId).update(jugador);
  }

  eliminarJugadorReserva(reservaId: string, jugadorId: string) {
    return this.afs.collection<Jugador>(`reservas/${reservaId}/jugadores`).doc(jugadorId).delete();
  }




  //Autenticacion
  //
  getAuth() {
    return getAuth();
  }

  //Acceder
  signIn(user: User) {
    return signInWithEmailAndPassword(getAuth(), user.email, user.password);
  }


  //Registrar
  signUp(user: User){
    return createUserWithEmailAndPassword(getAuth(), user.email, user.password)
  }

  //Actualizar Usuario
  updateUser(displayName: string) {
    return updateProfile(getAuth().currentUser, {displayName})
  }

  //Recuperar contraseña
  sendRecoveryEmail(email: string) {
    return sendPasswordResetEmail(getAuth(), email);
  }

  //Cerrar Sesion
  signOut() {
    getAuth().signOut();
    localStorage.removeItem('user');
    this.utilsSvc.routerLink('/auth');
  }

  //Base de datos
  //Setear documento
  setDocument(path: string, data: any) {
    return setDoc(doc(getFirestore(), path), data);
  }

  //Obtener documento
  async getDocument(path: string) {
    return (await getDoc(doc(getFirestore(), path))).data();
  }

}
