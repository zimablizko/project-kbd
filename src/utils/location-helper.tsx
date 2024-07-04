import { PlayerLocation } from '../store/model/game-state.model';

export const getDistanceInMeter = (playerLocation: PlayerLocation, destinationLocation: PlayerLocation) => {
  if (!playerLocation || !destinationLocation) {
    return 0;
  }
  const R = 6371e3; // metres
  const φ1 = (playerLocation.lat * Math.PI) / 180; // φ, λ in radians
  const φ2 = (destinationLocation.lat * Math.PI) / 180;
  const Δφ = ((destinationLocation.lat - playerLocation.lat) * Math.PI) / 180;
  const Δλ = ((destinationLocation.long - playerLocation.long) * Math.PI) / 180;

  const a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) + Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return Math.round(R * c); // in metres
};
