const tweetStorageKey = "tweets";

export const storeTweetsService = {
    saveTweets: (tweets) => {
        if (!tweets) return;

        const stringifiedTweets = JSON.stringify(tweets);

        localStorage.setItem(tweetStorageKey, stringifiedTweets);
    },
    getTweets: () => {
        const data = localStorage.getItem(tweetStorageKey);

        try {
            const tweets = JSON.parse(data);

            if (!Array.isArray(tweets)) {
                throw new Error("stored tweets is not of array type.");
            }

            return tweets;
        } catch(err) {
            console.log(err);

            return [];
        }
    }
}