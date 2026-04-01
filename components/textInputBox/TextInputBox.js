import { TextInput } from 'react-native-web';
import Style from './Style';

function TextInputBox({value, onChangeText, placeholder, keyboardType, style}){
    return(
        <TextInput 
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        keyboardType={keyboardType}
        style={[Style.input, style]}
        />
    )
}

export default TextInputBox;