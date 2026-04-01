import { TouchableOpacity, Text } from 'react-native';
import Style from './Style'

function CustomButtom({title, onPress, style}){
    return(
        <TouchableOpacity onPress={onPress} style={[Style.buttom, style]}>
            <Text style={Style.buttomText}>{title}</Text>
        </TouchableOpacity>
    )
}

export default CustomButtom;