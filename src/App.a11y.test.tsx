/// <reference types="vitest/globals" />
// @vitest-environment jsdom
import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import App from './App';

expect.extend(toHaveNoViolations);

describe('App accessibility', () => {
  it('should have no a11y violations', async () => {
    const { container } = render(<App />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
