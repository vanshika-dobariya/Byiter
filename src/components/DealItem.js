import React from 'react';
import {
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    View,
    ImageBackground
} from 'react-native';
import {
    colors,
    fonts
} from '../constants';
// Images
import Images from '../utils/Images';

/**
* Renders a <DealItem /> component
* @function Text DealItem
* @param  props.text {string} - the text for showing
*/
export default DealItem = ({ item, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.item}>
            {item.deal.image !== null ?
                <ImageBackground
                    style={styles.bgImage}
                    source={{
                        uri: item.deal.image,
                    }}>
                    <Image
                        source={{ uri: item.store.logo.url }}
                        style={styles.logo} />
                </ImageBackground>
                :
                <ImageBackground
                    style={styles.bgImage}
                    source={Images.defaultDeal}>
                    <Image
                        source={{ uri: item.store.logo.url }}
                        style={styles.logo} />
                </ImageBackground>
            }

            <View style={styles.details}>
                <Text style={styles.title}>{item.deal.title}</Text>
                <Text style={styles.place}>{item.store.place}</Text>
                <Text style={styles.validTime}>Valid until {item.deal.duration.endDateTime}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    item: {
        padding: 5,
        marginVertical: 10,
        borderColor: colors.lightGrey,
        borderBottomWidth: 0.7,
        height: 270
    },
    details: {
        marginHorizontal: 20,
        marginTop: 15,
        marginBottom: 5
    },
    title: {
        fontSize: 12,
        color: colors.black
    },
    bgImage: {
        flex: 1,
        width: null,
        height: null
    },
    logo: {
        width: 50,
        height: 50
    },
    place: {
        fontSize: 12,
        color: colors.black,
        marginTop: 6
    },
    validTime: {
        fontSize: 12,
        fontWeight: fonts.FontWeight.bold,
        color: colors.buttonBg,
        marginTop: 3
    },

})