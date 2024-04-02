import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-contact',
    standalone: true,
    imports: [],
    templateUrl: './contact.component.html',
    styleUrl: './contact.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactComponent {}
