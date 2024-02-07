'use client';

import styles from './page.module.css';

import Gallery from './gallery';
import { User } from './types/user';
import { fetcher } from './utils/fetcher';
import useSWR from 'swr';

export default function Home() {
  // data from https://jsonplaceholder.typicode.com/users

  const { data, isLoading, error } = useSWR<User[]>(
    'https://jsonplaceholder.typicode.com/users',
    fetcher
  );

  console.log(data);

  if (error) return <div>Something went wrong!</div>;
  if (isLoading) return <div>Loading...</div>;

  return <main className={styles.main}>{data && <Gallery users={data} />}</main>;
}
