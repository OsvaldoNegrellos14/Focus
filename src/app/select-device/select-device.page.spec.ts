import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SelectDevicePage } from './select-device.page';

describe('SelectDevicePage', () => {
  let component: SelectDevicePage;
  let fixture: ComponentFixture<SelectDevicePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectDevicePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SelectDevicePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
