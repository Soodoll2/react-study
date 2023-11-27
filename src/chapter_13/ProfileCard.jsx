import Card from "./Card";

function ProfileCard(props) {
    return (
        <>
        <Card title="SOODOLL" backgroundColor="#4ea04e">
            <p>안녕? 나는 소플의 책으로 리액트를 공부하는 수돌이야.</p>
            <p>소플... 두고보자</p>
        </Card>
        <Card>
            <p>나는 제목없는 카드야 ㅋ </p>
        </Card>
        </>
    );
}

export default ProfileCard;