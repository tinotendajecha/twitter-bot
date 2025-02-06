import { TwitterApi } from "twitter-api-v2";
import dotenv from "dotenv";
dotenv.config();

export async function POST(req: Request) {
  try {
    if (req.method !== "POST") {
      return new Response(JSON.stringify({ error: "Method not allowed" }), {
        status: 405,
      });
    }

    // const { tweet } = await req.json();

      const tweet = 'Hello from the X API 👋 using Cron Job!'

    if (!tweet) {
      return new Response(JSON.stringify({ error: "Please provide tweet!" }), {
        status: 400,
      });
    }

    const client = new TwitterApi({
      appKey: process.env.TWITTER_API_KEY!,
      appSecret: process.env.TWITTER_API_SECRET!,
      accessToken: process.env.TWITTER_ACCESS_TOKEN!,
      accessSecret: process.env.TWITTER_ACCESS_SECRET!,
    });

    const { data } = await client.v2.tweet(tweet);

    return new Response(JSON.stringify({ message: "Tweet success!", data }), {
      status: 200,
    });

  } catch (error) {
    if (error instanceof Error) {
      console.error('Error details:', {
        message: error.message,
        code: (error as any).code,
        status: (error as any).status,
        headers: (error as any).headers,
        data: (error as any).data,
      });
      return new Response(
        JSON.stringify({ message: 'Internal server error!', error: error.message }),
        { status: 500 }
      );
    } else {
      console.error('Unexpected error:', error);
      return new Response(
        JSON.stringify({ message: 'Internal server error!', error: 'Unexpected error' }),
        { status: 500 }
      );
    }
  }
}
