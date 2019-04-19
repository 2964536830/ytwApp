import React, { Component } from "react"
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  Image,
  TouchableOpacity
} from "react-native"

import { connect } from "react-redux"
import actions from "../../store/actions"
import TopBar from "../TopBar"

const instructions = Platform.select({
  ios: "",
  android: ""
})

class Jiedan extends Component {
  constructor(props) {
    super(props)
    console.disableYellowBox = true
    this.state = {
      payWay: [
        {
          id: 1,
          text: "电子交付",
          checked: true
        },
        {
          id: 2,
          text: "邮寄交付",
          checked: false
        }
      ], //交付方式
      finallyContent: [
        {
          id: 1,
          content: "",
          num: ""
        }
      ]
    }
  }

  render() {
    const { navigation } = this.props
    const { payWay, finallyContent } = this.state
    return (
      <View>
        <TopBar title={"合同"} navigation={navigation} />
        <ScrollView>
          <View style={styles.container}>
            <Text style={styles.title}>项目计划</Text>
            <View style={styles.lineItem}>
              <Text style={styles.lineItemTitle}>英雄姓名</Text>
              <TextInput
                style={styles.lineItemInput}
                placeholder={"请输入姓名"}
                keyboardType={"default"}
              />
            </View>
            <View style={styles.lineItem}>
              <Text style={styles.lineItemTitle}>身份证号</Text>
              <TextInput
                style={styles.lineItemInputLong}
                placeholder={"请输入身份证号"}
                keyboardType={"default"}
              />
            </View>
            <View style={styles.lineItem}>
              <Text style={styles.lineItemTitle}>联系方式</Text>
              <TextInput
                style={styles.lineItemInputLong}
                placeholder={"请输入联系方式"}
                keyboardType={"number-pad"}
              />
            </View>
            <View style={styles.lineItem}>
              <Text style={styles.lineItemTitle}>项目名称</Text>
              <TextInput
                style={styles.lineItemInputLong}
                placeholder={"请输入项目名称"}
                keyboardType={"default"}
              />
            </View>
            <View style={styles.lineItem}>
              <Text style={styles.lineItemTitle}>项目周期</Text>
              <TextInput
                style={styles.lineItemInput}
                placeholder={"请输入项目周期"}
                keyboardType={"number-pad"}
              />
              <Text style={styles.lineItemTitle}>个工作日</Text>
            </View>
            <View style={styles.lineItem}>
              <Text style={styles.lineItemTitle}>设计费用</Text>
              <TextInput
                style={styles.lineItemInput}
                placeholder={"请输入设计总费用"}
                keyboardType={"number-pad"}
              />
              <Text style={styles.lineItemTitle}>元</Text>
            </View>
            <View style={styles.lineItem}>
              <Text style={styles.lineItemTitle}>其中</Text>
            </View>
            <View style={styles.lineItem}>
              <Text style={styles.lineItemTitleNoRight}>服务费</Text>
              <TextInput
                style={styles.lineItemInput}
                placeholder={"请输入服务费"}
                keyboardType={"number-pad"}
              />
              <Text style={styles.lineItemTitle}>元</Text>
            </View>
            <View style={styles.lineItem}>
              <Text style={styles.lineItemTitleNoRight}>服务费</Text>
              <TextInput
                style={styles.lineItemInput}
                placeholder={"请输入服务费"}
                keyboardType={"number-pad"}
              />
              <Text style={styles.lineItemTitle}>元</Text>
            </View>
            <View style={styles.lineItem}>
              <Text style={styles.lineItemTitleNoRight}>材料费</Text>
              <TextInput
                style={styles.lineItemInput}
                placeholder={"请输入材料费"}
                keyboardType={"number-pad"}
              />
              <Text style={styles.lineItemTitle}>元</Text>
            </View>
            <View style={styles.lineItem}>
              <Text style={styles.lineItemTitle}>其他杂费</Text>
              <TextInput
                style={styles.lineItemInput}
                placeholder={"请输入其他杂费"}
                keyboardType={"number-pad"}
              />
              <Text style={styles.lineItemTitle}>元</Text>
            </View>
            <View style={styles.lineItemTextBox}>
              <Text style={{ fontSize: 14 }}>项目开始时间</Text>
              <Text style={{ fontSize: 14 }}>完成基金托管后立即启动</Text>
            </View>
            <View style={styles.lineItem}>
              <Text style={styles.lineItemTitle}>交付方式</Text>
            </View>
            <View style={styles.lineItem}>
              {payWay.map(item => {
                return (
                  <TouchableOpacity
                    key={item.id}
                    onPress={() => this.checkRaido(item)}
                  >
                    <View style={styles.radioBox}>
                      {item.checked ? (
                        <Image
                          style={{ width: 20, height: 20 }}
                          source={require("../../assets/images/hetong/radio_act.png")}
                        />
                      ) : (
                        <Image
                          style={{ width: 20, height: 20 }}
                          source={require("../../assets/images/hetong/radio.png")}
                        />
                      )}
                      <Text style={styles.radioText}>{item.text}</Text>
                    </View>
                  </TouchableOpacity>
                )
              })}
            </View>
            <View style={styles.lineItem}>
              <Text style={styles.lineItemTitle}>特殊需求</Text>
            </View>
            <View style={styles.lineItem}>
              <TextInput
                style={styles.lineItemInputLong}
                placeholder={"无"}
                keyboardType={"default"}
              />
            </View>
            <View style={styles.lineItem}>
              <Text style={styles.lineItemTitle}>设计项目最终交付内容</Text>
            </View>
            {finallyContent.map((item, index) => {
              return (
                <View key={item.id}>
                  <View style={styles.lineItem}>
                    <Text style={styles.lineItemTitleNoRight}>内容</Text>
                    <TextInput
                      style={styles.lineItemInputLong}
                      placeholder={"请填写最终交付内容"}
                      keyboardType={"default"}
                    />
                  </View>
                  <View style={styles.lineItem}>
                    <Text style={styles.lineItemTitleNoRight}>数量</Text>
                    <TextInput
                      style={styles.lineItemInput}
                      placeholder={""}
                      keyboardType={"number-pad"}
                    />
                    <Text style={styles.lineItemTitle}>份</Text>
                  </View>
                </View>
              )
            })}
            <View style={{ alignItems: "center", marginTop: 15 }}>
              <Text style={styles.addButton} onPress={this.addFinallyContent}>
                添加内容
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    )
  }

  /* 点击单选框 */
  checkRaido = data => {
    console.log(111)

    let obj = this.state.payWay
    obj.forEach((item, index) => {
      item.checked = false
      if (item.id == data.id) {
        item.checked = true
      }
    })
    this.setState({
      payWay: obj
    })
  }
  addFinallyContent = () => {
    let { finallyContent } = this.state
    const id = finallyContent[finallyContent.length - 1].id
    finallyContent.push({
      id: id + 1,
      content: "",
      num: ""
    })
    this.setState({ finallyContent })
  }
}

export default connect(
  state => ({ ...state.app }),
  actions.app
)(Jiedan)
const styles = StyleSheet.create({
  container: {
    paddingTop: 18,
    paddingLeft: 12,
    paddingRight: 12,
    paddingBottom: 18,
    marginBottom: 68
  },
  title: {
    color: "#4A4A4A",
    fontSize: 18,
    lineHeight: 25,
    marginBottom: 15
  },
  lineItem: {
    flexDirection: "row",
    marginBottom: 15,
    alignItems: "center"
  },
  lineItemTitle: {
    color: "#6C6C6C",
    fontSize: 14,
    lineHeight: 20,
    marginRight: 15
  },
  lineItemTextBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    fontSize: 14,
    marginTop: 5,
    marginBottom: 20
  },
  lineItemTitleNoRight: {
    width: 56,
    textAlign: "right",
    color: "#6C6C6C",
    fontSize: 14,
    lineHeight: 20,
    marginRight: 15
  },
  lineItemInput: {
    padding: 0,
    width: 119,
    height: 35,
    paddingLeft: 10,
    backgroundColor: "rgba(246,246,246,1)",
    borderRadius: 6,
    marginRight: 15,
    fontSize: 12
  },
  lineItemInputLong: {
    padding: 0,
    flex: 1,
    height: 35,
    paddingLeft: 10,
    backgroundColor: "rgba(246,246,246,1)",
    borderRadius: 6,
    fontSize: 12
  },
  radioBox: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 18
  },
  radioText: {
    marginLeft: 5,
    fontSize: 14,
    marginRight: 50
  },
  addButton: {
    backgroundColor: "#6ab7e7",
    width: 84,
    height: 25,
    borderRadius: 10,
    color: "#fff",
    lineHeight: 25,
    textAlign: "center"
  }
})
