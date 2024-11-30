import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Layout from './layout'
import './index.css'
import Home from './components/home/Home'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import User from './components/user/User'
import Github,{gitHubInfoLoader} from './components/github/Github'




import { RouterProvider ,createBrowserRouter,createRoutesFromElements,Route} from 'react-router-dom'
// const router=createBrowserRouter([
//   {
//     path:'/',
//     element:<Layout/>,
//     children:[
//       {
//         path:'',
//         element:<Home/>
//       },
//       {
//         path:'about',
//         element:<About/>
//       },
//       {
//         path:'contact',
//         element:<Contact/>
//       }
//     ]
   
//   }
// ])
//another method 

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='' element={<Layout/>}>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/user/:cuserId' element={<User/>}/>
      <Route loader={gitHubInfoLoader} path='/github' element={<Github/>}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
    {/* <Header/> */}
  </StrictMode>,
)
