import { Show } from './show';

describe('Show', () => {
  it('should create an instance', () => {
    expect(new Show()).toBeTruthy();
  });

  it('should be filled', () => {
    let show: Show = new Show(1, 'label', 'summary', 'picture');
    expect(show.id).toBe(1);
    expect(show.label).toBe('label');
    expect(show.summary).toBe('summary');
    expect(show.picture).toBe('picture');
  });
});
