import useSWR from 'swr';
import axios from 'axios';

//token

//decode token, to get the username

//plug username to my SWR hook

// const currentUser = () => {
//   const token = typeof window !== 'undefined' && localStorage.getItem('token');
//   if (!token) {
//     return null;
//   } else {
//     jwt.verify(token, jwtSecret, (err, decoded) => {
//       err ? null : decoded.payload.username;
//     });
//   }
// };
// console.log(currentUser());

const fetcher = (url) =>
  axios
    .get(url, {
      headers: {
        Authorization:
          typeof window !== 'undefined' && localStorage.getItem('token'),
      },
    })
    .then((res) => res.data);

export default function useUser(username) {
  const { data, error } = useSWR(`/api/profile/${username}`, fetcher);

  return {
    user: data,
    isLoading: !error && !data,
    isError: error,
  };
}

// {
//   headers: {
//     Authorization:
//       typeof window !== 'undefined' && localStorage.getItem('token'),
//   },
