# 動態路由設定
安裝完路由之後，就要在`src/router/index.js`檔案中手動設定url要指定到哪個組件。  

首先先建立一個**陣列**，用來存放路徑的url以及對應的組件。
```
// index.js

const routes=[
    // 這裡存放每個組件對應的url
];
```
`routes`裡面會放很多的物件，每個物件包含`path`、`name`、`component`...。
- path：指定的url，前面需要加斜線`/`。
- name：路徑的名稱。
- component：連到這個`path`會顯示的畫面。
```
// index.js

const routes=[
    {
        path: '/RouteIndex',
        name: 'routeIndex',
        component: RouteIndex
    }
]
```
