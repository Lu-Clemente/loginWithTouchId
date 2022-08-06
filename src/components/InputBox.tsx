import React from "react";
import {
    StyleProp,
    Text,
    TextInput,
    View,
    ViewStyle,
    StyleSheet
} from "react-native";

interface Props {
    userInput: string;
    setUserInput: (e: React.SetStateAction<string>) => void;
    label?: string;
    style?: StyleProp<ViewStyle>;
    secure?: boolean;
}

const InputBox: React.FC<Props> = ({ userInput, setUserInput, label, style, secure = false }) => {
    return (
        <View style={[styles.container, style]}>
            {label && <Text style={styles.text}>{label}</Text>}
            <TextInput
                value={userInput}
                onChangeText={setUserInput}
                style={styles.input}
                secureTextEntry={secure}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      width: "100%",
      marginBottom: 5
    },
    input: {
      width: "100%",
      height: 50,
      paddingHorizontal: 15,
      paddingVertical: 5,
      borderRadius: 8,
      backgroundColor: "#eee",
      elevation: 8
    },
    text: {
      fontSize: 15,
      fontWeight: "500",
      color: "#2705FA",
      marginBottom: 5
    }
  });

export default InputBox;