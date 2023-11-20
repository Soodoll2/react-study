import React, { useState, useEffect } from "react";

const userList = [
  { id: 1, name: '김수정'},
  { id: 2, name: '정지은'},
  { id: 3, name: '안수연'},
]

// function ChatUserSelector(props){
//   const [userID, setUserID] = useState(1);
//   const isUserOnlie = 

//   useEffect(() => {
//     function handleStatusChange(status){
//       //setIsOnline(status.isOnline);
//     }

//     return() => {
//       handleStatusChange(1)
//     }
//   });


//   return (
//     <div>
//       <div style={{color:isOnline ? 'blue' : 'red'}}>
//         test {isOnline}
//       </div>
     
//     </div>
//   );
// }

// export default ChatUserSelector;

function UserStatus(props){
  const [isOnline, setIsOnline] = useState(0);

  useEffect(() => {
    function handleStatusChange(status){
      setIsOnline(status.isOnline);
    }

    return() => {
      handleStatusChange(1)
    }
  });


  return (
    <div>
      <div style={{color:isOnline ? 'blue' : 'red'}}>
        test {isOnline}
      </div>
     
    </div>
  );
}

export default UserStatus;