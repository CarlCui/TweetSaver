function createMockTweet(
    id,
    text,
    createdAt,
    userId,
    userName,
    userScreenName,
    userProfileImageURL
) {
    return {
        id: id,
        text: text,
        createdAt: createdAt,
        user: {
            id: userId,
            name: userName,
            screenName: userScreenName,
            profileImageURL: userProfileImageURL
        }
    };
}

export const FetchTweetsService = {
    fetchTweets: () => {
        let mockTweets = [
            createMockTweet(
                1162204527803555800,
                "RT @CNNEE: La idea vino de un comediante que escuchó Elizabeth Rowin...↵https://t.co/av3zf1CnWy",
                1565926126000,
                2518263099,
                'SECRETARIA_SJLASALLE',
                'SECRETARIA_GYE',
                "http://pbs.twimg.com/profile_images/1063628946095448064/6G65Hig7_normal.jpg"
            ),
            createMockTweet(
                1162204527803557800,
                "RT @CNNEE: La ideó Elizabeth Rowin...↵https://t.co/av3zf1CnWy",
                1565926226000,
                2518263010,
                'ABC_DEF',
                'ABC_DEEEEE',
                "http://pbs.twimg.com/profile_images/1063628946095448064/6G65Hig7_normal.jpg"
            ),
        ];

        return new Promise((resolve) => {
            resolve(mockTweets);
        });
    }
};