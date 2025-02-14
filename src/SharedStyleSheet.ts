import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        width: '100%',
        backgroundColor: 'cornsilk',
        padding: 10
    },
    title: {
        fontSize: 30,
        alignSelf: 'center'
    },
    enterDetails: {
        width: '100%',
        // backgroundColor:'green',
        justifyContent: 'center'


    },
    input: {
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 8,
        paddingVertical: 10
    },
    eachSection: {
        marginVertical: 10

    },
    heading: {
        fontSize: 15,
        marginLeft: 7,
        marginBottom: 5
    },
    button: {
        backgroundColor: 'red',
        borderWidth: 1,
        width: '100%',
        paddingVertical: 10,
        alignItems: "center",
        marginTop: 20,
        borderRadius: 10
    }
})