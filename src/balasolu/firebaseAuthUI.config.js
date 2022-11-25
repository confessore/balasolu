import { GoogleAuthProvider } from "firebase/auth"

export const uiConfig = () => {
    return {
        signInFlow: 'popup',
        signInSuccessUrl: '/',
        tosUrl: '/tos',
        privacyPolicyUrl: '/privacy',
        signInOptions: [
            "microsoft.com",
            GoogleAuthProvider.PROVIDER_ID,
        ]
    }
}