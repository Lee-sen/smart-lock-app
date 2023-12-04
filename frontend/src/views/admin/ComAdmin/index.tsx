import { Button, Select } from 'antd';
import { useState } from 'react'

import classes from '../index.module.scss';

export const ComAdmin = () => {
    const [lockId, setLockId] = useState(0);
    const handleClick = () => {
        console.log('handleClick');
    }
    return (
        <div className="container">
            <div className={classes['com-admin']}>
                串口连接
                <Select />
                <Button className={classes['btn-com-collect']} type='primary' onClick={() => handleClick()}>连接</Button>
                <Button className={classes['btn-com-collect']} type='primary' onClick={() => handleClick()}>断开</Button>
            </div>
            <div className={classes['lock-admin']}>
                锁芯设置
            </div>
            <div className={classes['key-admin']}>钥匙设置</div>
        </div>

    )
}