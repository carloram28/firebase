import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map } from 'rxjs';
import { Game } from '../../interfaces/interfaces';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent implements OnInit {
  juegos: any[] = [];
  constructor(private db: AngularFirestore) {

  }
  ngOnInit(): void {
    this.db.collection<Game>('goty').valueChanges()
      .pipe(
        map((resp: Game[]) => resp.map(({ name, votos }) => ({ name, value: votos })))
      )
      .subscribe(juegos => {
        this.juegos = juegos;
      });

  }
}




