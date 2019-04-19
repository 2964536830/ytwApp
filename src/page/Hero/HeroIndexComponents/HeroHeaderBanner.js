import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
} from 'react-native';
import {calc} from "../../../lib/WidthUtil";
import {FetchData} from "../../../lib/Fetch";
import Swiper from 'react-native-swiper'

export default class HeroHeaderBanner extends Component {

    constructor(props) {
        super(props);
        this.state = {
            swiperShow: false,
            heroBanner: []
        };
    }

    componentWillMount(): void {
        FetchData({
            url: '/api/ad/getHeroIndexBanner'
        })
            .then(res => {
                res.code == 200 && this.setState({heroBanner: res.data})
            })
            .catch(err => {
                console.log(err)
            })
    }

    renderRow = (e) => {
        return <Text>e</Text>
    }

    render() {
        let heroBanner = this.state.heroBanner
        let str = heroBanner.map((item, index) => {
            console.log(item.adShowUrl)
            return <Image style={styles.bannerImg} key={item.id} source={{uri:item.adShowUrl}}/>
        })
        console.log(str)
        return (
            <Swiper style={[styles.wrapper,this.props.style]}
                    height={calc(139)}
                    paginationStyle={{      //小圆点位置
                        bottom: 10
                    }}
                    loop={false}        //如果设置为false，那么滑动到最后一张时，再次滑动将不会滑到第一张图片。
                    autoplay={true}          //自动轮播
                    autoplayTimeout={2}      //每隔2秒切换
            >
                {str}
            </Swiper>
        )

    }

}

const styles = StyleSheet.create({
    wrapper: {
        width: calc(375),
        height: calc(139)
    },
    bannerImg: {
        width: calc(375),
        height: calc(139)
    }
})
