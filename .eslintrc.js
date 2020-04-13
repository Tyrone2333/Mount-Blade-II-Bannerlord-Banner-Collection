module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node": true,
    },
    "extends": "eslint:recommended",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly",
    },
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module",
    },
    "plugins": [],
    "rules": {

        // 关注以下几个规则
        // https://eslint.bootcss.com/docs/rules/no-unexpected-multiline

        /* ------------- array -------------*/
        "array-callback-return": "error", // 数组回调要有return
        "array-bracket-newline": ["error", 'never'], // 禁止数组[]括号不换行
        "array-bracket-spacing": "error", // []内禁止空格
        "array-element-newline": ["error", 'never'], // 禁止数组元素换行
        "no-array-constructor": "error", // 禁止数组构造函数，用 []

        /* ------------- var -------------*/
        "no-var": "error", // 不使用var
        "block-scoped-var": "error", // 避免因变量声明提升产生问题.
        "vars-on-top": "error", // 变量都在作用域头部声明
        "init-declarations": ["error", 'always'], // 变量初始化需要赋值， 明确每个变量的类型
        "no-delete-var": "error", // 禁止 delete 变量(只用在对象属性上)
        "no-shadow": "error", // 禁止变量声明与外层作用域的变量同名
        "no-use-before-define": "error", // 变量先声明在使用
        // "prefer-const": ["error", { // 解构赋值，其他必须的用 const,满屏 const 总觉得怪怪的,注释了
        //     "destructuring": "any",
        //     "ignoreReadBeforeAssign": false,
        // }],
        "one-var-declaration-per-line": ["error", 'always'], // 每个变量声明都换行

        /* ------------- function -------------*/
        "consistent-return": ["error", { // 函数总是有返回值， 要么返回需要的数据或者 undefined （其实也是为了区分当前函数的作用。是功能函数(处理逻辑)/辅助函数(帮忙处理一些事情后返回给功能函数！ -- 或者约定辅助函数用 下划线 开头)
            "treatUndefinedAsUnspecified": true,
        }],
        "no-useless-return": "error",
        "no-empty-function": "error", // 禁止空函数，除非在函数体内写上注释
        "no-caller": "error", // 不通过caller获取参数
        "no-extra-bind": "error",
        "no-new-func": "error", // 禁用构造函数方式创建函数
        "no-param-reassign": "error", // 禁止对参数进行再赋值
        "no-return-assign": ["error", 'always'], // 禁止在返回语句中赋值, 请先定义-赋值-return
        "wrap-iife": "error", // 立即执行函数必须用()包裹
        "func-call-spacing": ["error", 'never'], // 禁止函数调用有空格 log(1)
        "func-name-matching": ["error", 'always'], // 具名函数， const sb = function sb() {// sb名称要一致}
        "func-names": ["error", 'never'], // 禁止命名function表达式 => const sb = function() {}
        // "func-style": ["error", 'expression'], // 使用函数表达式定义函数， 遵循声明 - 使用原则
        "function-paren-newline": ["error", 'never'], // 禁止函数括号内换行
        "implicit-arrow-linebreak": ["error", 'beside'], // 禁止箭头函数出现换行
        "new-cap": ["error", { // 构造函数首字母大写
            "properties": false, // 不检查属性，避免一些npm模块警告
        }],
        // "new-parens": ["error", 'never'], // 构造函数调用禁止(). new Person() 要变成 (new Person),过于奇怪与习惯不符
        "no-loop-func": "error", // 禁止循环中出现函数定义
        "space-before-function-paren": ["error", 'never'], // function圆括号之前不能有空格
        "arrow-body-style": ["error", 'as-needed'], // 箭头函数体 是否需要()， 根据情况
        "arrow-parens": ["error", 'as-needed'], // 箭头函数的参数是否需要 ()
        "arrow-spacing": "error", // 箭头函数的箭头前后需要空格
        "no-confusing-arrow": ["error", {"allowParens": true}], // 可以使用()来区分 let a = (b) => c ? d : e
        "prefer-arrow-callback": "error", // 回调函数使用箭头函数
        "prefer-rest-params": "error", // 用剩余参数代替 arguments
        "prefer-spread": "error", // 用扩展语法而非.apply()

        /* ------------- object/class -------------*/
        "dot-notation": "error", // 对象属性值采用 . 点操作符访问， 避免 [] 访问
        "dot-location": ["error", 'property'], // 对象属性 . 点操作符要在同一行
        "no-invalid-this": "error", // 禁止 this 关键字在类或类对象之外出现
        "no-new": "error", // 禁止new，必要的时候请赋值给变量
        "consistent-this": "error", // this统一别名， const that = this
        "key-spacing": ["error", { // 强制在对象字面量的键和值之间使用空格 {abc: 123}
            beforeColon: false,
        }],
        "lines-between-class-members": ["error", 'always'], // 类成员后要有一行空行
        "newline-per-chained-call": "error", // 方法链每个都要有换行
        "no-new-object": "error", // 禁止调用对象构造函数, 用 {} 对象字面量
        "no-whitespace-before-property": "error", // 禁止调用属性前有空格  abc.xyz
        "object-property-newline": "error", // 每个对象属性都另起一行
        "object-curly-newline": ["error", 'always'], // 大括号与内容要换行
        "object-curly-spacing": ["error", 'always'], // 花括号内要有空格 （对象）
        "prefer-object-spread": "error", // 使用...扩展，而不是Object.assign
        "quote-props": ["error", 'as-needed'], // 对象属性禁止使用引号
        "no-useless-computed-key": "error", // 避免在对象使用计算属性（访问不通过[]而是.）
        "no-useless-constructor": "error", // 禁止不是必须的构造函数
        "object-shorthand": ["error", 'always'], // 简写的形式去定义对象中的方法和属性
        "prefer-destructuring": ["error", { // 对象数组优先使用解构赋值
            "array": true,
            "object": true,
        }, {
            "enforceForRenamedProperties": false,
        }],
        "rest-spread-spacing": ["error", "never"], // 扩展运算符前没有空格 ...spread
        "class-methods-use-this": "error", // 强制类使用this

        /* ------------- jsx -------------*/
        "jsx-quotes": ["error", 'prefer-single'], // 属性单引号

        /* ------------- promise -------------*/
        "require-await": "error", // async await是连体婴(同时出现)
        "prefer-promise-reject-errors": "error", // promise - reject 使用 Error对象
        "no-await-in-loop": "error", // 禁止在循环内使用await，请换个写法(Promise.all)
        "generator-star-spacing": ["error", 'both'], // * 要有空格
        "yield-star-spacing": ["error", 'both'], // * 要有空格

        /* ------------- 正则 -------------*/
        // "require-unicode-regexp": "error", // 正则必须要有 u 标志， 匹配emoji、 UTF-16.平时几乎用不上,而且 /\u{61}/u.test("a") 这是什么迷惑行为???

        /* ------------- 风格 -------------*/
        "indent": ["error", 4], // 4个缩进
        "unicode-bom": ["error", 'never'], // 文件禁止bom头
        "no-tabs": "error",
        "camelcase": ["error", {"properties": "always"}], // 使用驼峰命名法
        "quotes": ["error", 'single'], // 使用单引号
        "semi": ["error", 'never'], // 禁止 ; 分号
        "curly": ["error", 'all'], // if、else、for、while、do必须使用大括号
        "no-else-return": ["error", { // if 如果有return，则不能有else（代码简洁）
            allowElseIf: true,
        }],
        "no-lone-blocks": "error", // 禁用不必要的嵌套块 {}
        "no-multi-spaces": ["error", { // 禁止多余的空格
            // "exceptions": { // 手工对齐
            //     "Property": true,
            //     "VariableDeclarator": true,
            //     "ImportDeclaration": true
            // }
        }],
        "no-self-compare": "error", // 禁止自身比较 （只有写错的时候才会这样吧， 属于书写习惯）
        "no-sequences": "error", // 禁止 , 逗号
        "no-unused-expressions": ["error",{ "allowShortCircuit": true, "allowTernary": true }], // 禁止未使用过的表达式
        "no-useless-concat": "error", // 字符串连接请使用字符串模板
        "block-spacing": "error", // 代码块有空格 var obj = { return }
        "brace-style": ["error", '1tbs'], // {} 位置，放在控制语句或声明语句同一行的位置
        "comma-spacing": ["error", { // 逗号后面添加空格
            "after": true,
        }],
        "comma-dangle": ["error", { // 要求使用拖尾逗号
            "arrays": "never",
            "objects": "always",
            "imports": "never",
            "exports": "never",
            "functions": "never",
        }],
        "comma-style": ["error", 'last'], // 逗号在行尾
        "computed-property-spacing": ["error", 'never'], // 禁止在[]有空格
        // "id-blacklist": ["error", 'data', 'event'],  禁用一些关键字。
        "keyword-spacing": ["error", { //强制在关键字前使用一致的空格（后的由其他规则制定
            before: true,
        }],
        "lines-around-comment": ["error", { // 块级注释之前有空行
            beforeBlockComment: true,
        }],
        "multiline-ternary": ["error", "always-multiline"], // 如果表达式跨越多个行，则在三元表达式的操作数之间强制换行。
        "no-nested-ternary": "error", // 禁止嵌套三元运算
        "no-unneeded-ternary": "error", // 避免不必要的三元运算
        "no-lonely-if": "error", // else中禁止出现if
        "no-multi-assign": "error", // 禁止连续赋值
        "no-multiple-empty-lines": ["error", { // 禁止连续空行
            max: 1,
        }],
        "one-var": ["error", 'never'], // 每个作用域内，变量都要单独定义
        "operator-linebreak": ["error", 'before'], // 操作符换行时在前   // a \n + b
        "padded-blocks": ["error", 'never'], // 禁止块中首尾有空行 { log(1) }
        "padding-line-between-statements": ["error", {
            "blankLine": 'always',
            "prev": ['block-like', 'multiline-let', 'multiline-const', 'expression'], // 这些后面必须要有一个空行
            "next": '*',
        }], // 是否要空白换行
        "no-trailing-spaces": ["error", {"skipBlankLines": true}], // 空行允许使用空白符(比如回车下来的)
        "space-before-blocks": ["error", 'always'], // 块{}之前要有空格,
        "space-in-parens": ["error", 'never'], // 括号内要有空格
        "space-infix-ops": ["error", {"int32Hint": false}], // 中缀操作符周围要有空格 a ? c : e
        "space-unary-ops": [ // 一元操作符之前或之后存在空格
            2, {
                "words": true, // new、delete、typeof、void、yield
                "nonwords": false, //  -、+、--、++、!、!!
                "overrides": {
                    "new": false,
                    "++": true,
                },
            }],
        "template-curly-spacing": ["error", 'always'], // 模板插值要有括号
        "prefer-template": "error", // 使用字符串模板
        "line-comment-position": ["error", 'above'], // 行注释（//）只能在末尾出现

        /* ------------- 语法 -------------*/
        "default-case": "error", // switch
        "eqeqeq": "error", // 全等操作符
        "no-eq-null": "error", // 禁止与null做对比
        "no-implicit-coercion": "error", // 禁止~、!!、+、*操作符， 1.更清晰,2.确保想要的数据格式正确, 需要数据类型不同请通过其他手段处理
        "no-multi-str": "error", // 禁止多行字符串(\), 字符串模板替代
        "no-new-wrappers": "error", // 禁止对 String，Number 和 Boolean 使用 new 操作符
        "no-return-await": "error", // 禁用不必要的 return await,
        "no-throw-literal": "error", // catch只能 throw Error对象
        "no-unmodified-loop-condition": "error", // 禁止一成不变的条件： white(true) {}
        "no-template-curly-in-string": "error", // 确保字符串模板不会写错成引号。
        "switch-colon-spacing": ["error", { // case冒号:前无空格， 后有空格
            "after": true,
            "before": false,
        }],
        "no-duplicate-imports": "error", // 禁止import重复导入, 把导入写到一起去
        "no-useless-rename": ["error", { // 禁止在 import 和 export 和解构赋值时将引用重命名为相同的名字
            "ignoreDestructuring": false, // let {foo: foo} = baz
            "ignoreImport": false, // import { foo as foo } from "bar"
            "ignoreExport": false, // export { foo as foo }
        }],
        "symbol-description": "error", // 强制symbol有描述
        "prefer-numeric-literals": "error", // 禁止其他进制
        "accessor-pairs": "error", // setter、getter成对出现

        /* ------------- 其他 -------------*/
        "id-blacklist": ["error", 'data', 'id'], // 禁用 data,id等(待补充)命名， 请使用更有意义的名称
    },
}
