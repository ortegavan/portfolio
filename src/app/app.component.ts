import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';
import { ButtonModule } from 'primeng/button';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, ButtonModule],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
})
export class AppComponent {
    title = 'portfolio-v2';

    constructor(private primengConfig: PrimeNGConfig) {
        this.primengConfig.ripple = true;
    }

    @HostListener('window:scroll', ['$event'])
    onWindowScroll() {
        const hide = 'hide';
        let div = document.querySelector<HTMLDivElement>('#toUp');

        if (
            document.body.scrollTop > 20 ||
            document.documentElement.scrollTop > 20
        ) {
            div!.classList.remove(hide);
        } else {
            div!.classList.add(hide);
        }
    }

    goToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}
