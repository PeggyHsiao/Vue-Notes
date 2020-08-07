# 單向資料綁定
資料來自於`data(){...}`裡面的變數值，有以下兩種綁定的方法：
- mustache：將資料渲染(render)進DOM
- v-bind：綁定元素attribute

## mustache
`{{ }}`裡面放入要綁定的參數，這時候就會將參數值(Hello World)傳入`<h1>`。
```vue
<!--MustacheBind.vue-->

<template>
    <h1>{{ message }}</h1>
</template>

<script>
export default {
    data(){
        return{
            message:'Hello World'
        }
    }
}
</script>
```
也可以做簡單的運算。把剛剛的MustacheBind.vue修改一下。新增一個變數叫`count`值等於100，在大括弧裡面把`count`乘2，這時候會看到畫面上顯示200。
```vue
<!--MustacheBind.vue-->

<template>
    <h1>{{ message }}</h1>
    <h1>{{ count*2 }}</h1>
</template>

<script>
export default {
    data(){
        return{
            message:'Hello World',
            count: 100,
        }
    }
}
</script>
```
![mustache](https://github.com/PeggyHsiao/Vue-Notes/blob/master/basic/mustache.JPG)
## v-bind 
用來綁定元素的屬性，可以簡寫為`:`。這時候滑鼠移到按鈕會顯示提示文字`remark`的值Click Me。
```vue
<!--MustacheBind.vue-->

<template>
    <div>
        <h1>{{ message }}</h1>
        <h1>{{ count*2 }}</h1>

        <button :title="remark">Button</button>
    </div>
</template>

<script>
export default {
    data(){
        return{
            message:'Hello World',
            count: 100,
            remark: 'Click Me'
        }
    }
}
</script>
```
現在畫面呈現如下圖：
![v-bind](https://github.com/PeggyHsiao/Vue-Notes/blob/master/basic/bind.JPG)