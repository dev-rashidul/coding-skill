import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";

export const AuthContext = createContext();

const auth = getAuth(app);

const Context = ({ children }) => {
  // User State
  const [user, setUser] = useState(null);

  // Loading State
  const [loading, setLoading] = useState(true);

  // Google Register
  const googleLogin = (googleProvider) => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // Github Register
  const githubLogin = (githubProvider) => {
    setLoading(true);
    return signInWithPopup(auth, githubProvider);
  };

  // Register Function
  const register = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Register Function
  const login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Update User Profile
  const updateUserProfile = (profile) => {
    return updateProfile(auth.currentUser, profile);
  };

  // Logout Function
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  // Get User Info
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setLoading(false);
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  return (
    <div>
      <AuthContext.Provider
        value={{
          user,
          loading,
          register,
          login,
          googleLogin,
          githubLogin,
          updateUserProfile,
          logOut,
        }}
      >
        {children}
      </AuthContext.Provider>
    </div>
  );
};

export default Context;
