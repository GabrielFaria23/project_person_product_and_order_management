import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'RG'
})
export class RGPipe implements PipeTransform {
    transform(value: string, ...args: any[]):any {
        if(value.length === 11) {
            return value.replace(/(\s{2})(\d{2})(\d{3})(\d{3})/g, '\$1-\$2.\$3.\$4');
        }
        return 'error;'
    }
}