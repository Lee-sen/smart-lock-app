import { useState } from 'react'
import React from 'react';
import { Button, Space, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';

type IPeople = {
    // 序号
    id: number;
    name: string;
    telephone: string;
    sex: string;
    // 联系地址
    address: string;
};
//  interface DataType {
//     key: string;
//     name: string;
//     age: number;
//     address: string;
//     tags: string[];
//   }

const columns: ColumnsType<IPeople> = [
    {
        title: '序号',
        dataIndex: 'id',

    },
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: (text) => <a>{text}</a>,
    },
    {
        title: '性别',
        dataIndex: 'sex',
        key: 'sex',
    },
    {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
    },
    {
        title: '所属部门',
        //   key: 'action',
        //   render: (_, record) => (
        //     <Space size="middle">
        //       <a>Invite {record.name}</a>
        //       <a>Delete</a>
        //     </Space>
        //   ),
    },
];

const data: IPeople[] = [
    {
        id: 1,
        name: '张三',
        telephone: '13888888888',
        sex: '男',
        address: '北京市海淀区'
    },
    {
        id: 2,
        name: '李四',
        telephone: '13888888888',
        sex: '男',
        address: '北京市海淀区'
    },
    {
        id: 3,
        name: '王五',
        telephone: '13888888888',
        sex: '男',
        address: '北京市海淀区'
    },
];
const Header = () => (<div>
       <span> 巡检人员信息 </span>
       <Button type='primary'>增加</Button>
       <Button>导入</Button>
       <Button>导出</Button>
   </div>
);
export const PeopleAdmin = () => {
    const [people, setPeople] = useState<IPeople[]>([
        {
            id: 1,
            name: '张三',
            telephone: '13888888888',
            sex: '男',
            address: '北京市海淀区'
        }
    ]);
    return (
        <div className="people-admin">

            <Table title={() => <Header />} columns={columns} dataSource={data} />
        </div>
    )
}


