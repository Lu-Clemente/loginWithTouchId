import React, {
    createContext, useContext, useEffect, useState
} from 'react';
import { Alert } from 'react-native';
import * as LocalAuthentication from 'expo-local-authentication';

interface AuthUserContextData {
    authDigital: (email: string) => void;
    authEmail: (email: string, password: string) => void;
    logout: () => void;
    logged: boolean;
}

const AuthUserContext = createContext<AuthUserContextData>({} as AuthUserContextData);

const AuthUserProvider = function ({ children }: { children: any }) {

    const [logged, setIslogged] = useState(false);
    const [supportsTouchId, setSupportsTouchId] = useState(false);

    const checkSupport = async () => {
        const compatible = await LocalAuthentication.hasHardwareAsync();
        setSupportsTouchId(compatible);
    }

    useEffect(() => {
        checkSupport();
    }, [])

    const authDigital = (email: string) => {
        if (!supportsTouchId) {
            Alert.alert("Failure", "This device doesn't supports this type of authentication.");
            return;
        }
        if (email === "" || !email) {
            Alert.alert("Failure", "Unable to authenticate. Try again!");
            return;
        }

        const auth = LocalAuthentication.authenticateAsync({
            promptMessage: 'Touch the digital sensor to proceed',
            fallbackLabel: 'Try again'
        })

        auth
            .then(() => {
                Alert.alert("Success", "Your're logged in");
                setIslogged(true);
            })
            .catch(() => {
                Alert.alert("Failure", "Unable to authenticate. Try again!");
            });
    }

    const authEmail = (email: string, password: string) => {
        if (email && password) {
            Alert.alert("Success", "Your're logged in");
            setIslogged(true);
        } else {
            Alert.alert("Failure", "Unable to authenticate. Try again!");
        }
    }

    const logout = () => {
        setIslogged(false);
    }

    return (
        <AuthUserContext.Provider
            value={{
                authDigital,
                authEmail,
                logout,
                logged
            }}
        >
            {children}
        </AuthUserContext.Provider>
    );
};

function useAuthUser(): AuthUserContextData {
    const context = useContext(AuthUserContext);

    return context;
}

export { AuthUserProvider, useAuthUser };