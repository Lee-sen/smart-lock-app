import { Button } from 'antd';
import {useState} from 'react'

export const KeyAdmin = () => {
    const [lockId, setLockId] = useState(0);
    return (
        <div className="key-admin">
            key
            <Button type='primary' onClick={() => setLockId(lockId + 1)}>锁芯id</Button>
        </div>
    )
}