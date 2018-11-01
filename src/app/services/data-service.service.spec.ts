import { TestBed, inject } from '@angular/core/testing';

import { DataServiceService } from './data-service.service';
import { AppModule } from '../app.module';
import { async } from 'rxjs/internal/scheduler/async';
import { Show } from '../classes/show';

let service;
let http;

function httpGetReturn(value) {
  return () => {
    return {
      toPromise: () => {
        return value ? JSON.parse(value) : value;
      }
    };
  };
}

describe('DataServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppModule]
    });

    service = TestBed.get(DataServiceService)
    http = service.http;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have show array', () => {
    expect(service.shows).toBeTruthy();
  });

  it('should search with api', async () => {
    spyOn(http, 'get').and.callFake(httpGetReturn(breakingBadResult));

    const data = await service.searchWithAPI("");

    let s: Show = service.shows[0];
    expect(s.id).toBe(169);
    expect(s.label).toBe("Breaking Bad");
    expect(s.picture).toBe("http://static.tvmaze.com/uploads/images/medium_portrait/0/2400.jpg");
  })
});

let breakingBadResult = '{"id":169,"url":"http://www.tvmaze.com/shows/169/breaking-bad","name":"Breaking Bad","type":"Scripted","language":"English","genres":["Drama","Crime","Thriller"],"status":"Ended","runtime":60,"premiered":"2008-01-20","officialSite":"http://www.amc.com/shows/breaking-bad","schedule":{"time":"22:00","days":["Sunday"]},"rating":{"average":9.3},"weight":94,"network":{"id":20,"name":"AMC","country":{"name":"United States","code":"US","timezone":"America/New_York"}},"webChannel":null,"externals":{"tvrage":18164,"thetvdb":81189,"imdb":"tt0903747"},"image":{"medium":"http://static.tvmaze.com/uploads/images/medium_portrait/0/2400.jpg","original":"http://static.tvmaze.com/uploads/images/original_untouched/0/2400.jpg"},"summary":"<p><b>Breaking Bad</b> follows protagonist Walter White, a chemistry teacher who lives in New Mexico with his wife and teenage son who has cerebral palsy. White is diagnosed with Stage III cancer and given a prognosis of two years left to live. With a new sense of fearlessness based on his medical prognosis, and a desire to secure his family\'s financial security, White chooses to enter a dangerous world of drugs and crime and ascends to power in this world.The series explores how a fatal diagnosis such as White\'s releases a typical man from the daily concerns and constraints of normal society and follows his transformation from mild family man to a kingpin of the drug trade.</p>","updated":1534515563,"_links":{"self":{"href":"http://api.tvmaze.com/shows/169"},"previousepisode":{"href":"http://api.tvmaze.com/episodes/12253"}}}';