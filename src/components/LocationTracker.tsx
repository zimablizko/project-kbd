import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { GAME_DATA } from '../consts/game-data';
import { setLocation } from '../store/game-state';
import { PlayerLocation } from '../store/model/game-state.model';
import classes from './LocationTracker.module.css';

const LocationTracker = () => {
  const [location, updateLocation] = useState<GeolocationPosition | null>(null);
  const [error, setError] = useState<string | null>(null);
  const dispatch = useDispatch();

  useEffect(() => {
    // Check if geolocation is supported
    if (!navigator.geolocation) {
      setError('Geolocation is not supported by your browser');
      return;
    }

    // Function to handle success
    const handleSuccess = (position: GeolocationPosition) => {
      updateLocation(position);
      const playerLocation = {
        lat: position.coords.latitude,
        long: position.coords.longitude,
      } as PlayerLocation;
      setError(null); // Clear any existing errors
      dispatch(setLocation(JSON.stringify(playerLocation)));
    };

    // Function to handle error
    const handleError = (error: GeolocationPositionError) => {
      setError(`Geolocation error: ${error.message}`);
    };

    // Start watching the position
    const watcherId = navigator.geolocation.watchPosition(handleSuccess, handleError, {
      enableHighAccuracy: true, // May improve accuracy but can increase power consumption
      timeout: 5000, // Maximum time allowed to return a position
      maximumAge: 0, // Maximum age of a cached position that's acceptable to return
    });

    // Cleanup function to stop watching the position when the component unmounts
    return () => navigator.geolocation.clearWatch(watcherId);
  }, []);

  return (
    <div className={classes.locationtracker}>
      {GAME_DATA.settings.debugMode ? (
        error ? (
          <p>Error: {error}</p>
        ) : location ? (
          <div>
            <span>
              Latitude: {location.coords.latitude} <br /> Longitude: {location.coords.longitude}
            </span>
          </div>
        ) : (
          <p>Loading...</p>
        )
      ) : null}
    </div>
  );
};

export default LocationTracker;
