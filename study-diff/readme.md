- **h**函数用来产生**虚拟节点**
h('a', { props: { href:'http://www.example.com'}},'示例');

将得到这样的虚拟节点:
{"sel":"a","data": { props: { href: 'http://www.example.com'}},"text":"示例”}

它表示的真正的DOM节点:
<a href="http://www.example.com">示例</a>

- h 函数可以嵌套使用