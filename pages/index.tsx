import type { NextPage } from 'next'
import UserCard from "../components/UserCard/UserCard";
import axios from "axios";

const Home: NextPage = ({ user }: any) => {

  return (
    <>
      <UserCard user={user}/>
    </>
  )
}

export async function getStaticProps() {
  const { data } = await axios.get('https://jsonplaceholder.typicode.com/users/1')

  return {
    props: {
      user: data,
    },
  }
}

export default Home
