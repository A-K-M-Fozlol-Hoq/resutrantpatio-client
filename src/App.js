import './App.css';
import Home from './pages/Home/Home';
import AboutPage from './pages/AboutPage/AboutPage';
import CalculatorPage from './pages/CalculatorPage/CalculatorPage';
import ContactUsPage from './pages/ContactUsPage/ContactUsPage';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import AdminPage from './pages/AdminPage/AdminPage';
import PageOne from './pages/PageOne';
import PageTwo from './pages/PageTwo';
import PageThree from './pages/PageThree';
import MessengerCustomerChat from 'react-messenger-customer-chat';
import Helmet from 'react-helmet';
import PatioHeating from './pages/PatioHeating/PatioHeating';
import MotorizedShades from './pages/MotorizedShades/MotorizedShades';
import OutdoorLighting from './pages/OutdoorLighting/OutdoorLighting';
import AudioAndVideo from './pages/AudioAndVideo/AudioAndVideo';
import OutdoorFurniture from './pages/OutdoorFurniture/OutdoorFurniture';
import RestaurantPatioDesign from './pages/RestaurantPatioDesign/RestaurantPatioDesign';
import NotFound from './pages/NotFound/NotFound';
import Blogs from './pages/Blogs/Blogs';
import BlogPage from './pages/BlogPage/BlogPage';
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAqJ2x1pgQOzETsyq9Jcb-33Tg9mqyBXu8',
  authDomain: 'theresturantpatio.firebaseapp.com',
  projectId: 'theresturantpatio',
  storageBucket: 'theresturantpatio.appspot.com',
  messagingSenderId: '650394042673',
  appId: '1:650394042673:web:6020e36756892ddeaef010',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
function App() {
  return (
    <div className="App">
      <Helmet>
        <title>therestaurantpatio</title>
        <meta
          name="description"
          content="Restaurant Patio Design Services for an Enchanting Outdoor Dining Experience"
        />
        <meta
          name="keywords"
          content="Restaurant Patio Design, Restaurant Patio Awnings, Motorized Shades for Restaurants, Audio and Video System for Restaurants"
        />
      </Helmet>
      <>
        <Router>
          <div>
            <Switch>
              <Route path="/" exact>
                <Home></Home>
              </Route>
              <Route path="/home">
                <Home></Home>
              </Route>
              <Route path="/about">
                <AboutPage></AboutPage>
              </Route>
              <Route path="/calculator">
                <CalculatorPage></CalculatorPage>
              </Route>
              <Route path="/contact-us">
                <ContactUsPage></ContactUsPage>
              </Route>

              <Route path="/admin-page">
                <AdminPage></AdminPage>
              </Route>
              {/* <Route path="/pages/page1">
                <PageOne />
              </Route>
              <Route path="/pages/page2">
                <PageTwo />
              </Route>
              <Route path="/pages/page3">
                <PageThree />
              </Route> */}
              <Route path="/services/patio-heating">
                <PatioHeating></PatioHeating>
              </Route>
              <Route path="/services/motorized-shades">
                <MotorizedShades></MotorizedShades>
              </Route>
              <Route path="/services/outdoor-lighting">
                <OutdoorLighting></OutdoorLighting>
              </Route>
              <Route path="/services/audio-and-video">
                <AudioAndVideo></AudioAndVideo>
              </Route>
              <Route path="/services/outdoor-furniture">
                <OutdoorFurniture></OutdoorFurniture>
              </Route>
              <Route path="/services/restaurant-patio-design">
                <RestaurantPatioDesign></RestaurantPatioDesign>
              </Route>
              <Route exact path="/blogs/:slug">
                <Blogs></Blogs>
              </Route>
              <Route path="/blogs">
                <BlogPage></BlogPage>
              </Route>
              <Route path="*">
                <NotFound></NotFound>
              </Route>
            </Switch>
          </div>
        </Router>
      </>
      <MessengerCustomerChat
        pageId="110615818236372"
        appId="331840458888863
    "
      />
      ,
    </div>
  );
}

export default App;
