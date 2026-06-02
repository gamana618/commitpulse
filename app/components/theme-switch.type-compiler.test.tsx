import { describe, expectTypeOf, it } from 'vitest';
import { createAnimation, type AnimationStart, type AnimationVariant } from './theme-switch';

describe('ThemeSwitch Type Compiler Validation', () => {
  it('validates AnimationVariant union values', () => {
    expectTypeOf<AnimationVariant>().toEqualTypeOf<
      'circle' | 'rectangle' | 'gif' | 'polygon' | 'circle-blur'
    >();
  });
  it('validates AnimationStart union values', () => {
    expectTypeOf<AnimationStart>().toEqualTypeOf<
      | 'top-left'
      | 'top-right'
      | 'bottom-left'
      | 'bottom-right'
      | 'center'
      | 'top-center'
      | 'bottom-center'
      | 'bottom-up'
      | 'top-down'
      | 'left-right'
      | 'right-left'
    >();
  });

  it('ensures createAnimation returns required structure', () => {
    const animation = createAnimation('circle');

    expectTypeOf(animation.name).toBeString();
    expectTypeOf(animation.css).toBeString();
  });

  it('accepts optional parameters without compile errors', () => {
    const animation = createAnimation('circle');

    expectTypeOf(animation.name).toBeString();
    expectTypeOf(animation.css).toBeString();
  });

  it('accepts valid exported types in createAnimation', () => {
    const variant: AnimationVariant = 'circle';
    const start: AnimationStart = 'center';

    const animation = createAnimation(variant, start);

    expectTypeOf(animation.name).toBeString();
    expectTypeOf(animation.css).toBeString();
  });
  it('returns an animation object with name and css strings', () => {
    const result = createAnimation('circle', 'center');

    expectTypeOf(result).toMatchTypeOf<{
      name: string;
      css: string;
    }>();
  });
});
