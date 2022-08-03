import { faFingerprint } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
    Alert,
    StyleSheet,
    Text,
    TouchableOpacity
} from "react-native";
import InputBox from "../components/InputBox";
import { View } from "../components/Themed";
import { useAuthUser } from "../hooks/useAuth";

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigation = useNavigation();
    const { authDigital, authEmail, logged } = useAuthUser();

    useEffect(() => {
        if (logged) {
            navigation.navigate('Root');
        }
    }, [logged]);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome fellow user!</Text>

            <View>
                <InputBox
                    userInput={email}
                    setUserInput={setEmail}
                    label="Email"
                />
                <InputBox
                    userInput={password}
                    setUserInput={setPassword}
                    label="Password"
                    style={{ marginTop: 10 }}
                />

                <Text style={styles.passwordText}>Or use your finger print as password</Text>

                <TouchableOpacity
                    style={styles.fingerprint}
                    onPress={() => authDigital(email)}
                >
                    <View style={styles.fingerCircle}>
                        <FontAwesomeIcon
                            icon={faFingerprint}
                            color="#2705FA"
                            size={35}
                        />
                    </View>
                </TouchableOpacity>
            </View>

            <TouchableOpacity
                style={styles.button}
                onPress={() => authEmail(email, password)}
            >
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        padding: 15,
        marginTop: 20,
        justifyContent: "space-around",
    },
    title: {
        fontSize: 25,
        fontWeight: "500",
        color: "#2705FA",
        textAlign: "center"

    },
    passwordText: {
        fontWeight: "500",
        marginBottom: 10,
        textAlign: "center"
    },
    fingerCircle: {
        padding: 20,
        alignSelf: "center",
        backgroundColor: "#eee",
        elevation: 8,
        borderRadius: 10
    },
    fingerprint: {
        alignSelf: "center"
    },
    button: {
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 10,
        backgroundColor: "#fff",
        elevation: 8,
        borderRadius: 6
    },
    buttonText: {
        color: "#2705FA",
        fontWeight: "500",
        fontSize: 15,
    }
});

export default Login;