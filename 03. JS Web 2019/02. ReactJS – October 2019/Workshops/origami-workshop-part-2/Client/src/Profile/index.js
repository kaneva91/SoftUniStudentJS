import React from 'react';
import styles from './Profile.module.css';
import getData from '../shared/fetch-service';
import Post from '../publications/Post';

class Profile extends React.Component {
    state = {
        posts: null
    }

    componentDidMount() {
        getData(3)
            .then(posts => this.setState({ posts }))
    }
    
    render() {
        const {posts} = this.state;
        return (
            <div className={styles.Profile}>
                <img src="/profile-icon.png" alt="profile-icon" />
                <div className={styles['personal-info']}>
                    <p>
                        <span>Email: </span>
                        someone@someday.com
                </p>
                    <p>
                        <span>
                            Posts:
                    </span>
                        9
                </p>
                </div>
                <div>
                    <h2>3 of your recent posts</h2>
                    {   posts ?
                        posts.map((post) => <Post key={post._id} description={post.description} author={post.author} />)
                        :
                        <div> No posts to display ....</div>
                    }
                </div>
            </div>
        )
    }
}

export default Profile;