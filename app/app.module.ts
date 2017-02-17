import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { ShippersAppComponent } from './shippers-app.component'

@NgModule({
    'imports': [BrowserModule],
    'declarations': [ShippersAppComponent],
    bootstrap: [ShippersAppComponent]
})

export class AppModule{}