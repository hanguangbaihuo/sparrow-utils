# sparrow-utils

- 麻雀团队自用工具库
- 项目初建，持续更新
- 由杨老板负责，所有代码都需要杨老板review；我目前保留merge代码的权限，以后移交杨老板。

---

# 项目说明

1. 所有代码t用ts实现

2. 生成模板文件和样板代码

    示例如下：

    以**/**结尾的会生成文件夹

    无**/**的会生成文件和对应测试文件

    并插入样板代码

    ```js
    npm run ge function/name //会在src下生成function文件夹和name的相关文件
    ```

    最外层的index.ts中的代码导入导出暂时需要手写，这个需要先规定好统一的模块导出格式，后续再加。

3. 测试

    ```js
    npm run test
    ```

4. 生成文档

    ```js
    npm run doc
    ```

5. 文件打包

    ```js
    npm run build
    ```

5. git提交commit前会自动经过测试

---

新增函数：

1. sleep：阻塞给定时间
2. delay：延迟给定时间执行业务函数

---

#### 是否是车牌号的验证:isLicensePlate(str)

[aaaa](src/is_license_plate.js)

```
// example
isLicensePlate('川A123AB') // true
isLicensePlate('川A2222学') // true
isLicensePlate('川AF12345') // true
isLicensePlate('川A12345D') // true

isLicensePlate('川A123456') // false
isLicensePlate('川A2222i') // false
isLicensePlate('川AA12345') // false
isLicensePlate('川AD123456') // false
```

#### 是否是手机号的验证:isPhone(str)

- 简单验证：首字符为1，后面10位数字

src/is_phone.js

```
// example
isPhone('13112345678') //true
isPhone('12112345678') //true
isPhone('1311234567') //false
```

#### 是否是正整数的验证:isPositiveInteger(str)

src/is_positive_integer.js

```
// example
isPositiveInteger('121321') //true
isPositiveInteger('-66666') //false
isPositiveInteger('0.1223') //false
```

#### 除去字符串中符号:removeStringMark(str,mark)

src/rm_str_mark.js

```
// example
removeStringMark('1,2,3,4,5,6,7,8,9', ',') //123456789
removeStringMark('-66666', '-') //66666
removeStringMark('0.122  3', ' ') //0.1223
```

#### 生成base64格式二维码:createQrcodeImg(code,size)

src/the_other/create_qrcode_img/index.js

- code为url地址时，url地址中不能有'?'

```
createQrcodeImg('麻雀大家庭', '200')
```

#### 时间格式化到天:formatToDay(date)

src/the_other/format_time/format_to_day.js

```
formatToDay('Tue Jul 23 2019 20:02:49 GMT+0800 (中国标准时间)') // 2019-07-23
```

#### 时间格式化到秒:formatToSecond(date)

src/the_other/format_time/format_to_second.js

```
formatToSecond('Tue Jul 23 2019 20:02:49 GMT+0800 (中国标准时间)') // 20:02:49
```

#### 返回今天这一时间段(今天00:00:00到当前时刻):returnToday()

src/the_other/format_time/return_today.js

```
returnToday() 
// {
//    start: '2019-07-23 00:00:00',
//    end: '2019-07-23 20:02:49',
//  }
```

#### 返回昨天这一时间段(昨天00:00:00到昨天23:59:59):returnYesterday()

src/the_other/format_time/return_yesterday.js

```
returnYesterday() 
// {
//    start: '2019-07-22 00:00:00',
//    end: '2019-07-22 23:59:59',
//  }
```

#### 返回当月这一时间段(本月1号00:00:00到当前时刻):returnThisMonth()

src/the_other/format_time/return_this_month.js

```
returnThisMonth() 
// {
//    start: '2019-07-01 00:00:00',
//    end: '2019-07-23 20:02:49',
//  }
```

#### 返回上月这一时间段(上月月1号00:00:00到上月最后一天23:59:59):returnLastMonth()

src/the_other/format_time/return_last_month.js

```
returnLastMonth() 
// {
//    start: '2019-06-01 00:00:00',
//    end: '2019-06-30 23:59:59',
//  }
```
