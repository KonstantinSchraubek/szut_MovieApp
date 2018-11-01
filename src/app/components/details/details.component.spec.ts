import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsComponent } from './details.component';
import { AppModule } from '../../app.module';
import { DataServiceService } from '../../services/data-service.service';
import { Show } from '../../classes/show';

describe('DetailsComponent', () => {
  let component: DetailsComponent;
  let fixture: ComponentFixture<DetailsComponent>;
  let service: DataServiceService

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service = TestBed.get(DataServiceService)
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get detailShow from service', () => {
    service.detailShow = new Show(1);
    expect(component.detailShow.id).toBe(1);
  })
});
