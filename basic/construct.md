# Vue-cli架構
## package.json
裡面紀錄目前專案使用`npm`安裝了哪些套件。像我們要使用路由的時候會輸入`npm install vue-router`指令，這時候`package.json`就會新增`vue-router`的紀錄。  
檔案裡面也有設定指令，如下方`script`的部分：
```JSON
"scripts": {
    "serve": "vue-cli-service serve",
    "build": "vue-cli-service build",
    "lint": "vue-cli-service lint"
},
```
### npm run serve
執行Debug模式，也就是在瀏覽器輸入`http://localhost:0000(0000為Port號)`。

### npm run build
把專案打包產生一個`dist`的資料夾，會將整個專案轉換成瀏覽器看得懂的`html`、`css`、`js`，然後就可以快樂的部屬到伺服器。

### npm run lint
[Vue Style Guide](https://vuejs.org/v2/style-guide/)有一些建議程式碼的撰寫風格。`eslint-plugin-vue`可以幫助我們依照規範排版，安裝的指令如下：
```
npm install eslint-plugin-vue
```
當安裝完成之後`package.json`的`script`就會出現`lint`的指令，當執行這個指令的時候就會檢查專案是否有不符合規範的地方，如果是排版問題會自動修正，其他寫法問題則會在終端機跳出需要手動修改的部分。當檔案符合規範會顯示"No lint errors found!"。

## node-modules
`package.json`是安裝的套件清單，`node-modules`就是實際存放套件的資料夾了。  
當`package.json`裡面有紀錄某套件名稱，但是實際套件不存在於`node-modules`的時候只要輸入`npm install`指令，就會幫你自動補齊套件。

## src
存放程式碼像是`assets`、`components`、`main.js`...就是一般開發的檔案。

