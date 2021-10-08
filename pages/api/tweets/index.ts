import type { NextApiRequest, NextApiResponse } from 'next'
import {Tweet} from "../../../interfaces";
import { tweetProvider } from "../../../services/tweetProvider";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Tweet[]|Tweet>
) {
  switch (req.method) {
    case 'GET': res.status(200).json(tweetProvider.tweets);
      break;
    case 'POST': {
      const body = JSON.parse(req.body)
      const newPost = tweetProvider.add(body.message);
      res.status(201).json(newPost);
    }
  }
}
