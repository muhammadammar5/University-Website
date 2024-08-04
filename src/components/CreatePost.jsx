import { useContext } from "react";
import { useRef } from "react";
import { PostList } from "../store/post-list-store";
const CreatePost = () => {
    const userIdE = useRef();
    const postTitleE = useRef();
    const postBodyE = useRef();
    const reactionsE = useRef();
    const tagsE = useRef();

    const { addPost } = useContext(PostList)
    const handleSubmit = (event) => {
        event.preventDefault();
        const userId = userIdE.current.value;
        const postTitle = postTitleE.current.value;
        const postBody = postBodyE.current.value;
        const reactions = reactionsE.current.value;

        const tags = tagsE.current.value.split(" ")
        userIdE.current.value = ""
        postTitleE.current.value = ""
        postBodyE.current.value = ""
        reactionsE.current.value = ""
        tagsE.current.value = ""

        addPost(userId, postTitle, postBody, reactions, tags,);
    }
    return <>
        <form className="create-post" onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="userId" className="form-label">Enter your userid here</label>
                <input ref={userIdE} type="text" className="form-control" id="userId" placeholder=" Your User Id" />
            </div>
            <div className="mb-3">
                <label htmlFor="title" className="form-label">Degree Name</label>
                <input ref={postTitleE} type="text" className="form-control" id="title" placeholder=" Enter your degree name?" />
            </div>
            <div className="mb-3">
                <label htmlFor="body" className="form-label">School Name</label>
                <input ref={postBodyE} rows="4" type="text" className="form-control" id="body" placeholder="Enter your school name?" />
            </div>
            <div className="mb-3">
                <label htmlFor="reactions" className="form-label">No of Students</label>
                <input ref={reactionsE} type="text" className="form-control" id="reaction" placeholder=" Amount of students in ur batch?" />
            </div>
            <div className="mb-3">
                <label htmlFor="tags" className="form-label">Hashtags</label>
                <input ref={tagsE} type="text" className="form-control" id="tags" placeholder=" Any related hashtags..with space" />
            </div>

            <button type="submit" className="btn btn-primary">Post</button>
        </form>

    </>

}
export default CreatePost;