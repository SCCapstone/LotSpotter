import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';


import { TestingUiPage } from './testing-ui.page';

describe('TestingUiPage', () => {
  let component: TestingUiPage;
  let fixture: ComponentFixture<TestingUiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestingUiPage ],
      imports: [IonicModule.forRoot(),ReactiveFormsModule, RouterModule.forRoot([])]
    }).compileComponents();

    jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
    fixture = TestBed.createComponent(TestingUiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should render title', () => {
    const comp = fixture.debugElement.nativeElement;
    expect(comp.querySelector('ion-title').textContent).toContain("Testing UI");
  });

  it('should populate lots', () => {
    expectAsync(component.fetch()).toBeResolved();
  })
});
