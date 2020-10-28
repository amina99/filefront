import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Demande } from '../model/demande.model';
import { switchMap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ServicesDemandeService {

  private urlDemande:string="http://localhost:8088/demandes";
  private urlDemandes:string="http://localhost:8088/demandes1";
  public baseUrl = 'http://localhost:8088';

  constructor(private httpClient:HttpClient) { }

  
  
onConsulterDemandes():Observable<any> 
{
  return this.httpClient.get<Demande>(this.urlDemandes);
}





addDemande(demande: Demande, selectedFile?: File): Observable<Demande> {
  let observable = of({});

  if (selectedFile) {
    observable = observable.pipe(
      switchMap(() => {
        if (demande.pieceJointeDemande) {
          return this.httpClient.delete(`http://localhost:8088/files${demande.pieceJointeDemande}`);
        } else {
          return of({});
        }
      }),
      switchMap(() => {

        demande.pieceJointeDemande = this.randomStr() + " " + selectedFile.name;

        const formData: FormData = new FormData();
        formData.append('fid',  demande.pieceJointeDemande);
        formData.append('file', selectedFile);

        return this.httpClient.post(`http://localhost:8088/files`, formData, {
          responseType: 'text'
        })
      })
    );
  }

  return observable.pipe(
    switchMap(() => {
      return this.httpClient.post<Demande>(this.urlDemande, demande);
    })
  );
}

private randomStr() {
  let result = '';
  let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnoprstuvwxyz0123456789';

  for (let i = 0; i < 14; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  return result;
}




}
