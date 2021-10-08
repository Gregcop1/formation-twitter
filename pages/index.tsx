import type {GetServerSideProps, NextPage} from 'next'
import List from "../components/tweets/List";
import {Tweet} from "../interfaces";
import Writer from "../components/tweets/Writer";

interface HomeProps {
  tweets: Tweet[];
}

const Home: NextPage<HomeProps> = ({ tweets }) => {
  return (
      <>
        <Writer />
        <List tweets={tweets} />
      </>
  )
}

export const getServerSideProps:GetServerSideProps<HomeProps> = async () => {
    const response = await fetch('http://localhost:3000/api/tweets');
    const tweets = await response.json();

    return {
        props: {
          tweets
        }
    }
}

export default Home
