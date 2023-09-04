import React, { useContext, lazy, Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import AuthContext from "./Components/Auth/AuthContext/Auth-context";

const AuthPage = lazy(() => import("./Components/Auth/AuthPage"));
const HomePage = lazy(() => import("./Components/Home/HomePage"));
const StorePage = lazy(() => import("./Components/StorePage/StorePage"));
const AboutPage = lazy(() => import("./Components/AboutPage/AboutPage"));
const ContactUsPage = lazy(() =>
  import("./Components/ContactUsPage/ContactUsPage")
);
const ProductDetails = lazy(() =>
  import("./Components/StorePage/Products/ProductDetails")
);
const UserProfile = lazy(() => import("./Components/Auth/Profile/UserProfile"));

const items = [
  {
    id: "Colors",
    imageSrc: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    price: 100,
    star: 4,
    rating: 100,
    review: 50,
  },
  {
    id: "Black-And-White",
    imageSrc: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    price: 50,
    star: 4.1,
    rating: 90,
    review: 40,
  },
  {
    id: "Black-And-Yellow",
    imageSrc: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    price: 70,
    star: 4.3,
    rating: 95,
    review: 35,
  },
  {
    id: "Blue",
    imageSrc: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    price: 100,
    star: 4,
    rating: 80,
    review: 20,
  },
  {
    id: "T-Shirt",
    imageSrc:
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dCUyMHNoaXJ0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    price: 300,
    star: 4.5,
    rating: 200,
    review: 70,
  },
  {
    id: "Coffee-Cup",
    imageSrc:
      "https://cdn.pixabay.com/photo/2016/11/29/12/46/coffee-1869599_640.jpg",
    price: 200,
    star: 4.2,
    rating: 150,
    review: 20,
  },
];
function App() {
  // const cartCtx=useContext(CartContext);
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;

  // const email=authCtx.email;

  return (
    <Switch>
      <Route path="/" exact>
        <Redirect to="/auth" />
      </Route>

      {!isLoggedIn && (
        <Route path="/auth" exact>
          <Suspense fallback={<h1 className="loading_phase">Loading...</h1>}>
            <AuthPage />
          </Suspense>
        </Route>
      )} 

      {isLoggedIn && (
        <Route path="/home" exact>
          <Suspense fallback={<h1 className="loading_phase">Loading...</h1>}>
            <HomePage />
          </Suspense>
        </Route>
      )} 

      {isLoggedIn && (
        <Route path="/store" exact>
          <Suspense fallback={<h1 className="loading_phase">Loading...</h1>}>
            <StorePage />
          </Suspense>
        </Route>
      )}

      {isLoggedIn && (
        <Route path="/aboutpage" exact>
          <Suspense fallback={<h1 className="loading_phase">Loading...</h1>}>
            <AboutPage />
          </Suspense>
        </Route>
       )}

      {isLoggedIn && (
        <Route path="/contactuspage" exact>
          <Suspense fallback={<h1 className="loading_phase">Loading...</h1>}>
            <ContactUsPage />
          </Suspense>
        </Route>
       )}

      {isLoggedIn && (
        <Route path="/store/:productId" exact>
          <Suspense fallback={<h1 className="loading_phase">Loading...</h1>}>
            <ProductDetails items={items} />
          </Suspense>
        </Route>
       )} 

      {isLoggedIn && (
        <Route path="/profile" exact>
          <Suspense fallback={<h1 className="loading_phase">Loading...</h1>}>
            <UserProfile />
          </Suspense>
        </Route>
      )}

      {isLoggedIn && (
        <Route path="*">
          <Redirect to="/store" />
        </Route>
      )}

      {!isLoggedIn && (
        <Route path="*">
          <Redirect to="/" />
        </Route> 
      )} 
    </Switch>
  );
}

export default App;
