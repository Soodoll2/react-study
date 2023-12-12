import React, { Children } from "react";

function Page(props) {
  const user = "Soojung2";
  const avatarSize = "100px"
  const permalink = "https:naver.com"

  // 엘리먼트 변수를 사용해도... 어차피 계속 전달은 해줘야 함
  const userLink = (
    <Link permalink={permalink}> 
      <Avatar user={user} avatarSize={avatarSize} />
    </Link>
  );

  return (
    <PageLayout userLink={userLink} />
  );
}

function PageLayout({userLink}){
  return (
    <div className="PageLayout">
      <NavigationBar userLink={userLink} />
    </div>
  );
}

function NavigationBar({userLink}){
  return (
    <div className="NavigationBar">
      {userLink}
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

function Avatar(props){
  return (
    <>
      {/* 상위 컴포넌트에서 props값을 전달해 주지 않으면 출력되지 않음 */}
      <p className="name">{props.user}</p>
      <img src="https://img.freepik.com/premium-psd/psd-3d-young-businessman-cartoon-avatar-wearing-suit_460336-1505.jpg" alt={props.user} border="10px" width={props.avatarSize}/>
    </>
  );
}

export default Page;