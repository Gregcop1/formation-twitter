import {Share, Tweet, User} from "../interfaces";
import tweetsHelper from "../helpers/tweets";

class TweetProvider {
    private _tweets: Tweet[];

    constructor() {
        this._tweets = tweetsHelper.generateTweets(30);
    }

    get tweets() {
        return this._tweets;
    }

    getTweet(id: string): Tweet|undefined {
        return this._tweets.find(tweet => tweet.id === +id);
    }

    add(message: string): Tweet {
        const newPost = {
            id: Math.random() * 99999999,
            author: {
                name: 'Grégory Copin',
                email: 'gregcop1@gmail.com',
                account: '@gregcop1',
                tweetCount: 42,
                subscriber: 0,
                subscription: 0,
            },
            date: new Date().getTime(),
            message,
            shares: {
                answer: 0,
                like: 0,
                retweet: 0,
            },
        };
        this._tweets = [
            newPost,
            ...this._tweets
        ];


        return newPost;
    }
}

export const tweetProvider = new TweetProvider();