# Mixins
有些組件(components)會用到相同功能，把它們拉出來獨立寫在一個.js檔案中，讓有需要的組件利用import來引入使用，大大減少在每個組件裡寫重覆的Code。  
一個mixins檔案可以包含任意的組件選項(component options)，組件選項就是定義組件中的data、created、methods...這些東西。當組件import mixins檔案後，會將兩個檔案的組件選項做合併。
<pre>
<span style="color:gray">// mixins/commonMixins</span>
</pre>