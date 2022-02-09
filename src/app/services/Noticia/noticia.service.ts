import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RequestService } from '../request.service';
import { INoticia } from 'src/app/interface/noticia';

@Injectable({
  providedIn: 'root'
})
export class NoticiaService {

  constructor(
    private _requestService: RequestService,
  ) { }

  getAllNews(): Observable<any>{
    return  this._requestService.getRequest('api/noticias');
  }

  postNews(noticia:INoticia): Observable<any>{
    return  this._requestService.postRequest('api/noticias',noticia);
  }

  deleteNews(id:number): Observable<any>{
    return  this._requestService.deleteRequest('api/noticias',id);
  }
}
