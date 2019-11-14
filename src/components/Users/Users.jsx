import React from 'react';
import usersCss from './Users.module.css';

const Users = (props) => {
    return (
        <div >
            {
                props.users.map((u) => <div key={u.id} className={usersCss.user}>
                    <div className={usersCss.avaBtn}>
                        <div>
                            <img src={u.photoUrl} className={usersCss.avatar} />
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => props.unfollow(u.id)} className={usersCss.btnun} >Unfollow</button>
                                : <button onClick={() => props.follow(u.id)} className={usersCss.btn}>Follow</button>}
                        </div>
                    </div>
                    <div className={usersCss.info}>
                        <div className={usersCss.nameStatus}>
                            <div className={usersCss.name}>{u.fullName}</div>
                            <div className={usersCss.status}>{u.status}</div>
                        </div>
                        <div className={usersCss.countryCity}>
                            <div className={usersCss.country}>{u.location.country}</div>
                            <div className={usersCss.city}>{u.location.city}</div>
                        </div>
                    </div>
                </div>)
            }
        </div>
    )
}
export default Users;