'use client'

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { GetServerSideProps } from 'next';

const Home = () => {
  const router = useRouter()
 useEffect(() => {
    router.push("/login");
  }, [router]);
  
  return <div>Redirecting...</div>
}
export default Home;
