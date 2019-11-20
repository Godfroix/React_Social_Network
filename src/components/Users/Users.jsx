import React from 'react';
import usersCss from './Users.module.css';
import * as axios from 'axios';
import userPhoto from '../../assets/images/user.png'

class Users extends React.Component {

    // constructor(props) {
    //     super(props);
    // }

    getUsers = () => {
        if (this.props.users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users')
                .then(response => {
                    this.props.setUsers(response.data.items);
                });
        };
    };

    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                this.props.setUsers(response.data.items);
            });
    }

    render() {
        return (
            <div >
                {/* <button onClick={this.getUsers} className={usersCss.usersBtn}>Get Users</button> */}
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
        )
    }
};



export default Users;