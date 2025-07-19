import { ComponentFixture, TestBed } from '@angular/core/testing';
import { App } from './app';

describe('App', () => {
  let fixture: ComponentFixture<App>
  let compiled:  HTMLElement



  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
    }).compileComponents();

      //envoltorio del componente que estamos probando
      fixture = TestBed.createComponent(App);

      compiled = fixture.nativeElement as HTMLElement;
  });

  it('should create the app', () => {
    //instancia de nuestro app component
    const app = fixture.componentInstance;

    expect(app).toBeTruthy();
  });

  it('should render router-outlet', () => {
    expect(compiled.querySelector('router-outlet')).not.toBeNull();
  });

  it('should render router-outlet wrapped with css classes', () => {
    const divElement = compiled.querySelector('div');

    const mustHaveClasses = "min-w-screen min-h-screen bg-slate-600 flex items-center justify-center px-5 py-5".split(' ');

    expect(divElement).not.toBeNull();

    // divElement?.classList.forEach(className => {
    //   expect(mustHaveClasses).toContain(className);
    // });

    const divClasses = divElement?.classList.value.split(' ');

    mustHaveClasses.forEach(className => {
      expect(divClasses).toContain(className);
    });
  });
});
