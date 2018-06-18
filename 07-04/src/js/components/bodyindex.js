import React from 'react';
export default class BodyIndex extends React.Component{
  render(){

    var userName = 'Parry';
    var boolInput = true;

    var html = "IMOOC&nbsp;LESSON";
    var html2 = "IMOOC\u0020LESSON";

    //comments

    return (
      <div>
        <h2>页面的主体内容</h2>
        <p>{ userName==='' ? '用户还没有登录' : '用户名：' + userName }</p>
        <p><input type='button' value = {userName} disabled={boolInput}/></p>
        {/*注释*/}
        <p>{html}</p> {/*需要进行 Unicode 的转码*/}
		<p>{html2}</p>
        <p dangerouslySetInnerHTML ={{__html : html}}></p>{/*此方法可能存在XSS攻击*/}
      </div>
    )
  }
}
