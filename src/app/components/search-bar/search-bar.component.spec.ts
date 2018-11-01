import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBarComponent } from './search-bar.component';
import { AppModule } from '../../app.module';
import { DataServiceService } from '../../services/data-service.service';

describe('SearchBarComponent', () => {
  let component: SearchBarComponent;
  let fixture: ComponentFixture<SearchBarComponent>;
  let service: DataServiceService

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service = TestBed.get(DataServiceService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should trigger search with searchString', () => {
    spyOn(service, 'searchWithAPI');
    component.searchString = "123";
    component.triggerSearch();
    expect(service.searchWithAPI).toHaveBeenCalled();
  })
});
