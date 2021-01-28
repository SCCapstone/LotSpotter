import { TestBed } from '@angular/core/testing';
import { LoginPage } from 'src/app/pages/login/login.page';


import { BehaviorTestingService } from './behavior-testing.service';

describe('BehaviorTestingService', () => {
  let service: BehaviorTestingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BehaviorTestingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

describe('LoginPage', () => {
  let loginp: LoginPage;
  describe('before logged in', () =>{

    it('displays the login screen', () => {
      expect(loginp.ngOnInit()).toContain('../../../assets/uofscbanner_red.png');
    })
  })
})
