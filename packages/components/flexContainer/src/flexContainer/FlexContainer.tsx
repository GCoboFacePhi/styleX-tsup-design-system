import { forwardRef, Ref } from "react";
import * as stylex from "@stylexjs/stylex";

export type FlexContainerProps = {
  children: React.ReactNode;
  className?: stylex.StyleXStyles;
  flexDirection?: "row" | "column" | "row-reverse" | "column-reverse";
  wrap?: "wrap" | "no-wrap";
  alignItems?:
    | "baseline"
    | "center"
    | "end"
    | "flex-end"
    | "flex-start"
    | "self-end"
    | "self-start"
    | "start";
  justifyContent?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "baseline"
    | "space-evenly";
  columnGap?: number;
  rowGap?: number;
  flex?: string;
  testId?: string;
  ref?: Ref<HTMLDivElement>;
} & Omit<React.AllHTMLAttributes<HTMLDivElement>, "className">;

function FlexContainerImpl(
  {
    alignItems,
    children,
    className,
    columnGap = 0,
    flex = "",
    flexDirection = "row",
    justifyContent,
    rowGap = 0,
    testId,
    wrap,
    ...rest
  }: FlexContainerProps,
  ref: Ref<HTMLDivElement>,
) {
  return (
    <div
      {...rest}
      {...stylex.props(
        styles.base,
        flexDirection && flexDirectionStyles[flexDirection],
        wrap && wrapStyles[wrap],
        alignItems && alignItemsStyles[alignItems],
        justifyContent && justifyContentStyles[justifyContent],
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
}

export const FlexContainer = forwardRef(FlexContainerImpl);

const alignItemsStyles = stylex.create({
  center: { alignItems: "center" },
  start: { alignItems: "flex-start" },
  end: { alignItems: "flex-end" },
  "flex-start": { alignItems: "flex-start" },
  "flex-end": { alignItems: "flex-end" },
  "self-start": { alignItems: "self-start" },
  "self-end": { alignItems: "self-end" },
  baseline: { alignItems: "baseline" },
});

const justifyContentStyles = stylex.create({
  "flex-start": { justifyContent: "flex-start" },
  "flex-end": { justifyContent: "flex-end" },
  center: { justifyContent: "center" },
  "space-between": { justifyContent: "space-between" },
  "space-around": { justifyContent: "space-around" },
  "space-evenly": { justifyContent: "space-evenly" },
  baseline: { justifyContent: "baseline" },
});

const flexDirectionStyles = stylex.create({
  row: { flexDirection: "row" },
  column: { flexDirection: "column" },
  "row-reverse": { flexDirection: "row-reverse" },
  "column-reverse": { flexDirection: "column-reverse" },
});

const wrapStyles = stylex.create({
  wrap: { flexWrap: "wrap" },
  "no-wrap": { flexWrap: "nowrap" },
});

const styles = stylex.create({
  base: { display: "flex" },
  rowGap: (size: number) => ({ rowGap: `${size}rem` }),
  columnGap: (size: number) => ({ columnGap: `${size}rem` }),
  flex: (flex: string) => ({ flex }),
});
