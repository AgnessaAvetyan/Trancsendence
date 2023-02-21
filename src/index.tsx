// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(
//   document.getElementById('root') as HTMLElement
// );
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import AccountPage from './AccountPage';
import App from './App';
import Profile from './components/Profile';
// import BackgroundText from './BackgroundImage';

// const App:React.FC = () => {
//   return <div>
//     <h2>
//       <BackgroundText/>
//       {/* <Welcome /> */}
//     </h2>
//     </div>
// }

// ReactDOM.render(App(), document.getElementById("root"));

ReactDOM.render(
    <Router>
        <App />
        <Routes>
            <Route path="/profile" element={<Profile/>}>
                
            </Route>
        </Routes>
    </Router>,
    document.getElementById("root"));

