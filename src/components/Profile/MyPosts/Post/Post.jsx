import React from 'react';
import postCss from './Post.module.css';

const Post = (props) => {
    return (
        <div>
            <div className={postCss.item}>
                <img src='http://andrey-eltsov.ru/wp-content/uploads/2019/01/Agh-45juD_4uyAWb_5mj-d5_djhcgUng-Hgdt6-dj_jtu-%D0%9A%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B8-%D0%B4%D0%BB%D1%8F-%D1%81%D1%82%D0%B8%D0%BC-%D0%B4%D0%BE%D1%82%D0%B0%D0%B2%D0%B0-%D0%BD%D0%B0-%D1%81%D1%82%D0%B8%D0%BC5.jpg' />
                {props.message}
                <div className={postCss.likes}>
                    <span>like</span>
                    <span className={postCss.likesCount}> {props.likesCount}</span>
                </div>
            </div>
        </div>

    )
}
export default Post;