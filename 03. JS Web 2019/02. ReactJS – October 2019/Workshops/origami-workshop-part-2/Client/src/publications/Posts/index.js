import React from 'react';
import styles from './Posts.module.css';
import Post from '../Post';
import getData from '../../shared/fetch-service';

class Posts extends React.Component {
    state = { posts: null };

    componentDidMount() {
        getData(0)
        .then((posts) => this.setState({posts})) 
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
