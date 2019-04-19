import React, {Component} from "react"
import {Platform, Button, StyleSheet, TextInput, Text, View, Image} from "react-native"
import {connect} from "react-redux"
import {isIPhoneXPaddTop, calc} from "../../lib/WidthUtil"
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'

const instructions = Platform.select({
    ios: "",
    android: ""
})

export default class HeroHeaderBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoad: false
        }
    }

    componentDidMount(): void {
        setInterval(() => {
            this.state = {
                isLoad: !this.state.isLoad
            }
        }, 1000)
    }

    render() {
        return (
            <View style={styles.container}>
                {/*<Text>HeroHeaderBar</Text>*/}
                <AntDesign
                    name={'bars'}
                    size={calc(25)}
                />
                <View style={styles.searchBox}>
                    <TextInput
                        placeholder={'请输入关键字'}
                        style={styles.searchInput}
                    />
                    <View style={styles.TextIcon}>
                        <EvilIcons
                            name={'search'}
                            size={calc(25)}
                            color={'#7e7e7e'}
                        />
                    </View>
                </View>

                <AntDesign
                    name={'scan1'}
                    size={calc(25)}
                />
            </View>
        )
    }
}
const zIndex = 1
const styles = StyleSheet.create({
    container: {
        paddingTop: isIPhoneXPaddTop(0),
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "center",
        paddingLeft: calc(18),
        paddingRight: calc(18),
        backgroundColor: '#fff',
        paddingBottom: 10
    },
    icon: {
        width: calc(20),
        height: calc(20)
    },
    searchInput: {
        padding: 0,
        paddingLeft: calc(30),
        fontSize: calc(14),
        width: calc(250),
        height: calc(30),
        backgroundColor: 'rgba(237,237,237,1)',
        borderRadius: calc(20),
    },
    TextIcon: {
        position: 'absolute',
        left: 10,
    },
    searchBox: {
        position: 'relative',
        width: calc(250),
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 5
    }
})
