import { Component, OnInit } from '@angular/core';
import { report } from 'process';
import { PersonaService } from '../../Service/Persona/persona.service';
import { Persona } from '../../Service/Persona/Model/persona';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {

  ELEMENT_DATA : Persona[];
  displayColumns: string[] = ["nombre","apellido","dni"];
  dataSource = new MatTableDataSource<Persona>();

  constructor(private _service : PersonaService) { }

  ngOnInit(): void {
    this.GetAll();
  }

  public GetAll()
  {
    let resp = this._service.get();
    let date = resp.subscribe(report=>this.dataSource.data=report as Persona[]);
  }

}
