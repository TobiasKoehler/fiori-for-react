// import { FilterItem } from './index';
// import React from 'react';
// import { mountThemedComponent } from '@shared/tests/utils';
// import { expect, use } from 'chai';
// import { matchSnapshot } from 'chai-karma-snapshot';
//
// const variantItems = [{ label: 'Variant 1', key: '1' }, { label: 'Variant 2', key: '2' }];
//
// const renderVariant = () => <VariantManagement variantItems={variantItems} />;
//
// use(matchSnapshot);
//
// describe('FilterItem', () => {
//
//   it('Render without crashing', () => {
//     const wrapper = mountThemedComponent();
//     expect(wrapper.debug()).to.matchSnapshot();
//   });
//
//   // it('With suggestions', () => {
//   //   const callback = sinon.spy();
//   //   const wrapper = mountThemedComponent(<VariantManagement onSelect={callback} variantItems={variantItems} />);
//   //
//   //   console.log('find button', wrapper.find(Button));
//   //
//   //
//   //
//   //   // @ts-ignore
//   //   (wrapper.find(Button).first().prop('onPress') as any)({target: {}});
//   //
//   //
//   //   wrapper.update();
//   //
//   //   const listItem = wrapper
//   //   // @ts-ignore
//   //     .find(ListItem.InnerComponent)
//   //     .last()
//   //     .find('li');
//   //   listItem.simulate('click');
//   //
//   //   expect(wrapper.debug()).to.matchSnapshot();
//   //   expect(getEventFromCallback(callback).getParameter('selectedItem')).to.equal(variantItems[1]);
//   //
//   //
//   // });
// });