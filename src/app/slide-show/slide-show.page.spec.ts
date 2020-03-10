import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SlideShowPage } from './slide-show.page';

describe('SlideShowPage', () => {
  let component: SlideShowPage;
  let fixture: ComponentFixture<SlideShowPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlideShowPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SlideShowPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
