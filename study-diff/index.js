//主文件引入  
import h from './mysnabbdom/h'
import patch from './mysnabbdom/patch';

const myVnode1 = h('ul',{},'hello')

const container = document.getElementById('container');

patch(container,myVnode1)

