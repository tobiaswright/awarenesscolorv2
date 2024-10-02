import { TruncateNamesPipe } from './truncate-names.pipe';

describe('TruncateNamesPipe', () => {
  it('create an instance', () => {
    const pipe = new TruncateNamesPipe();
    expect(pipe).toBeTruthy();
  });
});
