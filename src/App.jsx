
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar'
import CreatePost from './components/CreatePost'
import PostList from './components/PostList'
import { useState } from 'react'
import PostListProvider from './store/post-list-store'
function App() {
  const [selectedTab, setSelectedTab] = useState("Home") // which of sidebar component is active/selected

  return (
    <PostListProvider>
      <div className='app-container'>
        <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab}></Sidebar>
        <div className="content">
          <Header></Header>
          {selectedTab === 'Home' ? (<PostList></PostList>) : (<CreatePost></CreatePost>)}
          <Footer></Footer>
        </div>
      </div>
    </PostListProvider>
  )
}
export default App;
// everything wrap in post list provider so all act as its children
