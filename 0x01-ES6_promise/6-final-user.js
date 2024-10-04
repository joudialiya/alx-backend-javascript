import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const result = [];
  Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((values) => {
      for (const value of values) {
        result.push({
          status: value.status,
          value: (value.status === 'fulfilled') ? value.value : value.reason,
        });
      }
    });
  return result;
}
