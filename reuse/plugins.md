# 插件 (Plugins)
插件可以用來增加、補充Vue功能，像是官方提供的`vue-router`。也可以自行編寫插件使用。

## 編寫插件
在`src`底下新增`plugins`資料夾，用來存放要編寫的`index.js`檔。  

插件有分為以下四種：
- 全域方法 global methods
- [自定義指令 custom directive](https://github.com/PeggyHsiao/Vue-Note/blob/master/reuse/customDirective.md)
- [混入 mixins](https://github.com/PeggyHsiao/Vue-Note/blob/master/reuse/mixins.md)
- [實例方法 prototype](https://github.com/PeggyHsiao/Vue-Note/blob/master/reuse/prototype.md)
```
// src/plugins/index.js

export default{
    install(Vue, options){
        Vue.方法名稱 = function(){
            此方法要執行的事情(JS)
        },
        Vue.directive('指令名稱',{
            此指令要執行的事情
        }),
        Vue.mixins({
            組件選項們
        }),
        Vue.prototype.$方法名稱 = function(options){
            此方法要執行的事情(JS)
        }
    }
}
```
`install(Vue, options)`為固定的，其中options是用來接`main.js`檔案裡`Vue.use(插件名稱, 參數)`的參數值。

這時候會發現第1個全域方法和第4個實例方法很像，用**使用的位置**來區分，感覺實例方法比全域方法常用很多很多...  
- 全域方法 global methods：給Vue對象使用，在`main.js`中輸入`Vue.方法名稱()`使用
- 實例方法 prototype：在組件中輸入`this.$方法名稱()`使用

## 註冊
到`main.js`引入檔案並使用`Vue.use`註冊，不過這樣註冊表示**全域**使用，並不是任何的插件都適合定義全域(例如:mixins)。
```
// main.js

import Plugin from '@/plugins/index';

Vue.use(Plugin)
```
## 使用插件
註冊完之後，需要的地方就可以快樂的寫上`v-指令名稱`或`$方法名稱`使用。


