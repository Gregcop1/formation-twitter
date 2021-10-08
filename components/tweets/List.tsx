import Link from "next/link"
import {Tweet} from "../../interfaces";
import TweetItem from "./TweetItem";

interface ListProps {
    tweets: Tweet[];
}

const List = ({ tweets }: ListProps) => (
    <ul>
        {tweets.map(tweet => (
            <li key={tweet.id}>
                <Link href={`/tweets/${tweet.id}`}>
                    <a>
                        <TweetItem tweet={tweet} />
                    </a>
                </Link>
            </li>
        ))}
    </ul>
);

export default List;