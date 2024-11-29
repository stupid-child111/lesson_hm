/*
*  @func 就地编辑
*  @param { id,parent 父节点, value 默认值}
*  @author xmy
*  @date 2024-11-28
*/

function EditInplace(id,parent,value){
    this.id = id;//跨函数共享属性
    this.parent = parent || document.body;
    this.value = value || '这个家伙很懒，什么都没有留下。';
    this.createElement(this.id);

}
EditInplace.prototype.createElement = function(){
//    console.log(id);\
//<div id="ep1"></div>
this.containerElement = document.createElement('div');
this.containerElement.id = this.id;
this.parent.appendChild(this.containerElement);
this.staticElement = document.createElement('span');
this.staticElement.innerText = this.value;
this.containerElement.appendChild(this.staticElement);
}