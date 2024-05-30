import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const signUpPromise = signUpUser(firstName, lastName);
  const uploadPromise = uploadPhoto(fileName);

  return Promise.all([signUpPromise, uploadPromise])
    .then((results) => {
      const settlementInfo = results.map((result) => ({
        status: 'fulfilled',
        value: result,
      }));
      return settlementInfo;
    })
    .catch((error) => {
      console.error('Error during profile signup:', error);

      const errorInfo = [
        { status: 'rejected', value: error },
        { status: 'rejected', value: error },
      ];
      return errorInfo;
    });
}
