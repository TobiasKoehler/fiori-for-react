import React, { FC } from 'react';
import { ButtonType } from '../../enums/ButtonType';
import { Event } from '@fiori-for-react/utils';
import UI5ToggleButton from '@ui5/webcomponents/dist/ToggleButton';
import { withWebComponent, WithWebComponentPropTypes } from '../../internal/withWebComponent';

export interface ToggleButtonPropTypes extends WithWebComponentPropTypes {
  type?: ButtonType; // @generated
  disabled?: boolean; // @generated
  icon?: string; // @generated
  iconEnd?: boolean; // @generated
  activeIcon?: string; // @generated
  submits?: boolean; // @generated
  pressed?: boolean; // @generated
  onPress?: (event: Event) => void; // @generated
  children?: string; // @generated
}

const ToggleButton: FC<ToggleButtonPropTypes> = withWebComponent<ToggleButtonPropTypes>(UI5ToggleButton);

ToggleButton.displayName = 'ToggleButton';

ToggleButton.defaultProps = {
  type: ButtonType.Default, // @generated
  icon: null, // @generated
  activeIcon: null // @generated
};

export { ToggleButton };
