import React, { Children } from "react";

function Page(props) {
  const user = "Soojung2";
  const avatarSize = "100px"
  const permalink = "https:naver.com"

  return (
    <PageLayout user={user} avatarSize={avatarSize} permalink={permalink} />
  );
}

function PageLayout({user, avatarSize, permalink}){
  return (
    <div className="PageLayout">
      <NavigationBar user={user} avatarSize={avatarSize} permalink={permalink} />
    </div>
  );
}

function NavigationBar({user, avatarSize, permalink}){
  return (
    <div className="NavigationBar">
      <Link permalink={permalink}> 
        <Avatar user={user} avatarSize={avatarSize} />
      </Link>
    </div>
  );
}

function Link(props){
  return (
    <a href={props.permalink}>
      {props.children}
    </a>
  );
}

function Avatar({user, avatarSize}){
  return (
    <>
      {/* 상위 컴포넌트에서 props값을 전달해 주지 않으면 출력되지 않음 */}
      <p className="name">{user}</p>
      <img src="https://img.freepik.com/premium-psd/psd-3d-young-businessman-cartoon-avatar-wearing-suit_460336-1505.jpg" alt={user} border="10px" width={avatarSize}/>
    </>
  );
}

export default Page;