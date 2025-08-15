import React, { useState, createContext, useEffect } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged,signOut,signInWithEmailAndPassword  } from "firebase/auth";
import auth from "../firebase/Firebase.config.js";
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  console.log(user);
  const [loading, setLoading] = useState(true);




// create new user
  const createNewUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
// set loader


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

// LogOut

const logOut=()=>{
    return signOut(auth)
}
// login


const userLogin =(email,password)=>{
return signInWithEmailAndPassword(auth,email,password)
}



//   authinfo 
  const authInfo = { 
    user, 
    setUser, 
    loading,
     createNewUser,
     logOut,
     userLogin
     };

  return (
    <AuthContext.Provider value={authInfo}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
