import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IContacto } from 'src/app/interface/contacto';
import { ContactoService } from 'src/app/services/Contacto/contacto.service';

@Component({
  selector: 'app-form-contacto',
  templateUrl: './form-contacto.component.html',
  styleUrls: ['./form-contacto.component.css'],
})
export class FormContactoComponent implements OnInit {
  public contactos: IContacto[] = [];
  signupForm: FormGroup;

  constructor(
    private _contactoService: ContactoService,
    private _builder: FormBuilder
  ) {
    this.signupForm = this._builder.group({
      nombre: ['', Validators.required],
      correo: ['', Validators.compose([Validators.email, Validators.required])],
      texto: ['', Validators.required],
      acceptTerms:['',Validators.requiredTrue]
    });
  }

  ngOnInit(): void {
  }

  createtContacto(dataContacto: IContacto) {
    this._contactoService
      .postContacto(dataContacto)
      .subscribe((data) => console.log(data));

    this.signupForm.reset();
  }
  getContactos() {
    this._contactoService
      .getAllContactos()
      .subscribe((data) => (this.contactos = data));
  }

  public enviarForm(values: IContacto) {
    delete values.acceptTerms
    this.createtContacto(values);
  }
}
