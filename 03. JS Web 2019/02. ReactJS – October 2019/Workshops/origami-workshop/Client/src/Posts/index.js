import React from 'react';
import styles from './Posts.module.css';
import Post from '../Post';

class Posts extends React.Component {
    state = { posts: null }

    componentDidMount() {
        fetch('http://localhost:9999/api/origami/')
            .then(res => res.json())
            .then((posts) => {
                this.setState({ posts })
            });
    }

    render() {
        const { posts } = this.state;
    
        return (
            <div className={styles.Posts}>
                {
                    posts ?
                        posts.map(post =>
                            <Post key={post._id} description={post.description} author={post.author} />)
                        :
                        <div>Loading Posts....</div>
                }
            </div>
        )
    }
}

export default Posts;
