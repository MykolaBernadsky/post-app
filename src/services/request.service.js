import axios from "axios";

const postRequests = {
  getAllPosts : () => {
    return axios.get('https://simple-blog-api.crew.red/posts');
  },
  getPostById: postId => {
    return axios.get(`https://simple-blog-api.crew.red/posts/${postId}?_embed=comments`);
  },
  createPost: payload => {
    return axios.post('https://simple-blog-api.crew.red/posts', payload);
  },
  addComment: payload => {
    return axios.post(`https://simple-blog-api.crew.red/comments`, payload);
  }
}

export {postRequests};