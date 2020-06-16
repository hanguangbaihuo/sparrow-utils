/**
 * 观察者模式 —— 发布订阅模式
 * 观察者模式定义了对象之间的一对多依赖，这样一来，当一个对象改变状态时，它的所有依赖者都会收到通知并自动更新。
 */

interface messageType {
  [key: string]: Function[]
}

/**
 * 观察者类
 */
class Observer {
  // 消息队列
  private message: messageType = {};

  // 观察者类的实例变量；使整个项目只保留一个实例。单例模式
  private static instance: Observer;

  /**
   * 注册信息
   * @param {string} action 注册事件（观察者）名称
   * @param {function} fn 事件触发（消息发布）时要执行的函数
   */
  public register(action: string, fn: Function): void {
    // && typeof this.message[action] === 'undefined'
    // 如果action存在，且长度大于等于1；
    // 并且action在消息队列中不存在
    if (action && action.length >= 1 && !this.message[action]) {
      this.message[action] = [fn];
    } else {
      // action在消息队列中存在
      this.message[action].push(fn);
    }
  }

  /**
   * 触发事件action
   * @param {string} action 事件action
   * @param {any} args 传入的函数执行时的参数
   */
  public trigger(action: string, args: any = {}) {
    // 如果该事件action没有被注册，则直接返回
    if (!this.message[action]) {
      return;
    }

    // 定义消息action类型
    const events = {
      action,
      args,
    };

    // 遍历消息队列，并执行相应函数
    for (let i = 0, len = this.message[action].length; i < len; i++) {
      this.message[action][i].call(this, events);
    }
  }

  /**
   * 删除事件action，为了防止误操作，没有写删除整个action的方法。
   * @param {string} action 注册事件（观察者）名称
   * @param {function} fn 事件触发（消息发布）时要执行的函数
   */
  public remove(action: string, fn: Function): void {
    // 如果消息队列存在
    if (Array.isArray(this.message[action])) {
      // 遍历消息队列
      for (let i = 0, len = this.message[action].length; i < len; i++) {
        // 如果该动作函数存在，则在消息动作队列中移除相应的动作fn
        if (this.message[action][i] === fn) {
          this.message[action].splice(i, 1);
        }
      }
    }
  }

  /**
   * 查看所有消息队列
   */
  public getMessage(): object {
    return this.message;
  }

  // 观察者类的实例变量；使整个项目只保留一个实例。单例模式
  public static getInstance(): Observer {
    if (!this.instance) {
      this.instance = new Observer();
    }
    return this.instance;
  }
}

export default Observer.getInstance();
