
import { Component } from '@angular/core'

@Component({
    selector: 'shippers-app',
    templateUrl: 'app/shippers-app.component.html'
})

export class ShippersAppComponent {
    showGrid: boolean = false;
    searchBy: string;

    toggleDisplay(): void {
        this.showGrid = !this.showGrid;
    }
}