export default function changeLocation (location) {
  return {
    type: 'SET_LOCATION',
    payload: location,
  };
}

// expect (changeLocation ('Seattle, WA')).toEqual ({
//   type: 'SET_LOCATION',
//   payload: 'Seattle, WA',
// });
// // action creators are ideal for snapshot tests
// expect (changeLocation ('Seattle, WA')).toEqualSnapShot ();
