import React from 'react'
import Bankinfo from '../../components/Bankinfo'
import { useSelector } from 'react-redux'

import '../../Styles/app.css'

function User(userOld) {
  const userName = useSelector((state) => state.user)

  return (
    <div className="user-container">
      <main className="main bg-dark">
        <div className="header">
          <h1>
            Welcome back
            <br />
            {userName.firstname + ' ' + userName.lastname}
          </h1>
          <button className="edit-button">Edit Name</button>
        </div>
        <h2 className="sr-only">Accounts</h2>
        <div>
          <Bankinfo
            title="Argent Bank Checking (x8349)"
            amount="$2,082.79"
            description="Available Balance"
          />
          <Bankinfo
            title="Argent Bank Savings (x6712)"
            amount="$10,928.42"
            description="Available Balance"
          />
          <Bankinfo
            title="Argent Bank Credit Card (x8349)"
            amount="$184.30"
            description="Current Balance"
          />
        </div>
      </main>
    </div>
  )
}

export default User
