import { Injectable } from '@angular/core';
import { Menu } from '../models/menu.model';
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class MenuService {
    items = [
        { title: 'Home', target: '#home' },
        { title: 'Habilidades', target: '#habilidades' },
        { title: 'Projetos', target: '#projetos' },
        { title: 'Currículo', target: '#curriculo' },
        { title: 'Contato', target: '#contato' },
    ] as Menu[];

    public getMenu(): Observable<Menu[]> {
        return of(this.items);
    }
}
