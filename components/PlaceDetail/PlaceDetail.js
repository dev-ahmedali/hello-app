import React from 'react'
import { View, Button, Modal, Image, Text } from 'react-native'

const PlaceDetail = props => {
    return (
        <Modal>
            <View>
                <Image source={props.place.image}/>
                <Text>{props.place.value}</Text>
                <View>
                    <Button title="Delete" color="red" />
                    {/* <Button title="Close" onPress={() => props.handleHideModal} /> */}
                </View>
            </View>
        </Modal>
    )
}
export default PlaceDetail;