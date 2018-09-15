import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'calculator'
})

export class CalculatorPipe implements PipeTransform{
    //data | calculator
    //parameter1 | parameter2
    transform(value: any, value_two: any){
        let operations = `
        Add: ${value + value_two} -
        Subtract: ${value - value_two} -
        Multiply: ${value * value_two} -
        Divide: ${value / value_two}
        `;

        return operations;
    }
}