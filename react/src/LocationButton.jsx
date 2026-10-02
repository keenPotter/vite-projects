import { useState } from 'react'

// Wraps the browser Geolocation API in a Promise so we can use async/await
export function getCurrentLocation() {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(new Error('Geolocation is not supported by your browser'))
      return
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        resolve({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          accuracy: position.coords.accuracy, // in meters
        })
      },
      (error) => reject(error),
      { enableHighAccuracy: false, timeout: 15000, maximumAge: 60000 }
    )
  })
}

// Turns the browser's error codes into messages a user can act on
function getErrorMessage(err) {
  switch (err.code) {
    case 1: // PERMISSION_DENIED
      return 'Location access was denied. Allow it in your browser settings and try again.'
    case 2: // POSITION_UNAVAILABLE
      return 'Your location is unavailable. Check that GPS or Wi-Fi is on.'
    case 3: // TIMEOUT
      return 'Getting your location took too long. Please try again.'
    default:
      return err.message || 'Unable to retrieve location. Please try again later.'
  }
}

export default function LocationButton() {
  const [location, setLocation] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  async function handleClick() {
    setLoading(true)
    try {
      const coords = await getCurrentLocation()
      setLocation(coords)
      setError(null)
    } catch (err) {
      setLocation(null)
      setError(getErrorMessage(err))
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <button onClick={handleClick} disabled={loading}>
        {loading ? 'Locating...' : 'Share My Location'}
      </button>

      {location && (
        <p>
          Lat: {location.latitude.toFixed(5)}, Long: {location.longitude.toFixed(5)}
          {' '}(±{Math.round(location.accuracy)} m){' '}
          <a
            href={`https://www.google.com/maps?q=${location.latitude},${location.longitude}`}
            target="_blank"
            rel="noreferrer"
          >
            View on map
          </a>
        </p>
      )}

      {error && <p style={{ color: '#dc2626' }}>{error}</p>}
    </div>
  )
}