import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
})
export class HomeComponent {
    constructor(private title: Title) {
        this.title.setTitle(
            'Vanessa Ortega | Frontend Developer | Angular | TypeScript | RxJS | UX | UI',
        );
    }
}
