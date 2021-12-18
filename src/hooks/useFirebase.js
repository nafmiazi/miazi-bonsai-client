import { useEffect, useState } from "react";
import initializeFirebase from "../Pages/Login/Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged,signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, updateProfile } from "firebase/auth";


initializeFirebase();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');
    const [admin, setAdmin] = useState(false);

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    // Email Password Register
    const registerUser = (email, password, name, history) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            setAuthError('');
            const newUser = {email, displayName: name};
            setUser(newUser);

            // Save user to database
            saveUser(email, name, 'POST');

            // Send name to firebase after creation
            updateProfile(auth.currentUser, {
                displayName: name
              }).then(() => {
                
              }).catch((error) => {
                
              });

            history.replace('/');
        })
        .catch((error) => {
            setAuthError(error.message);
        })
        .finally(() => setIsLoading(false));
    }

    // Email Password Sign In
    const loginUser = (email,password, location, history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            setAuthError('');
            const destination = location?.state?.from || '/dashboard';
            history.replace(destination);
        })
        .catch((error) => {
            setAuthError(error.message);
        })
        .finally(() => setIsLoading(false));

    }

    // Google Sign In
    const signInWithGoogle = (location, history) => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
        .then((result) => {
            const user = result.user;
            setAuthError('');

            // Save user to database
            saveUser(user.email, user.displayName, 'PUT');

            const destination = location?.state?.from || '/dashboard';
            history.replace(destination);
        })
        .catch((error) => {
            setAuthError(error.message);
        })
        .finally(() => setIsLoading(false));
    }

    // Observer
    useEffect( () => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user);
            } 
            else {
              setUser({});
            }
            setIsLoading(false);
          });
          return () => unsubscribe;
    }, [auth])

    useEffect(() => {
        fetch(`https://enigmatic-falls-65790.herokuapp.com/users/${user.email}`)
        .then(res => res.json())
        .then(data => setAdmin(data.admin))
    }, [user.email])

    // Logout
    const logout = () => {
        setIsLoading(true);
        signOut(auth).then(() => {
        
        }).catch((error) => {
        
        })
        .finally(() => setIsLoading(false));
    }

    // Save User 
    const saveUser = (email, displayName, method) => {
        const user = {email, displayName};
        fetch('https://enigmatic-falls-65790.herokuapp.com/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then()
    }

    return {
        user, 
        isLoading,
        registerUser,
        loginUser,
        signInWithGoogle,
        logout,
        authError,
        admin
    }
}

export default useFirebase;