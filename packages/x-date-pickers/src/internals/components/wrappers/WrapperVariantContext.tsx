import {createContext} from 'react';

export type WrapperVariant = 'mobile' | 'desktop' | null;

/**
 * TODO consider getting rid from wrapper variant
 * @ignore - internal component.
 */
export const WrapperVariantContext = createContext<WrapperVariant>(null);
