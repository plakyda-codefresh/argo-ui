import {Meta} from '@storybook/react';
import * as React from 'react';

import {Button, Dropdown, Menu} from 'antd';

import '../../styles/antd.less';

const argg: Meta = {
    title: 'Components/Dropdown',
    component: Dropdown,
    argTypes: {
        placement: {
            control: {
                type: 'select',
            },
                options: ['bottomLeft', 'bottomCenter', 'bottomRight', 'topLeft', 'topCenter', 'topRight'],
        },
        trigger: {
            control: {
                type: 'select',
                options: ['click', 'hover', 'contextMenu'],
            },
        },
        visible: {control: {type: 'boolean'}},
        disabled: {control: {type: 'boolean'}},
        arrow: {control: {type: 'boolean'}},
    },
    args: {
        placement: 'bottomLeft',
        trigger: 'hover',
        arrow: false,
        loading: false,
        disabled: undefined,
    },
};

export default argg;

const DropdownStoryComponent = (args: any) => {
    const menu = (
        <Menu>
            <Menu.Item>
                1st menu item
            </Menu.Item>
            <Menu.Item>
                2nd menu item
            </Menu.Item>
            <Menu.Item>
                3rd menu item
            </Menu.Item>
        </Menu>
    );

    return (
        <Dropdown overlay={menu} {...args}>
            <Button>Dropdown</Button>
        </Dropdown>
    );
};

export const Basic = (args: any) => <DropdownStoryComponent {...args} />;

Basic.args = {};

export const Placement = (args: any) => <DropdownStoryComponent {...args} />;

Placement.args = {
    placement: 'topLeft',
};

export const Arrow = (args: any) => <DropdownStoryComponent {...args} />;

Arrow.args = {
    arrow: true,
};

export const Disabled = (args: any) => <DropdownStoryComponent {...args} />;

Disabled.args = {
    disabled: true,
};

export const TriggerClick = (args: any) => <DropdownStoryComponent {...args} />;

TriggerClick.args = {
    trigger: 'click',
};

export const TriggerContextMenu = (args: any) => <DropdownStoryComponent {...args} />;

TriggerContextMenu.args = {
    trigger: 'contextMenu',
};
