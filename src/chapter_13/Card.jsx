function Card(props) {
  //function Card({ title, backgroundColor, children }) {
  const { title, backgroundColor, children } = props;

  return (
    <div
      style={{
        margin: 8,
        padding: 8,
        borderRadius: 8,
        boxShadow: "0px 0px 4px grey",
        backgroundColor: backgroundColor || "white",
      }}
    >
      {/* 
        [조건부 랜더링]
          AND 연산 
          조건1(true) && 조건2 -> 결과값 출력
          조건1(false) && 조건2 -> false (조건1이 false이기 때문에 조건2는 평가하지 않음)
      */}
      {/* 
        [합성]
          Specialization : 범용적으로 쓸 수 있는 컴포넌트를 만들어 놓고 이를 특수화 시켜서 컴포넌트를 사용하는 합성 방식
          -> 범용적으로 사용 가능한 Card컴포넌트를 만들어 놓고 title props가 있을 경우에만 타이틀이 노출되는 카드로 사용
      */}
      {title && <h1>{title}</h1>}
      {/* 
        [합성]
          Containment : 하위 컴포넌트를 포함하는 합성 방법 (props.children)
      */}
      {children}
    </div>
  );
}

export default Card;