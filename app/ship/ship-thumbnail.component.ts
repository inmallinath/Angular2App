import { Component, OnInit, Input, Inject} from '@angular/core'
import { IShipment } from './shared/shipments';
import { ShipmentService } from './shared/shipment.service';
import { FormatDatePipe } from './../common/format-date.pipe';
import { TOASTR_TOKEN, Toastr } from './../common/toastr.service';


@Component({
    selector: 'ship-thumbnail',
    templateUrl: 'app/ship/ship-thumbnail.component.html',
    styles: [`
                .well div { color:#bbb; }
                .thumbnail { min-height: 220px; }
            `]
})

export class ShipThumbnailComponent implements OnInit{
    shipments: IShipment[];
    @Input() searchInput: string;
    constructor(private shipmentService:ShipmentService,
                @Inject(TOASTR_TOKEN) private toastr: Toastr){

    }
    displayCaseNumber(shipmentCase) {
        this.toastr.success(shipmentCase)
    }
    ngOnInit(){
        this.shipments = this.shipmentService.getShipments();
    }
}