import { Component, OnInit } from '@angular/core';
import { INoticia } from 'src/app/interface/noticia';
import { NoticiaService } from 'src/app/services/Noticia/noticia.service';

@Component({
  selector: 'app-admin-table',
  templateUrl: './admin-table.component.html',
  styleUrls: ['./admin-table.component.css']
})
export class AdminTableComponent implements OnInit {
  
  constructor(private _noticiaService: NoticiaService,) { }

  ngOnInit(): void {
  }
}
