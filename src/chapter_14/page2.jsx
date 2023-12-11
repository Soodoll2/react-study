import React, { Children } from "react";

function Page(props) {
  const user = props.user;

  const userLink = (
    <Link permalink=""> 
      <Avatar user="soojung" avatarSize="100px" />
    </Link>
  );

  return (
    <PageLayout userLink={userLink} />
  );
}

function PageLayout(userLink){
  return (
    <div className="PageLayout">
      <NavigationBar userLink={userLink} />
    </div>
  );
}

function NavigationBar(userLink){
  return (
    <div className="NavigationBar">
      {userLink}
    </div>
  );
}

function Link(props){
  return (
    <a href="">
      {props.children}
    </a>
  );
}

function Avatar({user, avatarSize}){
  return (
    <>
      {/* 상위 컴포넌트에서 props값을 전달해 주지 않으면 출력되지 않음 */}
      <p className="name">z</p>
      <img src="https://img.freepik.com/premium-psd/psd-3d-young-businessman-cartoon-avatar-wearing-suit_460336-1505.jpg" alt="" border="10px" width=""/>
    </>
  );
}

export default Page;