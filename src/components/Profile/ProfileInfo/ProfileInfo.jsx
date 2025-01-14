import React from 'react';
import s from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
 return  (
     <div className={s.content}>
        <img
            className={s.img}
            src="data:image/jpeg;base64,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"
        />
    </div>
 )
}


export default ProfileInfo;