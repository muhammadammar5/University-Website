import { FaDeleteLeft } from "react-icons/fa6";
import { PostList } from "../store/post-list-store";
import { useContext } from "react";
const Post = ({ post }) => {
    const { deletePost } = useContext(PostList)
    return <>
        <div className="card post-card fl" style={{ width: "20rem", height: "29rem" }}>
            <img src={post.img} className="card-img-top" alt="" />
            <div className="card-body">
                <h5 className="card-title">
                    {post.title}
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark" onClick={() => deletePost(post.id)}>
                        <FaDeleteLeft />
                        <span className="visually-hidden">unread messages</span>
                    </span>
                </h5>
                <p className="card-text">{post.body}</p>
                {post.tags.map((tag) => (
                    <span key={tag} className="badge text-bg-primary hashtag">{tag}</span>
                ))}
                <div className="alert alert-success reactions" role="alert">
                    In 2024,we had a batch of  {post.reactions} people
                </div>

            </div>
        </div>
    </>
}
export default Post;