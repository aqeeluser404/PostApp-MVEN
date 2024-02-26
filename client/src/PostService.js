import axios from 'axios';

// const url = 'http://localhost:5000/api/posts/';
const url = 'api/posts/';

class PostService {
    
    // Get Post
    static getPost() {
        return axios.get(url)
            .then(response => {
                const data = response.data;
                return data.map(post => ({
                    ...post,
                    createdAt: new Date(post.createdAt)
                }));
            })
            .catch(error => {
                throw error;
            });
    }

    // Create Post
    static insertPost(text) {
        return axios.post(url, {
            text
        });
    }

    // Delete Post
    static deletePost(id) {
        return axios.delete(`${url}${id}`);
    }
}

export default PostService;
