import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed, async } from '@angular/core/testing';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';
import { Router, RouterModule, PreloadAllModules, Routes } from '@angular/router';
import { Geolocation } from '@ionic-native/geolocation/ngx';

import { HttpClientTestingModule } from "@angular/common/http/testing";
import { CommonModule } from '@angular/common';


describe('AppComponent', () => {

  let statusBarSpy;
  let splashScreenSpy;
  let platformReadySpy;
  let platformSpy;

  beforeEach(async(() => {
    statusBarSpy = jasmine.createSpyObj('StatusBar', ['styleDefault']);
    splashScreenSpy = jasmine.createSpyObj('SplashScreen', ['hide']);
    platformReadySpy = Promise.resolve();
    platformSpy = jasmine.createSpyObj('Platform', { ready: platformReadySpy });

    statusBarSpy.styleDefault();
    splashScreenSpy.hide();

    TestBed.configureTestingModule({
      imports: [ 
        CommonModule,
        HttpClientTestingModule,
        RouterTestingModule,
      ],
      declarations: [AppComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        { provide: StatusBar, useValue: statusBarSpy },
        { provide: SplashScreen, useValue: splashScreenSpy },
        { provide: Platform, useValue: platformSpy },
        { provide: Geolocation },
        { provide: Router, useClass: class { navigate = jasmine.createSpy("navigate"); }},
      ],
    }).compileComponents();
  }));

  it('should initialize the app', async () => {
    TestBed.createComponent(AppComponent);
    await platformReadySpy;
    expect(platformSpy.ready).toHaveBeenCalled();
    
    expect(statusBarSpy.styleDefault).toHaveBeenCalled();
    expect(splashScreenSpy.hide).toHaveBeenCalled();
  });

});
