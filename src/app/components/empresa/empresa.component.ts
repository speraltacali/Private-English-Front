import { Component, OnInit } from '@angular/core';
import { EmpresaService } from 'src/app/Service/Empresa/empresa.service';

@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html',
  styleUrls: ['./empresa.component.css']
})
export class EmpresaComponent implements OnInit {

  constructor(
      private apiEmpresa: EmpresaService
  ) {
    apiEmpresa.getEmpresa().subscribe(response =>
      {
        console.log(response);
      });
  }

  ngOnInit(): void {
  }

}
