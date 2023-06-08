import React, { ChangeEvent, FC, useState, memo } from 'react'

import { ICreateButtonProps } from './create-button-types';
import { TextField, Button, Space, Title } from '@shturval/takelage-ui';
// import styles from './styles.module.scss'

export const CreateButtonComponent: FC<ICreateButtonProps> = memo(({onEntityCreate, placeholder}) => {
  console.log('!!!!!!!!!!')
  const [title, setTitle] = useState('')

  const handleChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.currentTarget.value)
  }

  const handleCreateEntity = () => {
    onEntityCreate(title)
  };

  return (
    <div>
      <Title>
        <Space align={'center'}>
          <TextField placeholder={placeholder} type="text" value={title} onChange={handleChangeTitle} />
          <Button 
            onClick={handleCreateEntity}
            iconName={'plus'}
            title={'add'}
            size={'large'}
          />
        </Space>
      </Title>
    </div>
  )
});