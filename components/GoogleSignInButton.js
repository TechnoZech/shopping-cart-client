'use client';

import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth } from '../firebase';
import { useRouter } from 'next/navigation';
import { storeUserEmail } from '../utils/api';

export default function GoogleSignInButton() {
  const router = useRouter();

  const signIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const idToken = await result.user.getIdToken();

      // Store user email on the server
      await storeUserEmail(idToken);

      router.push('/'); // Redirect to home page after successful login
    } catch (error) {
      console.error('Error signing in with Google', error);
    }
  };

  return (
    <button
      onClick={signIn}
      className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
    >
      Sign in with Google
    </button>
  );
}