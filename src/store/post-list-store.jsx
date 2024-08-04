import { createContext, useReducer } from "react";


export const PostList = createContext({
    postList: [],
    addPost: () => { },
    deletePost: () => { }
});

const postListReducer = (currPostList, action) => {
    let newPostList = currPostList;
    if (action.type === 'DELETE_POST') {
        newPostList = currPostList.filter(post => post.id !== action.payload.postId)
    }
    else if (action.type === 'ADD_POST') {
        newPostList = [action.payload, ...currPostList]
    }


    return newPostList;
}
const DEFAULT_POST_LIST = [{ // how our post should look like
    id: 1,
    title: ' Bachelors of Sciences',
    body: ' Syed Saifullah School of Engineering',
    reactions: 400,
    userId: 'user-9',
    tags: ["labs", "tech", "innovation"],
    img: 'src/components/3.jpg'
},
{
    id: 2,
    title: ' Bachelors of Bussiness',
    body: ' Tahir ejaz school of bussiness',
    reactions: 345,
    userId: 'user-12',
    tags: ["class", "skills", "profession"],
    img: 'src/components/2.jpg',
}
]
//Normal React Component
const PostListProvider = ({ children }) => {
    const [postList, dispatchPostList] = useReducer(postListReducer, DEFAULT_POST_LIST);
    const deletePost = (postId) => { //delete if icon clicked based on postid
        dispatchPostList({
            type: 'DELETE_POST',
            payload: {
                postId,
            }
        })
    }
    const addPost = (userId, postTitle, postBody, reactions, tags, img) => {
        console.log("hi");
        dispatchPostList({
            type: 'ADD_POST',
            payload: { // how our post should look like
                id: Date.now(),
                title: postTitle,
                body: postBody,
                reactions: reactions,
                userId: userId,
                tags: tags,
                img: img,
            }


        })
    }

    // any children we receive,we can render them easily
    return (
        <PostList.Provider value={
            {
                postList, addPost, deletePost
            }}> {children}</PostList.Provider>
    );


}
export default PostListProvider;
// create lot of posts when we use Home
// good practice to provide a value
//renders all childern which it receive
// no link of context and usereducer