import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
    selector: 'app-hero',
    standalone: true,
    imports: [ButtonModule],
    templateUrl: './hero.component.html',
    styleUrl: './hero.component.css',
})
export class HeroComponent {
    goTo(event: MouseEvent, destination: string): void {
        event.preventDefault();
        const element = document.querySelector(destination);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }
}
