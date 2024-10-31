import * as stylex from '@stylexjs/stylex';
import { forwardRef, Ref } from 'react';
import { styles } from './FlexConainer.styles';
import { FlexContainerProps } from './model';

const FlexContainer = forwardRef(
  (
    {
      alignItems = 'flex-start',
      children,
      className,
      columnGap = '0',
      flex = '',
      flexDirection = 'row',
      justifyContent = 'flex-start',
      rowGap = '0',
      testId,
      wrap,
      ...rest
    }: FlexContainerProps & React.AllHTMLAttributes<HTMLDivElement>,
    ref: Ref<HTMLDivElement>,
  ) => {
    return (
      <div
        {...rest}
        {...stylex.props(
          styles[flexDirection],
          wrap && styles[wrap],
          styles[`align-items-${alignItems}`],
          styles[`justify-content-${justifyContent}`],
          rowGap ? styles.rowGap(rowGap) : undefined,
          columnGap ? styles.columnGap(columnGap) : undefined,
          flex ? styles.flex(flex) : undefined,
          className,
        )}
        data-test={testId}
        ref={ref}
      >
        {children}
      </div>
    );
  },
);

FlexContainer.displayName = 'FlexContainer';

export { FlexContainer };
