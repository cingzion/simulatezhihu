## 3-4 项目文件结构分析和推荐插件安装 (08：53)

- 项目目录
```jsx harmony
    vue3basic
        node_modules
        public
            favicon.ico
            index.html
        src
            assets
            components
            App.vue
            main.ts
            shims-vue.d.ts
        .browserslistrc
        .eslintrc.js
        package.json
        README.md
        tsconfig.json
        yarn.lock
```

##  vs code 插件安装如下
- ESLint 2.1.8  #语法提示检查
  + 配置 settings.json
    ```jsx harmony
        {
            "eslint.validate": ["typescript"]
        }   
    ```
- Vetur 0.26.1 对 Vue 语法高亮，及预定义好的。模板

