import React from "react";
import Notification from "./Notification";

const reservedNotifications = [
    {
        id: 1,
        message: "안녕하세요, 오늘 일정을 알려드립니다.",
    },
    {
        id: 2,
        message: "점심식사 시간입니다.",
    },
    {
        id: 3,
        message: "이제 곧 미팅이 시작됩니다.",
    },
];

var timer;

class NotificationList extends React.Component {
    constructor(props) { // 생성자
        super(props); // 부모생성자 호출 - props 가 React.Component 의 props니까!

        this.state = {
            notifications: [], // 빈 배열 - 초기화
            nonono: "메롱"
        };
    }

    componentDidMount() {
        //const notifications = this.state.notifications;
        const { notifications, nonono } = this.state; // 객체 비구조화 ㅋ 아오 .... 
        console.log(nonono);
        timer = setInterval(() => {
            if (notifications.length < reservedNotifications.length) {
                const index = notifications.length;
                notifications.push(reservedNotifications[index]);
                this.setState({ // state 업데이트
                    notifications: notifications,
                });
            } else {
                this.setState({ // state 업데이트
                    notifications: [], // 초기화
                });
                clearInterval(timer); // 종료
            }
        }, 1000);
    }

    componentWillUnmount() { // 이거 없으면 오류난대여 ㅋ
        if (timer) {
            clearInterval(timer);
        }
    }

    render() {
        return (
            <div>
                {this.state.notifications.map((aaa) => {
                    return (
                        <Notification
                            key={aaa.id}
                            id={aaa.id}
                            message={aaa.message}
                        />
                    );
                })}
            </div>
        );
    }
}

export default NotificationList;