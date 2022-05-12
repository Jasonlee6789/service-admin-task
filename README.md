# service-admin-dev/test/demo/trial/customer小区同步工具

## 原理:

## 准备工作:

先配置好dev小区. 测试通过后.

### 第一步:通过get dev小区的/api/curd/TaskDefinitions?query={"offset":0,"limit":100}接口

把这接口返回的json放到项目的src/data/dev-task=definitions.ts中.

这一步的主要目的是为了把dev小区的task definitions的json配置作为一个参考标准

### 第二步: 在不同的小区中,先获取TaskDefinitions列表,对当前小区的task进行覆盖,调用put /api/curd/TaskDefinitions接口进行更新

具体流程:

获取到列表后

循环当前小区获取到的列表,把dev的的cronExpression,httpRequest,activated覆盖到当前小区, 这里注意,id不能覆盖,不然,就无法更新成功

然后,把覆盖过的task当成data去调用put /api/curd/TaskDefinitions进行更新


### 第三步:打包src的代码,在dist文件夹拿到,test,demo,trial,customer小区的脚本. 打开对应的小区网站,在console里粘贴js脚本即可


# 使用方法:
### 第一步:执行命令:yarn build, 会在dist生成dev,test,demo,trial,customer环境的脚本
### 第二步:用chrome浏览器打开dev,test,demo,trial,customer小区的service-admin. 打开chrome的devtool工具,找到console,然后,粘贴对应的脚本即可同步完成




