import * as stylex from '@stylexjs/stylex';
// import { varColors } from '@ui/theme';
import { FlexContainerProps } from './model';

export const styles = stylex.create({
  // Flex Direction
  row: {
    display: 'flex',
    flexDirection: 'row',
    //  backgroundColor: varColors.primary100,
  },
  column: {
    display: 'flex',
    flexDirection: 'column',
  },
  'row-reverse': {
    display: 'flex',
    flexDirection: 'row-reverse',
  },
  'column-reverse': {
    display: 'flex',
    flexDirection: 'column-reverse',
  },
  // Wrap
  wrap: {
    flexWrap: 'wrap',
  },
  'no-wrap': {
    flexWrap: 'nowrap',
  },
  // Justify Content
  'justify-content-flex-start': {
    justifyContent: 'flex-start',
  },
  'justify-content-flex-end': {
    justifyContent: 'flex-end',
  },
  'justify-content-center': {
    justifyContent: 'center',
  },
  'justify-content-space-between': {
    justifyContent: 'space-between',
  },
  'justify-content-space-around': {
    justifyContent: 'space-around',
  },
  'justify-content-space-evenly': {
    justifyContent: 'space-evenly',
  },
  'justify-content-baseline': {
    justifyContent: 'baseline',
  },
  // Align Items
  'align-items-center': {
    alignItems: 'center',
  },
  'align-items-start': {
    alignItems: 'flex-start',
  },
  'align-items-end': {
    alignItems: 'flex-end',
  },
  'align-items-flex-start': {
    alignItems: 'flex-start',
  },
  'align-items-flex-end': {
    alignItems: 'flex-end',
  },
  'align-items-self-start': {
    alignItems: 'self-start',
  },
  'align-items-self-end': {
    alignItems: 'self-end',
  },
  'align-items-baseline': {
    alignItems: 'baseline',
  },
  rowGap: (size: FlexContainerProps['rowGap']) => ({
    rowGap: `${size}rem`,
  }),
  columnGap: (size: FlexContainerProps['columnGap']) => ({
    columnGap: `${size}rem`,
  }),
  flex: (flex: FlexContainerProps['flex']) => ({
    flex,
  }),
});
