import { IShipment } from './shared/shipments';
import { Component, OnInit, Input} from '@angular/core';
import { ShipmentService } from './shared/shipment.service';
import { FormatDatePipe } from './../common/format-date.pipe';
import { ShipSearchPipe } from './ship-search.pipe';

@Component({
    selector: 'ship-grid',
    templateUrl: 'app/ship/ship-grid.component.html',
    styles: [`
        thead { background-color: black; }
        .table-bordered td, .table-bordered th {
            border-color: #09AFD0;
        }
    `]
})

export class ShipGridComponent implements OnInit{
    shipments: IShipment[];
    @Input() searchInput: string;
    constructor(private shipmentService: ShipmentService){
        
    }

    ngOnInit() {
        this.shipments = this.shipmentService.getShipments();
    }   
}