import {useState} from 'react'

export const LockAdmin = () => {
    const [lockId, setLockId] = useState(0);
    return (
        <div className="lock-admin">
            lock-admin
            {lockId}
        </div>
    )
}