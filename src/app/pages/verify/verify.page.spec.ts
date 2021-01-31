import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { IonicModule } from '@ionic/angular';

import { VerifyPage } from './verify.page';

describe('VerifyPage', () => {
  let component: VerifyPage;
  let fixture: ComponentFixture<VerifyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerifyPage ],
      imports: [IonicModule.forRoot()],
      providers: [ AngularFirestore ],
    }).compileComponents();

    fixture = TestBed.createComponent(VerifyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
