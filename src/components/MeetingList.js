import React, { Component } from 'react';
import MeetingItem from './MeetingItem';

const MeetingList=(props) => {
    const list = props.data;
    return (
        <div>
        {
            list.map((item)=>{
                return <MeetingItem item={item}/>
            })
        }
        </div>
    );
};

export default MeetingList;
