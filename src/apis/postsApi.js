import axiosInstance from "@services/axiosInstance";

export const getPosts = async () => {
    try {
        const postsData = await axiosInstance.get('/posts');
        return postsData.data
    } catch (error) {
        console.error("GET POSTS ERROR: ", error);
    }
}