import { Component, DoCheck, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css'],
})
export class CursosComponent implements OnInit, DoCheck {
  constructor(private _route: ActivatedRoute, private _router: Router) {}
  ngDoCheck(): void {
    throw new Error("Method not implemented.");
  }
  ngOnInit(
    this._route.params.suscribe((params: Params) => {


    });
  ): void {};
ngDoCheck();: void {};
}
