import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'

import { ShippersAppComponent } from './shippers-app.component'
import { ShipThumbnailComponent } from './ship/ship-thumbnail.component'
import { NavBarComponent } from './nav/navbar.component'
import { ShipGridComponent } from './ship/ship-grid.component';
import { ShipmentService } from './ship/shared/shipment.service';
import { FormatDatePipe } from './common/format-date.pipe';
import { ShipSearchPipe } from './ship/ship-search.pipe';
import { TOASTR_TOKEN, Toastr } from './common/toastr.service';
import { ShipDetailsComponent } from './ship/ship-details/ship-details.component';
import { CreateShipmentComponent } from './ship/create-shipment.component';

// import { appRoutes } from './routes';

declare let toastr: Toastr

@NgModule({
    'imports': [BrowserModule,
                FormsModule],
                // RouterModule.forRoot(appRoutes)],
    'declarations': [ShippersAppComponent,
                    ShipThumbnailComponent,
                    NavBarComponent,
                    ShipGridComponent,
                    FormatDatePipe,
                    ShipSearchPipe,
                    ShipDetailsComponent,
                    CreateShipmentComponent],
    'providers': [
                    ShipmentService,
                    {
                        provide: TOASTR_TOKEN,
                        useValue: toastr
                    }
                ],
    'bootstrap': [ShippersAppComponent]
})

export class AppModule{
}