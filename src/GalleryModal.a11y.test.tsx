/// <reference types="vitest/globals" />
// @vitest-environment jsdom
import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import GalleryModal from './GalleryModal';
import { imgGroup1 } from './data';
import { Router } from 'wouter';

expect.extend(toHaveNoViolations);

describe('GalleryModal accessibility', () => {
  it('should have no a11y violations when open', async () => {
    const firstImage = imgGroup1[0];
    window.history.pushState({}, '', `/p/${firstImage.slug}`);

    const { container } = render(
      <Router>
        <GalleryModal />
      </Router>,
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
