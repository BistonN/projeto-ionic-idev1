import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

export class UsuariosRoute {
    constructor(private http: HttpClient) {}

    public getToken(): string {
        const usuario = JSON.parse(localStorage.getItem('currentUser'));
        return 'Bearer ' + (usuario ? usuario.token : '');
      }

    public getHeader(): { headers: HttpHeaders } {
        return {
          headers: new HttpHeaders({
            Accept: 'application/json',
            Authorization: this.getToken()
          })
        };
      }

    login = async (body: any):Promise<any> => {
        return this.http.post('localhost:3000/tp01/usuarios/login', body);
    }
}
