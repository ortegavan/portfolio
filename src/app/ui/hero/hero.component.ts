import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { Observable, from, concatMap, of, delay, scan } from 'rxjs';
import { Menu } from '../../models/menu.model';
import { MenuService } from '../../services/menu.service';

@Component({
    selector: 'app-hero',
    standalone: true,
    imports: [CommonModule, ButtonModule],
    templateUrl: './hero.component.html',
    styleUrl: './hero.component.css',
})
export class HeroComponent implements OnInit {
    title!: Observable<string>;
    menu!: Observable<Menu[]>;

    menuService = inject(MenuService);

    constructor() {}

    ngOnInit() {
        this.title = from('Desenvolvimento.').pipe(
            concatMap((value) => of(value).pipe(delay(90))),
            scan((acc, value) => acc + value, '')
        );

        this.menu = this.menuService.getMenu();
    }
}
