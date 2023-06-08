import React, { ChangeEvent, FC, useState } from 'react'

import { ICreateButtonProps } from './create-button-types';
import { TextField, Button } from '@shturval/takelage-ui';
import styles from './styles.module.scss'

export const CreateButtonComponent: FC<ICreateButtonProps> = ({onEntityCreate}) => {
  const [title, setTitle] = useState('')

  const handleChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.currentTarget.value)
  }

  const handleCreateEntity = () => {
    onEntityCreate(title)
  };

  return (
    <div className={styles.root}>
      <TextField placeholder="Введите текст" type="text" value={title} onChange={handleChangeTitle} />
      <Button onClick={handleCreateEntity}>Add</Button>
    </div>
  )
};