import React from 'react';

const styles = {
    listItem:{
        margin: '3px',
        fontFamily:'Helvetica',
        fontSize:'14px',
    },
};

const  MeetingItem = (props) => {
    return (
        <div style={styles.listItem} key={props.item.id}>{props.item.name}</div>
    );
};

export default MeetingItem;