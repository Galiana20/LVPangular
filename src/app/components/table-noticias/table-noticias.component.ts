import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { INoticia } from 'src/app/interface/noticia';
import { NoticiaService } from 'src/app/services/Noticia/noticia.service';
import { NoticiaDialogComponent } from '../noticia-dialog/noticia-dialog.component';


@Component({
  selector: 'app-table-noticias',
  templateUrl: './table-noticias.component.html',
  styleUrls: ['./table-noticias.component.css']
})
export class TableNoticiasComponent implements OnInit {
  displayedColumns: string[] = ['id','title','imageText', 'imagen','actions'];
  dataSource: INoticia []=[] ;
  constructor(
    private _noticiaService: NoticiaService,
    public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getNews();
  }
  getNews() {
    this._noticiaService
      .getAllNews()
      .subscribe((data) => (this.dataSource = data));
  }
  openDialog() {
    const dialogRef = this.dialog.open(NoticiaDialogComponent, {
      width:'40%'
    });
    dialogRef.afterClosed().subscribe(res=>{
      console.log(res)
      this.getNews();
    });
  }
  deleteNews(id: number) {
    this._noticiaService.deleteNews(id).subscribe((data) => {
      console.log(data);
      this.getNews();
    });
  }

}
