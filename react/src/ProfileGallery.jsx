import React from 'react'
import ProfileCard from './ProfileCard'
import './ProfileGallery.css'

export default function ProfileGallery({ profiles }) {
  // Validate profiles prop
  if (!Array.isArray(profiles)) {
    return <div>Error: profiles must be an array</div>
  }

  return (
    <div className="profile-gallery">
      {profiles.length === 0 ? (
        // Empty state
        <div className="empty-state">
          <h2 className="empty-title">No Profiles Found</h2>
          <p className="empty-message">
            There are no profiles to display. Try adjusting your filters or add new profiles to get started.
          </p>
        </div>
      ) : (
        // Gallery grid
        <div className="gallery-grid">
          {profiles.map((profile) => (
            <ProfileCard
              key={profile.id}
              name={profile.name}
              email={profile.email}
            />
          ))}
        </div>
      )}
    </div>
  )
}
