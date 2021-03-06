import React, { FC, ReactNode } from 'react';
import { IconColor } from '@fiori-for-react/core/enums/IconColor';
import UI5Tab from '@ui5/webcomponents/dist/Tab';
import { withWebComponent, WithWebComponentPropTypes } from '../../internal/withWebComponent';

export interface TabPropTypes extends WithWebComponentPropTypes {
  text?: string; // @generated
  disabled?: boolean; // @generated
  additionalText?: string; // @generated
  icon?: string; // @generated
  iconColor?: IconColor; // @generated
  selected?: boolean; // @generated
  children?: ReactNode | ReactNode[]; // @generated
}

const Tab: FC<TabPropTypes> = withWebComponent<TabPropTypes>(UI5Tab);

Tab.displayName = 'Tab';

Tab.defaultProps = {
  text: '', // @generated
  disabled: false, // @generated
  additionalText: '', // @generated
  icon: '', // @generated
  iconColor: IconColor.Default, // @generated
  selected: false // @generated
};

export { Tab };
