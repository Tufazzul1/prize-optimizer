// import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
// import { createContext, useEffect, useState } from "react";
// import app from "../firebase/firebase.config"



// export const AuthContext = createContext(null);
// const auth = getAuth(app);
// const googleProvider = new GoogleAuthProvider();

// const AuthProvider = ({ children }) => {

//     const [user, setUser] = useState(null);
//     const [loading, setLoading] = useState(true);

//     const createUser = async (email, password) => {
//         setLoading(true);
//         try {
//             const result = await createUserWithEmailAndPassword(auth, email, password);
//             const newUser = result.user;
//             await updateProfile(newUser, { displayName: '', photoURL: '' });
//             setUser(newUser);
//             return result;
//         } catch (error) {
//             setLoading(false);
//             console.log(error);
//         }
//     };

//     const signInWithGoogle = () => {
//         return signInWithPopup(auth, googleProvider)
//     }

//     const signIn = (email, password) => {
//         setLoading(true)
//         return signInWithEmailAndPassword(auth, email, password)
//     }

//     const logOut = () => {
//         setLoading(true)
//         return signOut(auth)
//     }

//     useEffect(() => {
//         const unSubscribe = onAuthStateChanged(auth, currentUser => {
//             setUser(currentUser)
//             setLoading(false)
//             console.log(currentUser)
//         })
//         return () => {
//             unSubscribe();
//         }
//     }, []);

//     const authInfo = {
//         user,
//         loading,
//         createUser,
//         signIn,
//         logOut,
//         signInWithGoogle,
//     }

//     return (
//         <AuthContext.Provider value={authInfo}>
//             {children}
//         </AuthContext.Provider>
//     )

// };

// export default AuthProvider;

import { createContext, useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, signOut, onAuthStateChanged, GoogleAuthProvider, updateProfile, sendEmailVerification } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = async (email, password) => {
        setLoading(true);
        try {
            const result = await createUserWithEmailAndPassword(auth, email, password);
            const newUser = result.user;
            await updateProfile(newUser, { displayName: '', photoURL: '' });
            setUser(newUser);
            return newUser;
        } catch (error) {
            setLoading(false);
            console.error(error);
            return null;
        }
    };

    const sendVerificationEmail = async (user) => {
        try {
            await sendEmailVerification(user);
            alert("Verification email sent. Please check your inbox.");
        } catch (error) {
            console.error("Error sending email verification:", error);
        }
    };

    const verifyEmail = async () => {
        await user.reload(); // Refresh the user to get updated verification status
        setUser(auth.currentUser);
        return auth.currentUser.emailVerified;
    };

    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    };

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            unsubscribe();
        };
    }, []);

    const authInfo = {
        user,
        loading,
        createUser,
        sendVerificationEmail,
        verifyEmail,
        signIn,
        logOut,
        signInWithGoogle,
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
