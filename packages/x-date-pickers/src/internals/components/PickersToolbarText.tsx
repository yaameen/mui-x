import {ReactNode, ElementType, forwardRef} from 'react';
import clsx from 'clsx';
import Typography, { TypographyProps } from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { generateUtilityClasses } from '@mui/material';

export interface PickersToolbarTextProps extends Omit<TypographyProps, 'classes'> {
  selected?: boolean;
  value: ReactNode;
}

const classes = generateUtilityClasses('PrivatePickersToolbarText', ['selected']);

const PickersToolbarTextRoot = styled(Typography)<{
  component?: ElementType;
}>(({ theme }) => ({
  transition: theme.transitions.create('color'),
  color: theme.palette.text.secondary,
  [`&.${classes.selected}`]: {
    color: theme.palette.text.primary,
  },
}));

export const PickersToolbarText = forwardRef<HTMLSpanElement, PickersToolbarTextProps>(
  function PickersToolbarText(props, ref) {
    const { className, selected, value, ...other } = props;

    return (
      <PickersToolbarTextRoot
        ref={ref}
        className={clsx({ [classes.selected]: selected }, className)}
        component="span"
        {...other}
      >
        {value}
      </PickersToolbarTextRoot>
    );
  },
);
