import React from 'react';
import { storiesOf } from '@storybook/react';

import CustomButton from '../../src';

storiesOf("Custom button", module)
    .addWithJSX("simple", () => <CustomButton />);