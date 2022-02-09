import { Component, OnInit } from '@angular/core';
import { NoticiaService } from 'src/app/services/Noticia/noticia.service';
import { INoticia } from 'src/app/interface/noticia';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.css'],
})
export class NoticiaComponent implements OnInit {
  public noticias: INoticia[] = [];

  constructor(
    private _noticiaService: NoticiaService,
  ) {}

  ngOnInit(): void {
    this.getNews();
  }

  getNews() {
    this._noticiaService
      .getAllNews()
      .subscribe((data) => (this.noticias = data));
  }
}
