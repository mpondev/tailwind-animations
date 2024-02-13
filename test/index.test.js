import { generatePluginCSS } from './utils.js';
import { describe, expect, it } from 'vitest';

describe('tailwindcss-animations plugins', () => {
  it('use a predefined animation', async () => {
    const css = await generatePluginCSS({
      content: '<div class="animate-zoom-in">Hello</div>',
    });

    expect(css).toMatch(
      '@keyframes zoom-in{0%{opacity:0;transform:scale(.5)}100%{opacity:1;transform:scale(1)}}.animate-zoom-in{animation:zoom-in 0.6s ease-out}'
    );
  });

  it('use a predefined animation delay', async () => {
    const css = await generatePluginCSS({
      content: '<div class="animate-delay-100">Hello</div>',
    });

    expect(css).toMatch('.animate-delay-100{animation-delay:100ms}');
  });

  it('use a custom animation delay', async () => {
    const css = await generatePluginCSS({
      content: '<div class="animate-delay-[777ms]">Hello</div>',
    });

    expect(css).toMatch('.animate-delay-\\[777ms\\]{animation-delay:777ms}');
  });

  it('use a predefined animation duration', async () => {
    const css = await generatePluginCSS({
      content: '<div class="animate-duration-100">Hello</div>',
    });

    expect(css).toMatch('.animate-duration-100{animation-duration:100ms}');
  });

  it('use a custom animation duration', async () => {
    const css = await generatePluginCSS({
      content: '<div class="animate-duration-[777ms]">Hello</div>',
    });

    expect(css).toMatch(
      '.animate-duration-\\[777ms\\]{animation-duration:777ms}'
    );
  });
});
