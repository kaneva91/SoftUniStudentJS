import React from 'react';
import styles from './PostCreate.module.css';
import getData from '../../shared/fetch-service';
import Post from '../Post';

class PostCreate extends React.Component {

    state = {
        posts : null
    }

    componentDidMount(){
        getData(3)
        .then(posts => this.setState({posts}))
    }


    render() {
        const {posts} = this.state;

        return (
            <div className={styles.Post}>
                <div>
                    <h1>Share your thoughts....</h1>
                    <textarea></textarea>
                    <button>Post</button>
                </div>
                <div>
                    <h2>Last 3 posts on your wall ...</h2>
                    {
                        posts ? 
                       posts.map((post) => <Post key={post._id} description={post.description} author={post.author} />)
                        : <div> No posts to display</div>
                    }
                </div>
            </div>
        )
    }
}

export default PostCreate;