import React from 'react'
import './ProfileCard.css'

export default function ProfileCard({ name, email }) {
  return (
    <div className="profile-card">
      <div className="profile-header">
        <h3 className="profile-name">{name}</h3>
      </div>
      <div className="profile-body">
        <p className="profile-email">
          <span className="label">Email:</span>
          <a href={`mailto:${email}`}>{email}</a>
        </p>
      </div>
    </div>
  )
}
