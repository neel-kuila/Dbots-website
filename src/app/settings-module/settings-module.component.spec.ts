import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsModuleComponent } from './settings-module.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('SettingsModuleComponent', () => {
  let component: SettingsModuleComponent;
  let fixture: ComponentFixture<SettingsModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingsModuleComponent ],
      imports: [ 
        HttpClientModule, 
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
