<template>
  <div class="markdown-body">
    <mavon-editor
      :value="article"
      :toolbarsFlag="false"
      :subfield="false"
      defaultOpen="preview"
      fontSize="16px"
      :boxShadow="false"
    >
    </mavon-editor>
  </div>
</template>

<script>
  export default {
    name: "markdown-body",
    data() {
      let detail = "@(PHP)\n\n被观察者需要实现 `SplSubject` 接口，这个接口有三个方法\n>  \n- `abstract public void attach ( SplObserver $observer )` // 添加一个观察者\n-  `abstract public void detach ( SplObserver $observer )`  // 删除一个观察者\n- `abstract public void notify ( void )`  // 通知观察者\n 案例：\n```php\nclass User implements SplSubject    // 被观察者\n{\n    protected $data = array();\n    protected $observers;\n    \n    public function __construct() \n    {\n        $this->observers = new \SplObjectStorage(); // 使用对象存储容器保存观察者\n    }\n    public function attach(\SplObserver $observer) \n    {\n        $this->observers->attach($observer); // 添加观察者\n    }\n    public function detach(\SplObserver $observer) \n    {\n        $this->observers->detach($observer); // 删除观察者\n    }\n    public function notify() \n    {\n        foreach ($this->observers as $observer) {\n            $observer->update($this); // 通知所有观察者 \n        }\n    }\n    public function __set($name, $value)\n    {\n        $this->data[$name] = $value;\n        // 通知观察者用户被改变\n        $this->notify();\n    }\n}\n```\n观察者需要实现 `SplObserver` 接口，这个接口有一个方法\n> \n- `abstract public void update(SplSubject $subject)` \n 案例：\n```php\nclass UserObserver implements SplObserver   // 观察者\n{\n    public function update(\SplSubject $subject)\n    {\n        echo get_class($subject) . ' has been updated';\n        echo $subject->name;\n    }\n}\n```\n使用方式\n```php\n$user = new User();\n$user->attach(new UserObserver());\n$user->name = 'linzhen';\n```\n运行结果：\n```\nUser has been updated\n```"
      return {
        article: detail
      }
    }
  }
</script>

<style scoped>
  .v-note-wrapper {
    font-size: 16px;
  }
</style>
