import { TestBed } from "@angular/core/testing";
import { CalculatorService } from "./calculator.service";

describe('CalculatorService', () => {
    let service: CalculatorService;
    beforeEach(()=>{
        TestBed.configureTestingModule({});
        service = TestBed.inject(CalculatorService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should be creeated with default values', () => {
        expect(service.resultText()).toBe('0');
        expect(service.subResultText()).toBe('0');
        expect(service.lastOperator()).toBe('+');
    });

    it('should set resultText to "0" when C is pressed', () => {
        service.resultText.set('123');
        service.subResultText.set('456');
        service.lastOperator.set('*');

        service.constructNumber('C');

        expect(service.resultText()).toBe('0');
        expect(service.subResultText()).toBe('0');
        expect(service.lastOperator()).toBe('+');
    });

    it('should updater resultText with number input', () => {
        service.constructNumber('1');
        expect(service.resultText()).toBe('1');
    });

    it('should handle operators correctly', () => {
        service.constructNumber('1');
        service.constructNumber('-');

        expect(service.lastOperator()).toBe('-');
        expect(service.subResultText()).toBe('1');
        expect(service.resultText()).toBe('0');
    });

    it('should calculate result correctly for addition', () => {
        service.constructNumber('1');
        service.constructNumber('+');
        service.constructNumber('2');
        service.constructNumber('=');

        expect(service.resultText()).toBe('3');
    });

    it('should calculate result correctly for substraction', () => {
        service.constructNumber('5');
        service.constructNumber('-');
        service.constructNumber('2');
        service.constructNumber('=');

        expect(service.resultText()).toBe('3');
    });

    it('should calculate result correctly for multiplication', () => {
        service.constructNumber('1');
        service.constructNumber('*');
        service.constructNumber('2');
        service.constructNumber('=');

        expect(service.resultText()).toBe('2');
    });

    it('should calculate result correctly for division', () => {
        service.constructNumber('1');
        service.constructNumber('0');
        service.constructNumber('/');
        service.constructNumber('2');
        service.constructNumber('=');

        expect(service.resultText()).toBe('5');
    });

    it('should handle decimal point correctly', () => {
        service.constructNumber('1');
        service.constructNumber('.');
        service.constructNumber('5');

        expect(service.resultText()).toBe('1.5');
        service.constructNumber('.');
        expect(service.resultText()).toBe('1.5');
    });


    it('should handle decimal point correctly starting with zero', () => {
        service.constructNumber('0');
        service.constructNumber('.');
        service.constructNumber('.');
        service.constructNumber('.');
        service.constructNumber('.');
        service.constructNumber('1');

        expect(service.resultText()).toBe('0.1');
    });

    
    
});

