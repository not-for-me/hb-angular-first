import { ProductStatusPipe } from './product-status.pipe';

describe('ProductStatusPipe', () => {
  it('create an instance', () => {
    const pipe = new ProductStatusPipe();
    expect(pipe).toBeTruthy();
  });
});
