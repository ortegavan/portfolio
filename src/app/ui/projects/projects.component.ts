import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TagModule } from 'primeng/tag';

@Component({
    selector: 'app-projects',
    standalone: true,
    imports: [TagModule],
    templateUrl: './projects.component.html',
    styleUrl: './projects.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsComponent {
    onClick(event: MouseEvent): void {
        event.preventDefault();
        const element = document.querySelector('#contato');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }
}
