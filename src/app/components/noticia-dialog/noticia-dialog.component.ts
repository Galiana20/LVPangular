import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { INoticia } from 'src/app/interface/noticia';
import { NoticiaService } from 'src/app/services/Noticia/noticia.service';

@Component({
  selector: 'app-noticia-dialog',
  templateUrl: './noticia-dialog.component.html',
  styleUrls: ['./noticia-dialog.component.css'],
})
export class NoticiaDialogComponent implements OnInit {
  signupForm: FormGroup;
  constructor(
    public dialogref: MatDialogRef<NoticiaDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public message: string,
    private _noticiaService: NoticiaService,
    private _builder: FormBuilder
  ) {
    this.signupForm = this._builder.group({
      title: ['', Validators.required],
      image: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  onClickSave() {
    this.dialogref.close();
  }

  createtContacto(dataNews: INoticia) {
    this._noticiaService
      .postNews(dataNews)
      .subscribe((data) => console.log(data));
    this.signupForm.reset();
    this.dialogref.close();
  }

  public enviarForm(values: INoticia) {
    this.createtContacto(values);
  }
}
