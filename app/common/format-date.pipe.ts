import { Pipe, PipeTransform } from '@angular/core'

declare let moment: any

@Pipe({
    name: 'formatDate'
})

export class FormatDatePipe implements PipeTransform{
    transform(date: any, args?: any): any{
        let d = new Date(date)
        return moment(d).format('DD/MM/YYYY');
    }
} 