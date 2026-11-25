import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Plat } from '../add-plat/model/plat.model';
import { typecuisine } from '../add-plat/model/typecuisine.model';
import { environment } from '../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class PlatService {

  apiURL: string = environment.apiURL || 'http://localhost:8090/plats/api';

  constructor(private http: HttpClient) {}

  listePlats(): Observable<Plat[]> {
    return this.http.get<Plat[]>(this.apiURL);
  }

  ajouterPlat(plat: Plat): Observable<Plat> {
    return this.http.post<Plat>(this.apiURL, plat, httpOptions);
  }

  supprimerPlat(id: number): Observable<any> {
    const url = `${this.apiURL}/${id}`;
    return this.http.delete(url, httpOptions);
  }

  consulterPlat(id: number): Observable<Plat> {
    const url = `${this.apiURL}/${id}`;
    return this.http.get<Plat>(url);
  }

  updatePlat(plat: Plat): Observable<Plat> {
    return this.http.put<Plat>(this.apiURL, plat, httpOptions);
  }

  listeTypecuisines(): Observable<typecuisine[]> {
    return this.http.get<typecuisine[]>(`${this.apiURL}/type`);
  }

  listeCategories(): Observable<typecuisine[]> {
    return this.listeTypecuisines();
  }

  consulterTypecuisine(id: number): Observable<typecuisine> {
    return this.http.get<typecuisine>(`${this.apiURL}/type/${id}`);
  }

  ajouterTypecuisine(type: typecuisine): Observable<typecuisine> {
    return this.http.post<typecuisine>(`${this.apiURL}/type`, type, httpOptions);
  }

  rechercherParTypecuisine(idType: number): Observable<Plat[]> {
    return this.http.get<Plat[]>(`${this.apiURL}/platstype/${idType}`);
  }

  rechercherParNom(nom: string): Observable<Plat[]> {
    return this.http.get<Plat[]>(`${this.apiURL}/platsByName/${nom}`);
  }
}

export { Plat };
