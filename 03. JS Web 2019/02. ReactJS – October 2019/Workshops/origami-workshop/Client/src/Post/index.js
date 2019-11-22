import React from 'react';
import styles from './Post.module.css'

function Post({ description, author }) {
    return (
        <div className={styles.Post}>
            <img src='blue-origami-bird.png' alt="blue-origami-bird.png" />
            <p className={styles.description}>
                {description}
            </p>
            <div>
                <span>
                    <small>Author: </small>
                    {author}
                </span>
            </div>
        </div>
    )
}
export default Post;