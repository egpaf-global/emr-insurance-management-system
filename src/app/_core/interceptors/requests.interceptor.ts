import {Injectable} from "@angular/core";
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "src/environments/environment";
import {LocalStorageService} from "../../shared/services/localStorage.service";
import {Token} from "../../public/auth/signin/signin.model";

@Injectable()

export class RequestsInterceptor implements HttpInterceptor {
    constructor(private localStorageService: LocalStorageService) {
    }
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const requestUrl: string = environment.apiUrl + request.url;
        const accessToken: Token = this.localStorageService.get("token");

        if(accessToken) {
            request = request.clone({
                headers: request.headers.set('Authorization', accessToken.token)
            });
        }

        request = request.clone({ url: requestUrl });

        return next.handle(request);
    }
}
