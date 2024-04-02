import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-features',
    standalone: true,
    imports: [],
    templateUrl: './features.component.html',
    styleUrl: './features.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeaturesComponent {}
