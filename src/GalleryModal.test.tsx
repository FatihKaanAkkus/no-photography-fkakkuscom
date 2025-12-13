/// <reference types="vitest/globals" />
/// <reference types="@testing-library/jest-dom" />
// @vitest-environment jsdom
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import * as matchers from '@testing-library/jest-dom/matchers';
import GalleryModal from './GalleryModal';
import { imgGroup1 } from './data';
import { Route, Router } from 'wouter';
import { memoryLocation } from 'wouter/memory-location';

expect.extend(matchers);

describe('GalleryModal', () => {
  it('renders image, title, details, original link and navigation buttons', () => {
    const firstImage = imgGroup1[0];
    const { hook, searchHook } = memoryLocation({
      path: `/p/${firstImage.slug}`,
      static: true,
    });

    render(
      <Router hook={hook} searchHook={searchHook}>
        <Route path="/p/:slug">
          <GalleryModal />
        </Route>
      </Router>,
    );

    // Image with correct alt and src
    const img = screen.getByRole('img', { name: firstImage.title });
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute(
      'src',
      firstImage.sizes?.full || firstImage.uri,
    );

    // Title
    const title = screen.getByRole('heading', { name: firstImage.title });
    expect(title).toBeInTheDocument();

    // Details (EXIF, location, etc.)
    if (firstImage.exif?.camera) {
      expect(screen.getByText(firstImage.exif.camera)).toBeInTheDocument();
    }
    if (firstImage.exif?.lens) {
      expect(screen.getByText(firstImage.exif.lens)).toBeInTheDocument();
    }
    if (firstImage.location) {
      expect(screen.getByText(firstImage.location)).toBeInTheDocument();
    }

    // View original link
    const viewOriginal = screen.getByRole('link', {
      name: /open full resolution image in new tab/i,
    });
    expect(viewOriginal).toBeInTheDocument();
    expect(viewOriginal).toHaveAttribute('href', firstImage.uri);

    // Close button
    const closeButton = screen.getByRole('button', {
      name: /close image modal/i,
    });
    expect(closeButton).toBeInTheDocument();

    // Next button
    const nextButton = screen.getByRole('button', {
      name: /navigate to next image/i,
    });
    expect(nextButton).toBeInTheDocument();

    // Previous button
    const prevButton = screen.getByRole('button', {
      name: /navigate to previous image/i,
    });
    expect(prevButton).toBeInTheDocument();
  });
});
