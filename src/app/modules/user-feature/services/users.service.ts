import {Injectable} from "@angular/core";
import {Observable, of} from "rxjs";
import {User} from "../user";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class UsersService {
  constructor(private http: HttpClient) {
  }
  public getUsers():Observable<User[]> {
    // return this.http.get('/data/users.json');
    return new Observable((observer) => {
      observer.next([{
        id: 0,
        name: 'Pepa Novak'
      }]);
    });
  }

}
