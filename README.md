# 政元软件 机试题

### 背景说明

从github：https://github.com/ldq1220/zhengyaun-test.git 地址  colne下代码，并成功跑起来。

项目技术栈： Vue3、 Pinia 、 Element-plus。

### 试题介绍

草稿箱 组件设计、ui样式、界面交互。

草稿状态总共有**五个状态status**：1：代提炼    2：提炼中   3：待训练   4：训练中   5：代移入

五个状态分别对应不同的 **头部展示**以及**内容展示**。



- 状态1（代提炼）：头部展示： 1.编辑、 保存。2.提炼问答 （当原文本**输入框获取焦点**时，展示**保存按钮**，隐藏**编辑按钮**）。

- 状态2（提炼中)  ：内容区域添加loading 效果即可。

- 状态3（待训练）：头部展示： 1.tabs标签页，分别为**查看原文、单个修改、批量修改**对应不同的内容展示。2.训练文本。
- 状态4 （训练中）：内容区域添加loading 效果即可。
- 状态5 （待移入）：头部展示： 1.tabs标签页，分别为**查看原文、查看问答**对应不同的内容展示。2.移入知识库。

### 试题要求

内容展示区域 **状态3单个修改tab**和**状态5查看问答tab**  以**卡片形式**展示的**问答对** ，仅做**点击卡片** 弹出修改**对话框** ，对话框内容为form表单 呈现卡片的问答内容即可。（不需要完成真实修改效果）

**状态3**下**批量修改**内容展示区域  每一个问题和答案都可以点击  进行输入框编辑。

<font color="red">**注意样式交互 和 组件拆分**</font>

### 交题方式

删除node_modules文件夹，将代码压缩为zip，发送至面试官邮箱。

### 时间限制

5小时。



### 内容区域 原型图

![1709175946733](C:\Users\gemel\AppData\Roaming\Typora\typora-user-images\1709175946733.png)

![1709176019525](C:\Users\gemel\AppData\Roaming\Typora\typora-user-images\1709176019525.png![1709176691528](C:\Users\gemel\AppData\Roaming\Typora\typora-user-images\1709176691528.png)

![1709176079321](C:\Users\gemel\AppData\Roaming\Typora\typora-user-images\1709176079321.png)



![1709176578787](C:\Users\gemel\AppData\Roaming\Typora\typora-user-images\1709176578787.png)

![1709176139919](C:\Users\gemel\AppData\Roaming\Typora\typora-user-images\1709176139919.png)