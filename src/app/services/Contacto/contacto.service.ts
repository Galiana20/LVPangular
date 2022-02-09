import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IContacto } from 'src/app/interface/contacto';
import { RequestService } from '../request.service';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {

  constructor(
    private _requestService: RequestService,
  ) { }

  getAllContactos(): Observable<any>{
    return  this._requestService.getRequest('api/contactos');
  }

  postContacto(noticia:IContacto): Observable<any>{
    return  this._requestService.postRequest('api/contactos',noticia);
  }

  deleteContacto(id:number): Observable<any>{
    console.log('he llegado');
    return  this._requestService.deleteRequest('api/contactos',id);
  }
}
 