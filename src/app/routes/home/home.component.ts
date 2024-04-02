import { Component } from '@angular/core';
import { HeroComponent } from '../../ui/hero/hero.component';
import { MenuComponent } from '../../ui/menu/menu.component';
import { FeaturesComponent } from '../../ui/features/features.component';
import { ProjectsComponent } from '../../ui/projects/projects.component';
import { ContactComponent } from '../../ui/contact/contact.component';
import { FooterComponent } from '../../ui/footer/footer.component';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [
        HeroComponent,
        MenuComponent,
        FeaturesComponent,
        ProjectsComponent,
        ContactComponent,
        FooterComponent,
    ],
})
export class HomeComponent {}
