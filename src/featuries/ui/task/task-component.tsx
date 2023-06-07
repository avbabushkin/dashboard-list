import React, {FC} from 'react';
import {ITaskProps} from '../../../shared/types/types';

export const TaskComponent: FC<ITaskProps> = ({
  id,
  title,
  completed
}) => {

  return (
    <div>
      <span>
        {title}
      </span>
      <input type="checkbox" checked={completed} />
    </div>
  )
};