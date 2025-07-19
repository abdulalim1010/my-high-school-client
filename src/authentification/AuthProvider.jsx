import React, { Children, useEffect, useState } from 'react';
import { AuthContext } from './context/AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../firebaseConfig';


const googleProvider=new GoogleAuthProvider()
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [Loading, setLoading] = useState(true)

  const creatUser = (email,password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password)
  }
  const login = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
  }
  const signInGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth,googleProvider)
  }
  const upDateUserProfile = profileInfo => {
    setLoading(true)
    return updateProfile(auth.currentUser,profileInfo)
  }
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };
   useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log('User in auth state change:', currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);
  
  




  const authInfo = {
    creatUser,
    login,
    signInGoogle,
    logOut,
    upDateUserProfile,
    user,
    Loading
    
  }
  return (
    <AuthContext value={authInfo}>
{children}
    </AuthContext>
  );
};

export default AuthProvider;