import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavigationComponent } from '../../components/navigation/navigation.component';

@Component({
    selector: 'app-menu',
    standalone: true,
    templateUrl: './menu.component.html',
    styleUrl: './menu.component.css',
    imports: [NavigationComponent],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuComponent {}
