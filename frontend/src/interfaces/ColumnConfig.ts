export type ColumnSizeType =
  | 'small'
  | 'medium'
  | 'large'
  | 'xlarge'
  | '1/2'
  | '1/4'
  | '2/4'
  | '3/4'
  | '1/3'
  | '2/3';

  type VerticalAlignType = 'middle' | 'top' | 'bottom';

export interface ColumnConfig<TRowType> {
  align?: 'center' | 'start' | 'end';
  aggregate?: 'avg' | 'max' | 'min' | 'sum';
  footer?: React.ReactNode | { aggregate?: boolean };
  header?: string | React.ReactNode | { aggregate?: boolean };
  pin?: boolean;
  plain?: boolean;
  primary?: boolean;
  property: string;
  render?: (datum: TRowType) => React.ReactNode;
  search?: boolean;
  show?: number | { page?: number };
  sortable?: boolean;
  size?: ColumnSizeType | string;
  units?: string;
  verticalAlign?: VerticalAlignType;
}