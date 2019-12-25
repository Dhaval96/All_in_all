import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpEventType } from '@angular/common/http';
import { Observable } from 'rxjs'
import { tap } from 'rxjs/operators';
import { ToasterComponent } from '../common/toaster/toaster.component';
import { MatSnackBar } from '@angular/material';
import { SpinnerService } from '../common/spinner/spinner.service';

export class GlobalInterseptorService implements HttpInterceptor {

    constructor(private _snackbar: MatSnackBar, private _SpinnerService: SpinnerService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler):
        Observable<HttpEvent<any>> {

        // . if we want to send headers and params...

        this._SpinnerService.show();
        return next.handle(req).pipe(
            tap((response) => {

                if (response.type === HttpEventType.Response) {
                    this._SpinnerService.hide();
                }






                console.log(response);
                if (response['body'] && response['body']['status'] !== 206) {

                    this._snackbar.openFromComponent(ToasterComponent, {
                        data: { status: response['body']['status'], message: response['body']['message'] },
                    })
                }
            })

        )

    }

}