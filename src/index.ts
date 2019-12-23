import { Range, Validate } from './validator';

class Calculator {
    @Validate
    public updatePercentage(
        @Range(0, 100)  _oldValue: number,
        @Range(0, 100)  _newValue: number,
    ) {
        console.log(_oldValue, _newValue);
    }
}

const calc = new Calculator();


calc.updatePercentage(1, 111);
