import {ReactElement, Key} from 'react';
import clsx from 'clsx';
import Fade from '@mui/material/Fade';
import { styled } from '@mui/material/styles';
import { generateUtilityClasses } from '@mui/material';
import { TransitionGroup } from 'react-transition-group';

interface FadeTransitionProps {
  children: ReactElement;
  className?: string;
  reduceAnimations: boolean;
  transKey: Key;
}

const classes = generateUtilityClasses('PrivatePickersFadeTransitionGroup', ['root']);

const animationDuration = 500;

const PickersFadeTransitionGroupRoot = styled(TransitionGroup)({
  display: 'block',
  position: 'relative',
});

/**
 * @ignore - do not document.
 */
export const PickersFadeTransitionGroup = ({
  children,
  className,
  reduceAnimations,
  transKey,
}: FadeTransitionProps) => {
  if (reduceAnimations) {
    return children;
  }

  return (
    <PickersFadeTransitionGroupRoot className={clsx(classes.root, className)}>
      <Fade
        appear={false}
        mountOnEnter
        unmountOnExit
        key={transKey}
        timeout={{ appear: animationDuration, enter: animationDuration / 2, exit: 0 }}
      >
        {children}
      </Fade>
    </PickersFadeTransitionGroupRoot>
  );
};
