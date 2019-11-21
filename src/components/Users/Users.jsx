import React from 'react';
import usersCss from './Users.module.css';
import * as axios from 'axios';
import userPhoto from '../../assets/images/user.png'

class Users extends React.Component {

    // constructor(props) {
    //     super(props);
    // }

    // getUsers = () => {
    //     if (this.props.users.length === 0) {
    //         axios.get('https://social-network.samuraijs.com/api/1.0/users')
    //             .then(response => {
    //                 this.props.setUsers(response.data.items);
    //             });
    //     };
    // };

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            });
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
            });
    }

    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }

        return (
            <div class={usersCss.all}>
                <div className={usersCss.pages}>
                    {
                        pages.map(p => {
                            return (
                                <div className={this.props.currentPage === p ? usersCss.selectedPage : usersCss.notSelectedPage} onClick={(event) => { this.onPageChanged(p); }}>{p}</div>
                            )
                        })
                    }
                </div>
                <div className={usersCss.allUsers}>
                    {
                        this.props.users.map((u) => <div key={u.id} className={usersCss.user}>
                            <div className={usersCss.avaBtn}>
                                <div>
                                    <img src={u.photos.small != null ? u.photos.small : userPhoto} className={usersCss.avatar} />
                                    {/* <img src={u.photoUrl} className={usersCss.avatar} /> */}
                                </div>
                                <div>
                                    {u.followed
                                        ? <button onClick={() => this.props.unfollow(u.id)} className={usersCss.btnun} >Unfollow</button>
                                        : <button onClick={() => this.props.follow(u.id)} className={usersCss.btn}>Follow</button>}
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
};



export default Users;