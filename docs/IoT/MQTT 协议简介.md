# MQTT 协议介绍

## 简介

MQTT 全称为 Message Queuing Telemetry Transport（消息队列遥测传输）是一种基于**发布/订阅**范式的“轻量级”消息协议，由 IBM 发布。

- MQTT 可以被解释为一种低开销，低带宽占用的即时通讯协议，可以用极少的代码和带宽的为连接远程设备提供实时可靠的消息服务，它适用于硬件性能低下的远程设备以及网络状况糟糕的环境下，因此 MQTT 协议在 IoT（Internet of things，物联网），小型设备应用，移动应用等方面有较广泛的应用。
- IoT 设备要运作，就必须连接到互联网，设备才能相互协作，以及与后端服务协同工作。而互联网的基础网络协议是 TCP/IP，MQTT 协议是基于 TCP/IP 协议栈而构建的，因此它已经慢慢的已经成为了 IoT 通讯的标准。

在简介完 MQTT 协议后，**EMQ君**将从其一些基本特点和基本概念为两部分，介绍 MQTT 协议。

## 基本特点

1. MQTT是一种**发布/订阅**传输协议，基本原理和实现如下；

   ![mqtt1](/about-notes/media/mqtt1.png)

   MQTT 协议提供一对多的消息发布，可以解除应用程序耦合，信息冗余小。该协议需要客户端和服务端，而协议中主要有三种身份：发布者（Publisher）、代理（Broker，服务器）、订阅者（Subscriber）。其中，消息的发布者和订阅者都是客户端，消息代理是服务器，而消息发布者可以同时是订阅者，实现了生产者与消费者的脱耦。

2. 使用 TCP/IP 提供网络连接，提供有序、无损、双向连接；

   MQTT 是一种连接协议，它指定了如何组织数据字节并通过 TCP/IP 网络传输它们。设备联网，也需要连接到互联网中，在大万维的世界中，TCP 如同汽车，有轮子就能用来运输数据，MQTT 就像是交通规则。在网络模型中，TCP是传输层协议，而 MQTT是在应用层，在 TCP 的上层，因此MQTT 也是基于这个而构建的，提高了可靠性。

3. 对负载内容屏蔽的消息传输；

   可以对消息订阅者所接受到的内容有所屏蔽。

4. 具体有三种消息发布的服务质量：

   - `至多一次`，消息发布完全依赖底层 TCP/IP 网络。会发生消息丢失或重复。这一级别可用于如下情况，环境传感器数据，丢失一次读记录无所谓，因为不久后还会有第二次发送。
   - `至少一次`，确保消息到达，但消息重复可能会发生。
   - `只有一次`，确保消息到达一次。这一级别可用于如下情况，在计费系统中，消息重复或丢失会导致不正确的结果。

5. 小型传输，开销小，固定长度的头部是 2 字节，协议交换最小化，以降低网络流量；

   整体上协议可拆分为：**固定头部+可变头部+消息体**，这就是为什么在介绍里说它非常适合"在物联网领域，传感器与服务器的通信，信息的收集"。

6. 使用Last Will和Testament特性通知有关各方客户端异常中断的机制；

   Last Will：即遗言机制，用于通知同一主题下的其他设备发送遗言的设备已经断开了连接。

   Testament：遗嘱机制，功能类似于Last Will。

## 基本概念

1. **MQTT 客户端** 

   >  一个使用 MQTT 协议的设备、应用程序等，它总是建立到服务器的网络连接。

   - 可以发布信息，其他客户端可以订阅该信息

   - 订阅其它客户端发布的消息
   - 退订或删除应用程序的消息
   - 断开与服务器连接

2. **MQTT 服务器**

   > MQTT 服务器以称为 Broker（消息代理），以是一个应用程序或一台设备。它是位于消息发布者 和订阅者之间

   - 接受来自客户端的网络连接
   - 接受客户端发布的应用信息
   - 处理来自客户端的订阅和退订请求
   - 向订阅的客户转发应用程序消息

3. **主题（Topic）**

   > 连接到一个应用程序消息的标签，该标签与服务器的订阅相匹配。服务器会将消息发送给订阅所匹配标签的每个客户端。

   - 要订阅的主题。一个主题可以有多个级别，级别之间用斜杠字符分隔。例如，`/world` 和 `emq/emqtt/emqx` 是有效的主题。

   - 订阅者的Topic name支持通配符#和+ ：
     - \# 支持一个主题内任意级别话题
     - +只匹配一个主题级别的通配符
   - 客户端成功订阅某个主题后，代理会返回一条 SUBACK 消息，其中包含一个或多个 returnCode 参数

4. **主题筛选器（Topic Filter）**

   > 一个对主题名通配符筛选器，在订阅表达式中使用，表示订阅所匹配到的多个主题。

5. **QoS（消息传递的服务质量水平）**

   >qos（服务质量或 QoS）标志表明此主题范围内的消息传送到客户端所需的一致程度。 

   - 值 0：不可靠，消息基本上仅传送一次，如果当时客户端不可用，则会丢失该消息。
   - 值 1：消息应传送至少 1 次。
   - 值 2：消息仅传送一次。

6. **会话（Session）**

   > 每个客户端与服务器建立连接后就是一个会话，客户端和服务器之间有状态交互。会话存在于一个网络之间，也可能在客户端和服务器之间跨越多个连续的网络连接。

7. **订阅（Subscription）**

   > 订阅包含主题筛选器（Topic Filter）和最大服务质量（QoS）。订阅会与一个会话（Session）关联。一个会话可以包含多个订阅。每一个会话中的每个订阅都有一个不同的主题筛选器。

   - 客户端在成功建立TCP连接之后，发送CONNECT消息，在得到服务器端授权允许建立彼此连接的CONNACK消息之后，客户端会发送SUBSCRIBE消息，订阅感兴趣的Topic主题列表（至少一个主题）
   - 订阅的主题名称采用修改版UTF-8编码，然后紧跟着对应的QoS值

8. **发布（publish）**

   > 控制报文是指从客户端向服务端或者服务端向客户端传输一个应用消息，MQTT 客户端发送消息请求，发送完成后返回应用程序线程

   - 比如安卓的推送服务，还有一些即时通信软件如微信等也是采用的推送技术。

9. **负载（Payload）**

   > 消息订阅者所具体接收的内容

## 简单示例

MQTT 协议主要是根据以下情况设计的：

- M2M（Machine to Machine），机器或设备间端到端通信，比如传感器之间的数据通讯。
- 设备（Machine）中，例如传感器，硬件能力很弱，协议要考虑尽量小的资源消耗，比如计算能力和存储等。

根据 MQTT 的基础了解后并结合简单的架构，在这里做一个简单的示例图，可以更直观的理解MQTT协议的通信模型。MQTT Broker 就选择 EMQ作为示范。比如有1个温度传感器（1个Machine），1个一个移动设备，1个电脑，一个服务器（3个Machine)，都可以得到或者显示温度传感器的温度值，需要先通过 MQTT 协议subscribe（订阅）一个比如叫 temperature 的 topic（主题）如下：

![mqtt](/about-notes/media/mqtt2.png)

图中移动设备，服务器，电脑需要先通过 EMQ subscribe 一个叫 temperature 的 topic，当温度传感器 publish 温度数据，三个设备就可以收到了。

 

这里只是简单的介绍了一点 MQTT 的基础内容，如果读者还有继续了解更多的话，请关注EMQ君的博客。