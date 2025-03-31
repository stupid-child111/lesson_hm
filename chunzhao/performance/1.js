const el = document.getElementById('myEl');
el.style.width = '100px';
//更新
el.style.height = '100px';
//更新
el.style.margin = '100px';
//更新

// 现代浏览器会打包更新
//但是可以避免
el.classList.add('new-class')//使用最多
el.style.cssText = 'width: 100px; height: 100px; margin: 100px;';