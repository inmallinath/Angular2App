import { IShipment } from './shared/shipments';
import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'searchShipment'
})

export class ShipSearchPipe implements PipeTransform{
    transform(value: IShipment[], searchParam: string): IShipment[] {
        searchParam = searchParam ? searchParam.toLocaleLowerCase() : null;
        return searchParam ? value.filter((shipment: IShipment) => 
            shipment.model.toLocaleLowerCase().indexOf(searchParam) !== -1) : value;
    }
}