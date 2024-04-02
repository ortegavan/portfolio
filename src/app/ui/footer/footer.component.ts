import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavigationComponent } from '../../components/navigation/navigation.component';

@Component({
    selector: 'app-footer',
    standalone: true,
    templateUrl: './footer.component.html',
    styleUrl: './footer.component.css',
    imports: [NavigationComponent],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {}
