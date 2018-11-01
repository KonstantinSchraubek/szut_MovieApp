import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowsListComponent } from './shows-list.component';
import { AppModule } from '../../app.module';
import { DataServiceService } from '../../services/data-service.service';
import { Show } from '../../classes/show';

describe('ShowsListComponent', () => {
  let component: ShowsListComponent;
  let fixture: ComponentFixture<ShowsListComponent>;
  let service: DataServiceService

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowsListComponent);
    component = fixture.componentInstance;
    service = TestBed.get(DataServiceService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get list from service', () => {
    spyOnProperty(service, 'shows').and.returnValue([new Show(1233)]);
    component.shows;
    expect(service.shows[0].id).toBe(1233);
  })

  it('set detailShow on click', () => {
    component.setClicked(new Show(123));
    expect(service.detailShow.id).toBe(123);
  })
});
