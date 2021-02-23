import useSWR from 'swr';
import axios from 'axios';

const fetcher = (url) => axios.get(url).then((res) => res.data);

export default function useUser(username) {
  const { data, error } = useSWR(`/api/profile/${username}`, fetcher);

  return {
    user: data,
    isLoading: !error && !data,
    isError: error,
  };
}
