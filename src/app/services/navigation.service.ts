import { Injectable } from '@angular/core';
import { Item } from '../models/item.model';

@Injectable({
    providedIn: 'root',
})
export class NavigationService {
    public getItems(): Item[] {
        return [
            { title: 'Home', destination: '#home' },
            { title: 'Habilidades', destination: '#habilidades' },
            { title: 'Projetos', destination: '#projetos' },
            { title: 'Contato', destination: '#contato' },
            {
                title: 'Blog',
                destination: 'https://medium.com/@ortegavan',
                external: true,
            },
            {
                icon: 'pi-linkedin',
                destination: 'https://www.linkedin.com/in/ortegavan/',
                external: true,
            },
            {
                icon: 'pi-github',
                destination: 'https://github.com/ortegavan',
                external: true,
            },
            {
                icon: 'pi-instagram',
                destination: 'https://www.instagram.com/ortegavan/',
                external: true,
            },
        ];
    }
}
