##   3-3 使用 vue-cli 配置 vue3 开发环境 (08：42)

- 命令行工具：cli.vuejs.org/zh/
- 检查 node 的版本号：node -V

## 安装

- 关于旧版本
    > Vue CLI 的包名称由 vue-cli 改成了 @vue/cli。 如果你已经全局安装了旧版本的 vue-cli (1.x 或 2.x)，你需要先通过 npm uninstall vue-cli -g 或 yarn global remove vue-cli 卸载它。

- Node 版本要求
    > Vue CLI 4.x 需要 Node.js v8.9 或更高版本 (推荐 v10 以上)。你可以使用 n，nvm 或 nvm-windows 在同一台电脑中管理多个 Node 版本。

- 可以使用下列任一命令安装这个新的包：
```jsx harmony

    npm install -g @vue/cli
    # OR
    yarn global add @vue/cli

```
> 安装之后，你就可以在命令行中访问 vue 命令。你可以通过简单运行 vue，看看是否展示出了一份所有可用命令的帮助信息，来验证它是否安装成功。

- 你还可以用这个命令来检查其版本是否正确：
```jsx harmony
    vue --version
```

- 升级
    > 如需升级全局的 Vue CLI 包，请运行：
    ```jsx harmony
    npm update -g @vue/cli
    
    # 或者
    yarn global upgrade --latest @vue/cli
    ```

- 项目依赖
    > 上面列出来的命令是用于升级全局的 Vue CLI。如需升级项目中的 Vue CLI 相关模块（以 @vue/cli-plugin- 或 vue-cli-plugin- 开头），请在项目目录下运行 vue upgrade：
```jsx harmony
    用法： upgrade [options] [plugin-name]
    
    （试用）升级 Vue CLI 服务及插件
    
    选项：
      -t, --to <version>    升级 <plugin-name> 到指定的版本
      -f, --from <version>  跳过本地版本检测，默认插件是从此处指定的版本升级上来
      -r, --registry <url>  使用指定的 registry 地址安装依赖
      --all                 升级所有的插件
      --next                检查插件新版本时，包括 alpha/beta/rc 版本在内
      -h, --help            输出帮助内容
```


## 项目安装 
- １、vue create vue3basic # 创建项目
```jsx harmony
    $ vue create vue3basic  
    Vue CLI v4.5.6
    ┌─────────────────────────────────────────┐
    │                                         │
    │   New version available 4.5.6 → 4.5.8   │
    │    Run npm i -g @vue/cli to update!     │
    │                                         │
    └─────────────────────────────────────────┘
    
    ? Please pick a preset: (Use arrow keys)
      Default ([Vue 2] babel, eslint)
      Default (Vue 3 Preview) ([Vue 3] babel, eslint)
    > Manually select features  # 选择此项 手动选择属性，其后回车
```
- 2、当选择 Manually select features 后回车

```jsx harmony
    Vue CLI v4.5.6                                       
    ┌─────────────────────────────────────────┐          
    │                                         │          
    │   New version available 4.5.6 → 4.5.8   │          
    │    Run npm i -g @vue/cli to update!     │          
    │                                         │          
    └─────────────────────────────────────────┘          
                                                         
    ? Please pick a preset: Manually select features     
    ? Check the features needed for your project:        
     (*) Choose Vue version    # 选择此项                          
     (*) Babel                 # 选择此项                      
    >(*) TypeScript            # 选择此项                           
     ( ) Progressive Web App (PWA) Support               
     ( ) Router                                          
     ( ) Vuex                                            
     ( ) CSS Pre-processors                              
     (*) Linter / Formatter     # 选择此项代码检查工具                         
     ( ) Unit Testing                                    
     ( ) E2E Testing                                     
```

- 3、第二选择完后，进行回车
```jsx harmony
    Vue CLI v4.5.6
    ┌─────────────────────────────────────────┐
    │                                         │
    │   New version available 4.5.6 → 4.5.8   │
    │    Run npm i -g @vue/cli to update!     │
    │                                         │
    └─────────────────────────────────────────┘
    
    ? Please pick a preset: Manually select features
    ? Check the features needed for your project: Choose Vue version, Babel, TS, Linter
    ? Choose a version of Vue.js that you want to start the project with
      2.x
    > 3.x (Preview)   # 选择此项
```

- 4、第三项选择完后，进行回车
```jsx harmony
    Vue CLI v4.5.6
    ┌─────────────────────────────────────────┐
    │                                         │
    │   New version available 4.5.6 → 4.5.8   │
    │    Run npm i -g @vue/cli to update!     │
    │                                         │
    └─────────────────────────────────────────┘
    
    ? Please pick a preset: Manually select features
    ? Check the features needed for your project: Choose Vue version, Babel, TS, Linter
    ? Choose a version of Vue.js that you want to start the project with 3.x (Preview)
    ? Use class-style component syntax? (y/N) n  # 选择 n 代表不使用 class 类的方式

```

- 第四项选择完后，进行回车
```jsx harmony
    Vue CLI v4.5.6
    ┌─────────────────────────────────────────┐
    │                                         │
    │   New version available 4.5.6 → 4.5.8   │
    │    Run npm i -g @vue/cli to update!     │
    │                                         │
    └─────────────────────────────────────────┘
    
    ? Please pick a preset: Manually select features
    ? Check the features needed for your project: Choose Vue version, Babel, TS, Linter
    ? Choose a version of Vue.js that you want to start the project with 3.x (Preview)
    ? Use class-style component syntax? No
    ? Use Babel alongside TypeScript (required for modern mode, auto-detected polyfills, transpiling JSX)? (Y/n) n # 这里没有用到 jsx 所以这选择 n 然后回车
```

- 第五项选择完后，进行回车

```jsx harmony
    Vue CLI v4.5.6                                                                                            
    ┌─────────────────────────────────────────┐                                                               
    │                                         │                                                               
    │   New version available 4.5.6 → 4.5.8   │                                                               
    │    Run npm i -g @vue/cli to update!     │                                                               
    │                                         │                                                               
    └─────────────────────────────────────────┘                                                               
                                                                                                              
    ? Please pick a preset: Manually select features                                                          
    ? Check the features needed for your project: Choose Vue version, Babel, TS, Linter                       
    ? Choose a version of Vue.js that you want to start the project with 3.x (Preview)                        
    ? Use class-style component syntax? No                                                                    
    ? Use Babel alongside TypeScript (required for modern mode, auto-detected polyfills, transpiling JSX)? No 
    ? Pick a linter / formatter config: (Use arrow keys)                                                      
    > ESLint with error prevention only   # 选择此项 回车                                                                    
      ESLint + Airbnb config                                                                                  
      ESLint + Standard config                                                                                
      ESLint + Prettier                                                                                       
      TSLint (deprecated)                                                                                     
```
- 第六项选择完后，进行回车
```jsx harmony
    Vue CLI v4.5.6
    ┌─────────────────────────────────────────┐
    │                                         │
    │   New version available 4.5.6 → 4.5.8   │
    │    Run npm i -g @vue/cli to update!     │
    │                                         │
    └─────────────────────────────────────────┘
    
    ? Please pick a preset: Manually select features
    ? Check the features needed for your project: Choose Vue version, Babel, TS, Linter
    ? Choose a version of Vue.js that you want to start the project with 3.x (Preview)
    ? Use class-style component syntax? No
    ? Use Babel alongside TypeScript (required for modern mode, auto-detected polyfills, transpiling JSX)? No
    ? Pick a linter / formatter config: Basic
    ? Pick additional lint features: (Press <space> to select, <a> to toggle all, <i> to invert selection)
    >(*) Lint on save    # 选择此项 回车
     ( ) Lint and fix on commit 
```

- 第七项选择完后，进行回车
```jsx harmony
    Vue CLI v4.5.6
    ┌─────────────────────────────────────────┐
    │                                         │
    │   New version available 4.5.6 → 4.5.8   │
    │    Run npm i -g @vue/cli to update!     │
    │                                         │
    └─────────────────────────────────────────┘
    
    ? Please pick a preset: Manually select features
    ? Check the features needed for your project: Choose Vue version, Babel, TS, Linter
    ? Choose a version of Vue.js that you want to start the project with 3.x (Preview)
    ? Use class-style component syntax? No
    ? Use Babel alongside TypeScript (required for modern mode, auto-detected polyfills, transpiling JSX)? No
    ? Pick a linter / formatter config: Basic
    ? Pick additional lint features: Lint on save
    ? Where do you prefer placing config for Babel, ESLint, etc.? (Use arrow keys)
    > In dedicated config files # 选择此基，把配置方在单独文件里，回车
      In package.json

```
- 第八项选择完后，进行回车

```jsx harmony
    Vue CLI v4.5.6
    ┌─────────────────────────────────────────┐
    │                                         │
    │   New version available 4.5.6 → 4.5.8   │
    │    Run npm i -g @vue/cli to update!     │
    │                                         │
    └─────────────────────────────────────────┘
    
    ? Please pick a preset: Manually select features
    ? Check the features needed for your project: Choose Vue version, Babel, TS, Linter
    ? Choose a version of Vue.js that you want to start the project with 3.x (Preview)
    ? Use class-style component syntax? No
    ? Use Babel alongside TypeScript (required for modern mode, auto-detected polyfills, transpiling JSX)? No
    ? Pick a linter / formatter config: Basic
    ? Pick additional lint features: Lint on save
    ? Where do you prefer placing config for Babel, ESLint, etc.? In dedicated config files
    ? Save this as a preset for future projects? (y/N) # 选择 n ， 问要不要保存下来，为后的做准备的安装
```
