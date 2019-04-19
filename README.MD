## 英桃网APP
> 使用 React-native开发
### 项目用到的技术栈以及组件
  1.react-navigation 3.x  此组件需要link 
  2.react-native-gesture-handler 和上面是共存关系

### 组件说明

#### 1.ButtonView

```javascript
// src/component/ButtonView
/*
* @param btnStyle:指的是外层view的样式
* @param textStyle: 指的是内层文字的样式
* @parm  btnText: 指的是文字的内容
*/
import ButtonView from 'xxx/component/ButtonView'

<ButtonView 
        btnName='获取验证码'
        btnStyle = {{width: 90,marginRight: 10, backgroundColor: '#D6D6D6'}}
        onPress = {this._getPhoneCode}
        textStyle = {{color:'gray', justifyContent: 'flex-end',}} />
```

