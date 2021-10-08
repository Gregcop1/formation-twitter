import type {GetServerSideProps, NextPage} from "next";
import {Tweet} from "../../interfaces";
import TweetItem from "../../components/tweets/TweetItem";

interface TweetViewProps {
    tweet: Tweet;
}

const TweetView: NextPage<TweetViewProps> = ({ tweet }) => (
    <TweetItem tweet={tweet} />
)

export default TweetView;

export const getServerSideProps:GetServerSideProps<TweetViewProps> = async ({query}) => {
    const response = await fetch(`http://localhost:3000/api/tweets/${query.id}`);

    if (!response.ok) {
        return {notFound: true};
    }

    return {
        props: {
           tweet: await response.json(),
        }
    }
}