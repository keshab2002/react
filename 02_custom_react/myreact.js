function customRender(myReactComponent, target){
    const ele = document.createElement(myReactComponent.tag);
    ele.innerHTML = myReactComponent.chailred;
    for (const prop in myReactComponent.props) {
        ele.setAttribute(prop, myReactComponent.props[prop]);
    }
    target.appendChild(ele);
}

/* <a href="https://www.google.com" target="_blank" >Click me to go to google.com</a> */

myReactComponent = {
    tag: 'a',
    props: {
        href: 'https://www.google.com',
        target: '_blank'
    },
    chailred: 'Click me to go to google.com'
}

const target = document.getElementById('root');

customRender(myReactComponent, target);