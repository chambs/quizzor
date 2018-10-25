import React from 'react';
import OuterLayer from '../outer_layer/OuterLayer';
import MainLayer from '../outer_layer/MainLayer';
import SideLayer from '../outer_layer/SideLayer';
import UpperMenu from '../upper_menu/UpperMenu';

const CreateQuizz = () => {
  return (
    <div>
      <UpperMenu/>
      <OuterLayer>
        <MainLayer>
          <h1>Create Quizz</h1>
        </MainLayer>
        <SideLayer>side pls</SideLayer>
      </OuterLayer>

    </div>

  );
};

export default CreateQuizz;
