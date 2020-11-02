import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TestingUiPage } from './testing-ui.page';

describe('TestingUiPage', () => {
  let component: TestingUiPage;
  let fixture: ComponentFixture<TestingUiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestingUiPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TestingUiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
