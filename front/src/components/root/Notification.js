import  "./Notification.css";

const Notification = ({notification}) => {

    const {user, action} = notification

    const actionMap = {
        NEW_ROUND : `requested new round`,
        DASHBOARD : `revealed story points`,
    }


    return <div className={'fixed z-10 w-full top-6 flex justify-center notificationAnim'}>
        <div className={'bg-sky-500 w-fit p-4 rounded-2xl drop-shadow-lg '}>
            <h1 className={'text-2xl text-white'}><span className={'font-bold'}>{user}</span> {actionMap[action]}</h1>
        </div>
    </div>;
}

export default Notification;
