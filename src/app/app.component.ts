import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import AOS from 'aos';
import { PrimeNGConfig } from 'primeng/api';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
})
export class AppComponent {
    title = 'portfolio-v2';

    constructor(private primengConfig: PrimeNGConfig) {
        AOS.init({
            once: true,
        });
        this.primengConfig.ripple = true;
    }
}
