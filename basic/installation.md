# 安裝Vue.js
## CDN
除了書本範例外Vue.js開發應該蠻少在用CDN的，這種方法類似JQuery的感覺，嵌入後就可以使用Vue的指令。CDN網址可以從[Vue官方文件](https://cn.vuejs.org/v2/guide/installation.html#CDN)查到。
```
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
```

## npm (建立cli專案)
在安裝vue-cli之前，電腦要先建立node.js環境。反正就是到[node.js官網](https://nodejs.org/en/)按下Download而已。

安裝完成node環境之後，打開cmd或Terminal輸入以下指令。如果是mac OS的話，要在npm前面加上`sudo`。
```
npm install -g @vue-cli
```
跑完後可以查看目前版本，其實主要目的是看有沒有安裝成功...XDD
```
vue --version
```
接下來就可以建立專案了，名稱隨意取個賞心悅目的名字，但**不可以含有大寫英文**。
```
vue create 專案名稱
```
create的過程中會詢問要安裝`default`還是`手動選擇要的檔案`，這個就看個人吧。

完成後就可以run看看是否成功了。
```
npm run serve
```
打開瀏覽器輸入`http://localhost:8080`就可以看到大大的Vue Logo。
