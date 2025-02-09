import { AllowNumericOnlyPipe } from './allow-numeric-only.pipe';

describe('AllowNumericOnlyPipe', () => {
  it('create an instance', () => {
    const pipe = new AllowNumericOnlyPipe();
    expect(pipe).toBeTruthy();
  });
});
