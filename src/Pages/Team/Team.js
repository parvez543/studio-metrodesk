import React from 'react';
import LetsTalk from '../../Component/LetsTalk/LetsTalk';
import MeetTheTeam from '../../Component/MeetTheTeam/MeetTheTeam';
import TeamDhaka from '../../Component/TeamDhaka/TeamDhaka';
import TeamShahjadpur from '../../Component/TeamShahjadpur/TeamShahjadpur';
import WantToBeStar from '../../Component/WantToBeStar/WantToBeStar';

const Team = () => {
    return (
        <div>
            <MeetTheTeam/>
            <TeamDhaka/>
            <TeamShahjadpur/>
            <WantToBeStar/>
            <LetsTalk/>
        </div>
    );
};

export default Team;