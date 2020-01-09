import _ from 'lodash';
// 引入css文件
import './style.css';
// 引入图片
import image from './image.jpg';

function component() {
    var element = document.createElement('div');

    // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
    element.innerHTML = _.join(['Hello', 'webpack', ,'love' ,'hot', 'hhh...'], ' ');
    element.classList.add("hello");

    var myImage = new Image();
    myImage.src = image;

    element.appendChild(myImage);

    return element;
}

document.body.appendChild(component());