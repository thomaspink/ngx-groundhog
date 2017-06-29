import { LabelDirective } from './label.directive';

describe('LabelDirective', () => {
  it('should create an instance', () => {
    const directive = new LabelDirective();
    expect(directive).toBeTruthy();
  });
  it('should always have a for property', () => {
    const directive = new LabelDirective();
    expect(directive.for).toBeTruthy();
  });
});
