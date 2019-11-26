import React from 'react';
import userPhoto from '../../assets/images/user.png'
import usersCss from './Users.module.css';
import { NavLink } from 'react-router-dom';

let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div className={usersCss.all}>
            <div className={usersCss.pages}>
                {
                    pages.map(pageNumber => {
                        return (
                            <div className={props.currentPage === pageNumber ? usersCss.selectedPage : usersCss.notSelectedPage}
                                onClick={(event) => { props.onPageChanged(pageNumber); }}>{pageNumber}</div>
                        )
                    })
                }
            </div>
            <div className={usersCss.allUsers}>
                {
                    props.users.map((u) => <div key={u.id} className={usersCss.user}>
                        <div className={usersCss.avaBtn}>
                            <div>
                                <NavLink to={`/profile/${u.id}`} >
                                    <img src={u.photos.small != null ? u.photos.small : userPhoto} className={usersCss.avatar} />
                                </NavLink>
                            </div>
                            <div>
                                {u.followed
                                    ? <button onClick={() => props.unfollow(u.id)} className={usersCss.btnun} >Unfollow</button>
                                    : <button onClick={() => props.follow(u.id)} className={usersCss.btn}>Follow</button>}
                            </div>
                        </div>
                        <div className={usersCss.info}>
                            <div className={usersCss.nameStatus}>
                                <div className={usersCss.name}>{u.name}</div>
                                {/* <div className={usersCss.name}>{u.fullName}</div> */}
                                <div className={usersCss.status}>{u.status}</div>
                            </div>
                            <div className={usersCss.countryCity}>
                                <div className={usersCss.country}>{'u.location.country'}</div>
                                <div className={usersCss.city}>{'u.location.city'}</div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div >
    )
}

export default Users;