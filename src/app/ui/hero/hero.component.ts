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
    irPara(ancora: string) {
        const elementoDestino = document.getElementById('contato');
        elementoDestino?.scrollIntoView({ behavior: 'smooth' });
    }
}
