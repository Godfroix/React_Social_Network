import Users from "../components/Users/Users";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';

let initialState = {
    users:
        [
            {
                id: 1, followed: true, photoUrl: 'https://pbs.twimg.com/profile_images/1060286056342474752/FyIwsk1S.jpg',
                fullName: 'Vitalii King', status: 'Я вернулся из небытия', location: { city: 'Venecia', country: 'Italy' }
            },
            {
                id: 2, followed: true, photoUrl: 'https://lh5.googleusercontent.com/-QTUUAiSPNHA/AAAAAAAAAAI/AAAAAAAAAXk/khjvc_3VjUc/photo.jpg?sz=200',
                fullName: 'Valera Gladiator', status: 'DA DA DA', location: { city: 'Samara', country: 'Russia' }
            },
            {
                id: 3, followed: true, photoUrl: 'https://svirtus.cdnvideo.ru/40aqd88rYrAtKYtkWaM3SZlodIo=/0x0:1000x1000/200x200/filters:quality(100)/https://hb.bizmrg.com/esports-core-media/7a/7aa784cd39ed549ddf7602bd183cec0f.jpg?m=0d76aa7dbc5cdb4090eefa58f8cd710c',
                fullName: 'Pukich', status: 'Говорите не молчите', location: { city: 'Tver', country: 'Russia' }
            },
            {
                id: 4, followed: false, photoUrl: 'https://kibercon.ru/wp-content/uploads/2019/04/iner.jpg',
                fullName: 'Guchibass', status: 'aaaaaaa', location: { city: 'Vinnica', country: 'Ukrain' }
            },
            {
                id: 5, followed: false, photoUrl: 'https://www.b17.ru/foto/article/124863.jpg',
                fullName: 'Alexander Borisov', status: 'Я спростмен', location: { city: 'Nizhnii-Novgorod', country: 'Russia' }
            },
        ],

};

const usersReducer = (state = initialState, action) => {
    if (action.type === FOLLOW) {
        return {
            ...state,
            users: state.users.map((user) => {
                if (user.id === action.userId) {
                    return { ...user, followed: true }
                }
                return user;
            })
        }
    }
    else if (action.type === UNFOLLOW) {
        return {
            ...state,
            users: state.users.map((user) => {
                if (user.id === action.userId) {
                    return { ...user, followed: false }
                }
                return user;
            })
        };
    }
    else if (action.type === SET_USERS) {
        return {
            ...state,
            users: [...state.users, ...action.users],
        };
    }
    return state;
}

export const followAC = (userId) => ({ type: FOLLOW, userId })

export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId })

export const setUsersAC = (users) => ({ type: SET_USERS, users })

export default usersReducer;