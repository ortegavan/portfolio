import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationService } from '../../services/navigation.service';
import { Item } from '../../models/item.model';

@Component({
    selector: 'app-navigation',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './navigation.component.html',
    styleUrl: './navigation.component.css',
})
export class NavigationComponent implements OnInit {
    service = inject(NavigationService);
    general: Item[] = [];
    social: Item[] = [];

    ngOnInit(): void {
        this.general = this.service.getItems().filter((item) => !item.icon);
        this.social = this.service.getItems().filter((item) => item.icon);
    }

    onClick(event: MouseEvent, item: Item): void {
        if (item.external) {
            window.open(item.destination, '_blank');
        } else {
            event.preventDefault();
            const element = document.querySelector(item.destination);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }
}
