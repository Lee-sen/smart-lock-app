// import { Layout } from "antd";
import React, { useState } from 'react';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Button } from 'antd';
import { menusType } from '@/type/modules/system/menu';
import { LockAdmin } from './LockAdmin';
import { KeyAdmin, } from './KeyAdmin';
import { LogAdmin,  } from './LogAdmin';
// import { PeopleAdmin } from './PeopleAdmin';
import { ComAdmin } from './ComAdmin';

import classes from './index.module.scss';

const { Header, Sider, Content } = Layout;
const menu: menusType[] = [
    {
        path: '/set-com',
        visible: 'true',
        status: 'active',
        menuId: 1,
        menuName: '串口操作',
        orderNum: 1,
        children: [],
        component: <ComAdmin />,
    },
    {
        path: '/set-lock',
        // component: React.FC<any>,
        // query?: string,
        visible: 'true',
        status: 'active',
        // perms?: string,
        // icon?: string,
        // remark?: string,
        menuId: 2,
        menuName: '锁芯配置',
        // parentId?: number,
        orderNum: 2,
        children: [],
        // icon: <UserOutlined />,
        component: <LockAdmin />,
    },
    {
        path: '/set-key',
        visible: 'true',
        status: 'active',
        menuId: 3,
        menuName: '钥匙配置',
        orderNum:3,
        children: [],
        component: <KeyAdmin />
        // icon: <UserOutlined />
    },
    {
        path: '/set-log',
        visible: 'true',
        status: 'active',
        menuId: 4,
        menuName: '日志操作',
        orderNum: 4,
        children: [],
        component: <LogAdmin />
    },
    // {
    //     path: '/set-place',
    //     visible: 'true',
    //     status: 'active',
    //     menuId: 4,
    //     menuName: '巡检配置',
    //     orderNum: 4,
    //     children: [],
    //     component: <PlaceAndLockAdmin />
    // },

];

const Admin = () => {
    const [collapsed, setCollapsed] = useState(false);
    const colorBgContainer = '#EEE';
    const [activeMemu, setActiveMenu] = useState('1');

    const handleClickMenu = (e: any) => {
        setActiveMenu(e.key);
    }
    return (
        <div className={classes['admin-container']} style={{ height: '100%' }}>
            <Layout style={{ height: '100vh' }}>
                <Sider trigger={null} collapsible collapsed={collapsed}>
                    <div className="demo-logo-vertical" />
                    <Menu
                        theme="dark"
                        mode="inline"
                        defaultSelectedKeys={['5']}
                        items={
                            [
                                {
                                    key: '1',
                                    icon: <UserOutlined />,
                                    label: '串口连接',

                                },
                                {
                                    key: '2',
                                    icon: <VideoCameraOutlined />,
                                    label: '锁芯设置',
                                },
                                {
                                    key: '3',
                                    icon: <UploadOutlined />,
                                    label: '钥匙设置',
                                },
                                {
                                    key: '4',
                                    icon: <UploadOutlined />,
                                    label: '日志操作',
                                },
                            ]}
                        onClick={(e) => handleClickMenu(e)}
                    />
                </Sider>
                <Layout>
                    <Header style={{ padding: 0, background: colorBgContainer }}>
                        <Button
                            type="text"
                            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                            onClick={() => setCollapsed(!collapsed)}
                            style={{
                                fontSize: '16px',
                                width: 64,
                                height: 64,
                            }}
                        />
                    </Header>
                    <Content
                        style={{
                            margin: '24px 16px',
                            padding: 24,
                            minHeight: 280,
                            background: colorBgContainer,
                        }}
                    >
                        {
                            menu.map((i) => {
                                if (i.menuId === Number(activeMemu)) {
                                    return i.component
                                }
                                return null;
                            })
                        }
                    </Content>
                </Layout>
            </Layout>
        </div>
    )
};

export default Admin;