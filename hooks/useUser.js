import useSWR from 'swr';
import axios from 'axios';

const fetcher = (url) =>
  axios
    .get(url, {
      headers: {
        Authorization:
          typeof window !== 'undefined' && localStorage.getItem('BudBud_token'),
      },
    })
    .then((res) => res.data);

function userGrabber() {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('BudBud_user');
  }
}

export default function useUser() {
  const { data, error, mutate } = useSWR(
    `/api/profile/${userGrabber()}`,
    fetcher,
  );

  return {
    user: data,
    isLoading: !error && !data,
    isError: error,
    mutate: mutate,
  };
}
