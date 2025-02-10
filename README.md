# 🐦 Twitter Engagement Bot  

This is a **Twitter bot** designed for **engagement farming**, leveraging **cron jobs** to schedule and post tweets automatically. The bot runs on **Vercel** and ensures that tweets are posted at optimal times for maximum reach and interaction.  

## 🚀 Features  
✅ **Automated Tweet Scheduling** – Uses cron jobs to post tweets at set intervals.  
✅ **Engagement Optimization** – Posts at high-traffic hours to maximize likes, retweets, and replies.  
✅ **Customizable Tweet Content** – Easily configure tweets for memes, market updates, or any viral content.  
✅ **Serverless & Free Deployment** – Runs on **Vercel cron jobs**, meaning no need for a dedicated server.  

## 🛠️ How It Works  
1. Tweets are pre-defined or dynamically generated.  
2. A cron job (configured in `vercel.json`) schedules the bot to post at **7 AM and at 4 PM CAT daily**.  
3. The bot triggers the `/api/tweet` and `/api/jobs_tweet` endpoint to send the tweet via the Twitter API.  

## ⚙️ Setup Instructions  
1. **Clone the repo**  
   ```bash
   git clone https://github.com/tinotendajecha/twitter-bot.git
   cd twitter-engagement-bot
   ```  
2. **Install dependencies**  
   ```bash
   npm install
   ```  
3. **Set up environment variables** (in `.env` file):  
   ```
   TWITTER_API_KEY=your_api_key
   TWITTER_API_SECRET=your_api_secret
   TWITTER_ACCESS_TOKEN=your_access_token
   TWITTER_ACCESS_SECRET=your_access_secret
   ```  
4. **Deploy to Vercel**  
   ```bash
   vercel
   ```  
5. **Verify cron job settings** (`vercel.json`):  
   ```json
   {
     "path": "/api/jobs_tweet",
     "schedule": "0 14 * * *"
   }
   ```  

## 🤖 Future Improvements  
- Add **AI-generated** tweets using GPT models.  
- Implement **reply automation** for more engagement.  
- Fetch **trending topics** and tailor tweets dynamically.  

---

🔥 **Made for CT (Crypto Twitter) & beyond** – maximize engagement while you sleep! 🚀  
