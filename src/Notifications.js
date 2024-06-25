import { Notification } from '@mui/common';

const ReactToastify = require('react-toastify');
const NotificationSuccess = () => (
    <Notification
        severity='success'
        //onCloseClick={closeToast}
        icon='success-icon'
        hasIcon={true}
        title='Submit Successful'
        //titleRightText={titleRightText}
        //onDetailsClick={() => {}}
    />
);

const NotificationFailure = ({ closeToast, text,error }) => (
    
    <Notification
        className='toast-notification'
        severity='critical'
        hasIcon={true}
        icon='errorToast'
        titleRightText='More Info'
        title={text}
        onTitleRightTextClick={() => {alert(error)}}
       
    />
    
);

const ImportantToastNotification = ({ closeToast }) => (
    <Notification
        className='toast-notification'
        severity='important'
        hasIcon={true}
        icon='importantToast'
        title='Any changes not submitted prior to 9PM will be lost.'
    />
);

const InformationToastNotification = () => (
    <Notification
        className='toast-notification'
        severity='information'
        hasIcon={true}
        icon='informationToast'
        title='Must make at least one change before submit.'
    />
);



  
const errorNotify=(text, error)=> {
     ReactToastify.toast(<NotificationFailure closeToast={false} text={text} error={error}/>);
  }


const importantNotify=()=> {
    ReactToastify.toast(<ImportantToastNotification closeToast={false} />);
}

const informationNotify=()=> {
    ReactToastify.toast(<InformationToastNotification closeToast={false} />);
}

export {ReactToastify,errorNotify,importantNotify,informationNotify,NotificationSuccess};
