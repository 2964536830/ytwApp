import React, {Component} from "react"
import {
    Platform,
    StyleSheet,
    Text,
    View,
    FlatList,
    ScrollView,
    Image,
} from "react-native"
import {FetchData} from "../../lib/Fetch"
import {connect} from "react-redux"
import actions from "../../store/actions"
import NavigationUtil from "../../navigator/NavigationUtil"
import {calc} from "../../lib/WidthUtil"
import HeroHeaderBar from "./HeroIndexComponents/HeroHeaderBar"
import HeroHeaderBanner from './HeroIndexComponents/HeroHeaderBanner'

const instructions = Platform.select({
    ios: "",
    android: ""
})

class HeroIndex extends Component {
    constructor(props) {
        super(props)
        this.state = {
            searchParam: {
                size: 5,
                page: 1
            },
            bannerShow: false, // 是否渲染Banner
            heroBanner: [],
            heroListData: [],
            libaiData: []
        }
    }

    componentWillMount() {
        this.getHeroIndex()
    }

    getHeroIndex = () => {
        const body = this.state.searchParam
        FetchData({
            url: '/api/hero/getHeroList',
            body
        })
            .then(res => {
                res.code == 200 && this.setState({heroListData: res.data})
            })
            .catch(err => {
                console.log(err)
            })
    }

    render() {
        const {heroListData} = this.props
        return (
                <ScrollView style={S.container}>
                    <HeroHeaderBar/>
                    <HeroHeaderBanner/>
                    <View style={S.selectBox}>
                        <View style={S.selectItem}></View>
                        <View style={S.selectItem}></View>
                        <View style={S.selectItem}></View>
                    </View>
                    <View><Text>sadasdsadasd</Text></View>
                    <View><Text>sadasdsadasd</Text></View>
                    <View><Text>sadasdsadasd</Text></View>
                    <View><Text>sadasdsadasd</Text></View>
                    <View><Text>sadasdsadasd</Text></View>
                    <View><Text>sadasdsadasd</Text></View>
                    <View><Text>sadasdsadasd</Text></View>
                    <View><Text>sadasdsadasd</Text></View>
                    <View><Text>sadasdsadasd</Text></View>
                    {/*<FlatList*/}
                    {/*    data={heroListData}*/}
                    {/*    renderItem={data => this.renderItem(data)}*/}
                    {/*    key={data => data.index}*/}
                    {/*/>*/}
                </ScrollView>

        )
    }

    renderItem = data => {
        const item = data.item
        return (
            <View style={styles.itemStyle}>
                <Text>{item.title}</Text>
            </View>
        )
    }
    toJiedan = () => {
        const {navigation} = this.props
        NavigationUtil.goPage(navigation, "Jiedan")
    }
}

export default connect(
    state => ({...state.app}),
    actions.app
)(HeroIndex)
const S = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#f3f3f3',
    },
    selectBox:{
        flexDirection:'row',
        height:calc(50),
        paddingTop:calc(15),
        paddingBottom:calc(13),
        backgroundColor: '#fff'
    },
    selectItem:{
        width:calc(375/3),
        borderRightWidth:1,
        borderRightColor:'#E2E2E2',
        borderStyle:'solid',
        height:calc(22)
    }
})
