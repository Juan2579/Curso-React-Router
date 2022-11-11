import {HashRouter, Routes, Route} from "react-router-dom"
import { BlogPage } from "./components/BlogPage"
import { BlogPost } from "./components/BlogPost"
import { HomePage } from "./components/HomePage"
import { LoginPage } from "./components/LoginPage"
import { LogoutPage } from "./components/LogoutPage"
import { Menu } from "./components/Menu"
import { ProfilePage } from "./components/ProfilePage"

import { AuthProvider, AuthRoute } from "./components/auth"
import { PostProvider } from "./components/postContext"


function App() {
  return (
    <div className="App">
      <HashRouter>
        <AuthProvider>
          <PostProvider> 
            
            <Menu />

            <Routes>
              <Route path="/" element={<HomePage />} />

                <Route path="/blog" element={<BlogPage />}>
                  <Route path=":slug" element={<BlogPost />} />
                </Route>

              <Route path="/login" element={<LoginPage />} />
              <Route 
                path="/logout" 
                element={
                  <AuthRoute>
                    <LogoutPage />
                  </AuthRoute>
                } />
              <Route 
                path="/profile" 
                element={
                  <AuthRoute>
                    <ProfilePage />
                  </AuthRoute>
                }
              />

              <Route path="*" element={<p>Not found</p>} />
            </Routes>
          </PostProvider>
          
        </AuthProvider>
      </HashRouter>
    </div>
  )
}

export default App
