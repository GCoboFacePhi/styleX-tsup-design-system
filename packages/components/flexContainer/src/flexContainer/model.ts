import {
  CompiledStyles,
  InlineStyles,
  StyleXArray,
} from '@stylexjs/stylex/lib/StyleXTypes';
import { Ref } from 'react';

export type AlignItemsProps =
  | 'baseline'
  | 'center'
  | 'end'
  | 'flex-end'
  | 'flex-start'
  | 'self-end'
  | 'self-start'
  | 'start';

export type JustifyContentProps =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'baseline'
  | 'space-evenly';

export type FlexContainerProps = {
  children: React.ReactNode;
  // className?: StyleXStyles;
  className?: StyleXArray<
    | (null | undefined | CompiledStyles)
    | boolean
    | Readonly<[CompiledStyles, InlineStyles]>
  >;
  flexDirection?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  wrap?: 'wrap' | 'no-wrap';
  alignItems?: AlignItemsProps;
  justifyContent?: JustifyContentProps;
  columnGap?: string;
  rowGap?: string;
  flex?: string;
  testId?: string;
  ref?: Ref<HTMLDivElement>;
} & React.AllHTMLAttributes<HTMLDivElement>;
