import React from 'react'
import { useForm, SubmitHandler, Controller } from 'react-hook-form'
import { useAppDispatch } from 'src/shared/hooks/hooks'
import { Button, Space, Checkbox, TextField, Title, Panel } from '@shturval/takelage-ui'
import { createSessionTC } from '../../featuries/model/auth/auth-thunk'
import { ILoginForm } from './login-page-types'
export const LoginPageComponent = () => {
  const dispatch = useAppDispatch()

  const { control, handleSubmit, formState: { errors } } = useForm<ILoginForm>();
  const onSubmit: SubmitHandler<ILoginForm> = (data) => {
    dispatch(createSessionTC(data))
    console.log(data);
    console.log(errors)
  } 

  return (
    <Panel>
      <Title>
        Login page
      </Title>
       <form onSubmit={handleSubmit(onSubmit)}>
          <Space direction={'vertical'} size={'middle'}>
            <Controller 
              control={control}
              rules={{required: true}}
              name={'email'} 
              defaultValue={''}
              render={({ field }) => <TextField 
                {...field}
                placeholder={'email'}
              />
            } 
            />
            {errors.email && <span style={{color: 'red'}}>Поле обязательно для заполнения</span>}

            <Controller 
              control={control} 
              rules={{required: true}}
              name={'password'} 
              defaultValue={''}
              render={({ field }) => <TextField 
                {...field}
                type={'password'}
                placeholder={'password'}
              />
            } 
            />
            {errors.password && <span style={{color: 'red'}}>Поле обязательно для заполнения</span>}

            <Controller 
              control={control} 
              name={'rememberMe'} 
              defaultValue={false}
              render={({ field }) => <Checkbox 
                {...field}
                title={'remember me'}
              />} 
            />
            <Button type={'submit'} title={'login'} variant={'primary'} />
          </Space>
       </form>
    </Panel>
  )
};