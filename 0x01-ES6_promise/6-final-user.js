import { signUpUser } from './4-user-promise';
import { uploadPhoto } from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const signUpPromise = signUpUser(firstName, lastName);
  const uploadPromise = uploadPhoto(fileName);

  return Promise.all([signUpPromise, uploadPromise])
    .then((results) => {
      const settlementInfo = [
        { status: results[0].status, value: results[0].value },
        { status: results[1].status, value: results[1].value },
      ];
      return settlementInfo;
    })
    .catch((error) => {
      console.error('Error during profile signup:', error);

      return [
        { status: 'rejected', value: error },
        { status: 'rejected', value: error },
      ];
    });
}
