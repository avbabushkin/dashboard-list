import { AppThunk } from "../../../store/store"
import { authApi } from "src/featuries/api/auth/auth-api"

// export const getCurrentUserTC = (): AppThunk => async () => {
//   try {
//     const res = await authApi.currentUser()
//     // res.data.resultCode === 0 
//     // ? dispatch() 
//     // : alert(res.data.messages[0])
//   } catch (error) {
//     alert(error)
//   }
// }

export const createSessionTC = (data: any): AppThunk => async () => {
  try {
    const res = await authApi.createSession(data)
    console.log(res)
    // TODO: add session data in state
    // res.data.resultCode === 0
    // ? dispatch(setCurrentUser())
    // : alert(res.data.messages[0])
  } catch (error) {
    alert(error)
  }
}

// export const deleteSessionTC = (): AppThunk => async () => {
//   try {
//     const res = await authApi.deleteSession()
//     // TODO: delete session data from state
//     // res.data.resultCode === 0 
//     // ? dispatch(unsetCurrentUser()) 
//     // : alert(res.data.messages[0])
//   } catch (error) {
//     alert(error)
//   }
// }