import React, { useState } from "react";
import { View } from "react-native";
import InputBox from "../../components/InputBox";

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
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
        </View>
    )
}

export default Login;