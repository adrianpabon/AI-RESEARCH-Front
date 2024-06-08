import React, { createContext, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, onAuthStateChanged, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { FcGoogle } from 'react-icons/fc'; // Importando el icono de Google

const AuthContext = createContext(null);

export const useAuth = () => useContext(AuthContext);

function Auth() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      if (user) {
        navigate('/app');
      }
    });
    return () => unsubscribe();
  }, [navigate]);

  const handleLogin = async () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen"> {/* Centro el botón en la pantalla */}
      {user ? (
        <div>Logged in as {user.email}</div>
      ) : (
        <button 
          onClick={handleLogin}
          className="bg-blue-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded inline-flex items-center"
        >
          <FcGoogle className="mr-2" /> Log in with Google
        </button>
      )}
    </div>
  );
}

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, user => {
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export default Auth;
