
"use client";
import { useState, useEffect } from 'react'
import { supabase } from "../supabaseclient"
import NavBar from '@/app/public_components/navbar';


function testdata() {
  const [fetchError, setFetchError] = useState<null|string>(null)
  const [users, setUsers] = useState<any[]>([])

  useEffect(() => {
    const getUsers = async () => {
      const { data: users, error } = await supabase.from('Users').select()

      if(error){
        setFetchError('could not fetch the users')
        setUsers([])
        console.log(error)
      }
      if(users){
        setUsers(users)
        setFetchError(null)
      }


    }
    getUsers()
  }, [])

//THIS IS NOT DISPLAYING DATA FOR SOME REASON
  return (
    <main className="h-screen">
        <NavBar/>

        <div className="pagecontainer pt-20">
            {fetchError && (<p>{fetchError}</p>)}
            {users && (
              <div>
                {users.map(user=>(<p>{user.firstName}</p>))}
              </div>
            )}
        </div>
        <pre>{JSON.stringify(users)}</pre>
    </main>

    
  )

}



export default testdata



