import {HashRouter, Routes, Route} from "react-router-dom"
import { BlogPage } from "./components/BlogPage"
import { BlogPost } from "./components/BlogPost"
import { HomePage } from "./components/HomePage"
import { Menu } from "./components/Menu"
import { ProfilePage } from "./components/ProfilePage"


function App() {
  return (
    <div className="App">
      <HashRouter>
        <Menu />

        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="/blog" element={<BlogPage />}>
            <Route path=":slug" element={<BlogPost />} />
          </Route>

          <Route path="/profile" element={<ProfilePage />} />

          <Route path="*" element={<p>Not found</p>} />
        </Routes>
      </HashRouter>
    </div>
  )
}

export default App
