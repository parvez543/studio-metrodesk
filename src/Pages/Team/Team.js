import React from 'react';
import LetsTalk from '../../Component/LetsTalk/LetsTalk';
import MeetTheTeam from '../../Component/MeetTheTeam/MeetTheTeam';
import TeamDhaka from '../../Component/TeamDhaka/TeamDhaka';

const Team = () => {
    return (
        <div>
            <MeetTheTeam/>
            <TeamDhaka/>
            <LetsTalk/>
        </div>
    );
};

export default Team;