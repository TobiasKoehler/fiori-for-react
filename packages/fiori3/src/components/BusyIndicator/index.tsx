import React, { FC } from 'react';
import { Fiori3CommonProps } from '../../interfaces/Fiori3CommonProps';
import styles from './BusyIndicator.jss';
import { withStyles } from '@fiori-for-react/core/utils/withStyles';
import { StyleClassHelper } from '@fiori-for-react/utils';
import { ClassProps } from '@fiori-for-react/core/types';

export interface BusyIndicatorProps extends Fiori3CommonProps {
  /**
   * Flag whether the Busy Indicator should show up immediately or with 1 second delay if set to true.
   */
  fadeIn?: boolean;
}

interface BusyIndicatorInternalProps extends BusyIndicatorProps, ClassProps {}

export const BusyIndicator: FC<BusyIndicatorProps> = withStyles(styles)((props) => {
  const { fadeIn, classes, className, style, tooltip } = props as BusyIndicatorInternalProps;

  const classNameBusyIndicator = StyleClassHelper.of(classes.busyIndicator);

  if (fadeIn === true) classNameBusyIndicator.put(classes.fadeIn);

  if (className) {
    classNameBusyIndicator.put(className);
  }

  return (
    <div
      className={classNameBusyIndicator.valueOf()}
      data-component-name="BusyIndicator"
      aria-busy="true"
      role="progressbar"
      tabIndex={0}
      aria-valuemin={0}
      aria-valuemax={100}
      title={tooltip || 'Please wait'}
      style={style}
      data-ui5-slot={props['data-ui5-slot']}
    >
      <div className={classes.circle} />
      <div className={classes.circle} />
      <div className={classes.circle} />
    </div>
  );
});

BusyIndicator.defaultProps = {
  fadeIn: false
};
