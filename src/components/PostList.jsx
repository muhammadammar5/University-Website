import { useContext } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store";

const PostList = () => {
    const { postList } = useContext(PostListData); //using the context that we created
    return (
        <>
            {postList.map((post) => (
                <Post key={post.id} post={post}></Post> // passing data to post component which will actually create structure of each individual post
            ))}

        </>
    );

}
export default PostList;