import { Component, OnInit } from '@angular/core';
import { ShipmentService } from './../shared/shipment.service';

@Component({
    templateUrl:  '/app/ship/ship-details/ship-details.component.html'
})

export class ShipDetailsComponent implements OnInit{
    shipment: any
    constructor(private shipmentService: ShipmentService){

    }

    ngOnInit() {
        this.shipment = this.shipmentService.getShipment('CS452694');
    }
}