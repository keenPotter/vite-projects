import { useState } from "react";
import ProfileGallery from "./ProfileGallery";
import LocationButton from "./LocationButton.jsx";
import "./App.css";

export default function App() {
  const [photoName, setPhotoName] = useState(null);

  const profileData = [
    { id: 1, name: "Ana Reyes", email: "ana.reyes@example.com" },
    { id: 2, name: "Juan dela Cruz", email: "juan.delacruz@example.com" },
    { id: 3, name: "Liza Cruz", email: "liza.cruz@example.com" },
    { id: 4, name: "Gwyn Lee", email: "gwyn.lee@example.com" },
    { id: 5, name: "Jay Son", email: "jay.son@example.com" },
    { id: 6, name: "Greggy Lee", email: "greggy.lee@example.com" },
    { id: 7, name: "Lily Cruz", email: "lily.cruz@example.com" },
    { id: 8, name: "Jan Erick", email: "jan.erick@example.com" },
    { id: 9, name: "Keen Potter", email: "keen.potter@example.com" },
    { id: 10, name: "Mari Bell", email: "mari.bell@example.com" },
  ];

  function handlePhoto(e) {
    const file = e.target.files[0];
    setPhotoName(file ? file.name : null);
  }

  return (
    <div className="app-container">
      <h1>Profile Directory</h1>
      <ProfileGallery profiles={profileData} />

      <section className="location-section">
        <h1>LOCATION FINDER</h1>
        <LocationButton />

        <form>
          <input
            type="file"
            accept="image/*"
            capture="environment"
            onChange={handlePhoto}
          />
        </form>
        {photoName && <p>Selected: {photoName}</p>}
      </section>
    </div>
  );
}