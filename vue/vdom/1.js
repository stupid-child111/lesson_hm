// DOM树由DOM节点构成
// virtual node
const vnode = {

    type: 'div',
    //节点属性  或者 组件
    props: { id: 'todo-list' },
    children: [
      { 
        type: 'input', 
        props: { placeholder: 'Add new todo' } 
      },
      { 
        type: 'ul', 
        children: [
          { type: 'li', props: { class: 'todo-item' }, children: ['Buy groceries'] },
          { type: 'li', props: { class: 'todo-item' }, children: ['Read a book'] }
        ] 
      }
    ]
    };


<div id="todo-list">

</div>
// type props children 三部分