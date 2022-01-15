# 站点状态监控
- 本项目可以直接部署，快速上线，纯静态无需服务器。基于 UptimeRobot api 时时监控主机、网站、端口等在线状态；
- 依赖 github 静态页面，天然支持穿透天朝防火墙，理论上任何暴露于公网的墙外网站和端口服务都可以监控。

## 在线体验：  

简化版：<https://tjys.vercel.app/>  
![](https://cdn.jsdelivr.net/gh/Qikaile/cdn/img/Uptime%20Status.PNG)


## 如何复用这个项目？  
### 1- fork 一份到你的 github 账号下；  
### 2- 修改配置文件：config.js，主要是修改 apikey 内容 ,为了安全起见，<https://uptimerobot.com/dashboard#mySettings> 创建Read-Only API Key即可，将显示所有监控网站 

#### 若想显示部分网站监控需要按照下图一一配置对应特定于监视器的 API 密钥，如下图； 
![](https://cdn.jsdelivr.net/gh/Qikaile/cdn/img/warn.png.png)  

### 3- 绑定网站域名，恭喜部署完成！

#### 登录cloudflare主页，在主菜单右边，点击【网页】
![](https://cdn.jsdelivr.net/gh/qikaile/cdn/img/2021-02-15-01.png)

#### 进入后创建项目并绑定github账号，选择部署仓库
![](https://cdn.jsdelivr.net/gh/Qikaile/cdn/img/2021-02-15-02.png)
![](https://cdn.jsdelivr.net/gh/Qikaile/cdn/img/2021-02-15-03.png)

#### 部署
![](https://cdn.jsdelivr.net/gh/Qikaile/cdn/img/2021-02-15-04.png)

#### 访问域名，你也可以绑定自定义域名
![](https://cdn.jsdelivr.net/gh/Qikaile/cdn/img/2021-02-15-05.png)

修改 `config.js` 

Modify `config.js` 

## 说明：

本项目是来自原作的简化版：<https://github.com/yb/uptime-status>
