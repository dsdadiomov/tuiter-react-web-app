import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import {
  profileThunk,
  logoutThunk,
  updateUserThunk,
} from "../services/auth-thunks";

function ProfileScreen() {
  const { currentUser } = useSelector((state) => state.user);
  const [profile, setProfile] = useState(currentUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const save = async () => {
    await dispatch(updateUserThunk(profile));
  };

  useEffect(() => {
    const loadProfile = async () => {
      const { payload } = await dispatch(profileThunk());
      setProfile(payload);
    };
    loadProfile();
  }, []);

  return (
    <div>
      <h1>Profile Screen</h1>
      {profile && (
        <div>
          <div>
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              value={profile.firstName}
              onChange={(event) => {
                const newProfile = {
                  ...profile,
                  firstName: event.target.value,
                };
                setProfile(newProfile);
              }}
              placeholder="Enter your first name"
            />
          </div>
          <div>
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              value={profile.lastName}
              onChange={(event) => {
                const newProfile = {
                  ...profile,
                  lastName: event.target.value,
                };
                setProfile(newProfile);
              }}
              placeholder="Enter your last name"
            />
          </div>
        </div>
      )}
      <button
        className="btn btn-danger"
        onClick={() => {
          dispatch(logoutThunk());
          navigate("tuiter/login");
        }}
      >
        Logout
      </button>
      <button className="btn btn-success" onClick={save}>
        Save
      </button>
    </div>
  );
}

export default ProfileScreen;
