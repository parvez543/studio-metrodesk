import React from 'react';
import LetsTalk from '../../Component/LetsTalk/LetsTalk';
import MeetTheTeam from '../../Component/MeetTheTeam/MeetTheTeam';
import TeamDhaka from '../../Component/TeamDhaka/TeamDhaka';
import TeamShahjadpur from '../../Component/TeamShahjadpur/TeamShahjadpur';

const Team = () => {
    return (
        <div>
            <MeetTheTeam/>
            <TeamDhaka/>
            <TeamShahjadpur/>
            <LetsTalk/>
        </div>
    );
};

export default Team;