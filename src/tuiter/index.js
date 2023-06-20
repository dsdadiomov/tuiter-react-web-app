import Nav from "../nav";
import { Routes, Route } from "react-router";
import NavigationSidebar from "./navigation-sidebar";
import ExploreScreen from "./explore-screen";
import HomeScreen from "./home-screen";
import BookmarksScreen from "./bookmarks-screen";
import ProfileScreen from "./user/profile-screen";
import RegisterScreen from "./user/register-screen";
import LoginScreen from "./user/login-screen";
import WhoToFollowList from "./who-to-follow";
import whoReducer from "./reducers/who-reducer";
import tuitsReducer from "./reducers/tuits-reducer";
import authReducer from "./reducers/auth-reducer";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

const store = configureStore({
  reducer: { who: whoReducer, tuits: tuitsReducer, user: authReducer }
});

function Tuiter() {
  return (
    <Provider store={store}>
      <Nav />
      <div className="row">
        <div className="col-sm-2 col-lg-1 col-xl-2">
          <NavigationSidebar />
        </div>
        <div className="col-sm-10 col-lg-7 col-xl-6">
          <Routes>
            <Route path="/home" element={<HomeScreen />} />
            <Route path="/explore" element={<ExploreScreen />} />
            <Route path="/bookmarks" element={<BookmarksScreen />} />
            <Route path="/profile" element={<ProfileScreen />} />
            <Route path="/login" element={<LoginScreen />} />
            <Route path="/register" element={<RegisterScreen />} />
          </Routes>
        </div>
        <div className="d-sm-none d-lg-block col-lg-4 col-xl-4">
          <WhoToFollowList />
        </div>
      </div>
    </Provider>
  );
}
export default Tuiter;
