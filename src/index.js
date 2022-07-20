import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import ReportUsers from './ReportUsers';
import AddUsers from './addUsers'
import AddCollection from './addCollection'
import ShowFees from "./showfees"
import ChangeAmount from './changeamount';
import reportWebVitals from './reportWebVitals';
import { Transactions } from './Transactions';
import { FeaturedUsers } from './FeaturedUsers';
import { FeaturedCollection } from './FeaturedCollection';
import {Fees} from './Fees'
import CategoryList from "./CategoryList"
import AddnewCategory from "./AddnewCategory"
import Editcategory from './editcategory';
import Showcategory from './showcategory';
import SendNotification from "./Sendnotification"
import Allnotification from './Allnotification';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <React.StrictMode>
  <Router>
    <Routes>
    <Route exact path="/" element={<App />} />
    <Route exact path="/FeaturedUsers" element={<FeaturedUsers />}/>
    <Route exact path="/FeaturedCollection" element={<FeaturedCollection />}/>
    <Route exact path="/Fees" element={<Fees />}/>
    <Route exact path="/SendNotification" element={<SendNotification />}/>
    <Route exact path="/SendNotification/AllNotification" element={<Allnotification/>}/>
    <Route exact path="/ReportUsers" element={<ReportUsers />}/>

    <Route exact path="/CategoryList" element={<CategoryList />}/>
    <Route exact path="/CategoryList/AddNewCategory" element={<AddnewCategory />}/>
    <Route exact path="/CategoryList/editcategory" element={<Editcategory />}/>
    <Route exact path="/CategoryList/showcategory" element={<Showcategory />}/>
    <Route  path="/Fees/ChangeAmount" element={<ChangeAmount />}/>
    <Route  path="/Fees/showfees" element={<ShowFees />}/>
    <Route  path="/FeaturedUsers/AddUsers" element={<AddUsers />}/>
    <Route  path="/FeaturedCollection/AddUsers" element={<AddCollection />}/>
    <Route exact path="/Transactions" element={<Transactions />}/>
    </Routes>
  </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();





