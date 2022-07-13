import {ReactNode, ElementType, FC} from 'react';
import clsx from 'clsx';
import Typography, { TypographyTypeMap } from '@mui/material/Typography';
import { styled, alpha } from '@mui/material/styles';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import { generateUtilityClasses } from '@mui/material';
import { onSpaceOrEnter } from '../internals/utils/utils';

const classes = generateUtilityClasses('PrivatePickersMonth', ['root', 'selected']);

export interface MonthProps {
  children: ReactNode;
  disabled?: boolean;
  onSelect: (value: any) => void;
  selected?: boolean;
  value: any;
}

export type PickersMonthClassKey = keyof typeof classes;

const PickersMonthRoot = styled<
  OverridableComponent<TypographyTypeMap<{ component?: ElementType; disabled?: boolean }>>
>(Typography)(({ theme }) => ({
  flex: '1 0 33.33%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'unset',
  backgroundColor: 'transparent',
  border: 0,
  outline: 0,
  ...theme.typography.subtitle1,
  margin: '8px 0',
  height: 36,
  borderRadius: 18,
  cursor: 'pointer',
  '&:focus, &:hover': {
    backgroundColor: alpha(theme.palette.action.active, theme.palette.action.hoverOpacity),
  },
  '&:disabled': {
    pointerEvents: 'none',
    color: theme.palette.text.secondary,
  },
  [`&.${classes.selected}`]: {
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.primary.main,
    '&:focus, &:hover': {
      backgroundColor: theme.palette.primary.dark,
    },
  },
})) as typeof Typography;

/**
 * @ignore - do not document.
 */
export const PickersMonth: FC<MonthProps> = (props) => {
  const { disabled, onSelect, selected, value, ...other } = props;

  const handleSelection = () => {
    onSelect(value);
  };

  return (
    <PickersMonthRoot
      data-mui-test="month"
      component="button"
      type="button"
      className={clsx(classes.root, {
        [classes.selected]: selected,
      })}
      tabIndex={disabled ? -1 : 0}
      onClick={handleSelection}
      onKeyDown={onSpaceOrEnter(handleSelection)}
      color={selected ? 'primary' : undefined}
      variant={selected ? 'h5' : 'subtitle1'}
      disabled={disabled}
      {...other}
    />
  );
};
