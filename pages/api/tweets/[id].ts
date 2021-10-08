import type { NextApiRequest, NextApiResponse } from 'next'
import {Tweet} from "../../../interfaces";
import { tweetProvider } from "../../../services/tweetProvider";

interface Error {
    message: string;
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Tweet|Error>
) {
    switch (req.method) {
        case 'GET': {
            const tweet = tweetProvider.getTweet(req.query.id as string);

            if (undefined === tweet) {
                res.status(404).json({message: 'Tweet not found'});
                return;
            }

            res.status(200).json(tweet);
        } break;
    }
}
