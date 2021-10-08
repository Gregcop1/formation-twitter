import Icon from "../medias/Icon";
import {Tweet} from "../../interfaces";

interface TweetItemProps {
    tweet: Tweet;
}

const TweetItem = ({ tweet }: TweetItemProps) => {
    const { author, image, message, shares } = tweet;

    return (
        <article>
            <header>
                <h2>{author.name} {author.account}</h2>
            </header>
            {!!image && (
                <img src={image} alt=""/>
            )}
            <p>{message}</p>
            <footer>
                <button><Icon name="comment-o" />{shares.answer}</button>
                <button><Icon name="retweet" />{shares.retweet}</button>
                <button><Icon name="heart-o" />{shares.like}</button>
                <button><Icon name="share-alt" /></button>
            </footer>
        </article>
    );
}

export default TweetItem