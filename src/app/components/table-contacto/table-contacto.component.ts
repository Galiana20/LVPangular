import { Component, OnInit } from '@angular/core';
import { IContacto } from 'src/app/interface/contacto';
import { ContactoService } from 'src/app/services/Contacto/contacto.service';

@Component({
  selector: 'app-table-contacto',
  templateUrl: './table-contacto.component.html',
  styleUrls: ['./table-contacto.component.css'],
})
export class TableContactoComponent implements OnInit {
  displayedColumns: string[] = ['id', 'nombre', 'correo', 'texto', 'actions'];
  dataSource: IContacto[] = [];
  idString: string = '';
  constructor(private _contactoService: ContactoService) {}

  ngOnInit(): void {
    this.getNews();
  }
  getNews() {
    this._contactoService
      .getAllContactos()
      .subscribe((data) => (this.dataSource = data));
  }
  deleteContact(id: number) {
    this._contactoService.deleteContacto(id).subscribe((data) => {
      console.log(data);
      this.getNews();
    });
  }
}
