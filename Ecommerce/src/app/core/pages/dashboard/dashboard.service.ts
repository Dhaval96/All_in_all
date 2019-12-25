import {HttpClient} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {CoreModule} from '../../core.module';
import {MainNavigationModel} from './dashboard.model';

@Injectable()
export class DashboardService {

  prelink = 'http://localhost:8080/Maven_Ecommerce';

  constructor(private httpClient: HttpClient) {

  }

  public save(module: MainNavigationModel): Observable<MainNavigationModel[]> {

    // return of(this.main);
    return this.httpClient.post<MainNavigationModel[]>(this.prelink + '/module/save', module, {})
      .pipe((catchError((error) => {
        return throwError(error);
      })));
  }

  public getAll(): Observable<MainNavigationModel[]> {
    return this.httpClient.get<MainNavigationModel[]>(this.prelink + '/module/getAll', {})
      .pipe(map((response) => {
        return response['data'];
      }));
  }

}
