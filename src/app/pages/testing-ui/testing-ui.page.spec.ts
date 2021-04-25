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

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should populate lots', () => {
    let temp:number = component.fetch();
    expect(temp).toBeGreaterThan(0);
  })

  afterEach(() => {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 5000;
  });
});
