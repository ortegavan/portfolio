import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    ViewChild,
} from '@angular/core';
import { NavigationComponent } from '../../components/navigation/navigation.component';

@Component({
    selector: 'app-menu',
    standalone: true,
    templateUrl: './menu.component.html',
    styleUrl: './menu.component.css',
    imports: [NavigationComponent],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuComponent {
    @ViewChild('menu') menu!: ElementRef;
    @ViewChild('btnMenu') btnMenu!: ElementRef;

    toggleMenu() {
        this.menu.nativeElement.classList.toggle('hide');

        this.btnMenu.nativeElement.classList.toggle('pi-times');
        this.btnMenu.nativeElement.classList.toggle('pi-bars');
    }
}
