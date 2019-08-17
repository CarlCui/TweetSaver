import fetchJsonp from "fetch-jsonp";

const fetchBaseURL = "http://tweetsaver.herokuapp.com";

function extractInfoFromTweet(tweet) {
    return {
        id: tweet.id,
        text: tweet.text,
        createdAt: tweet.createdAt,
        user: {
            id: tweet.user.id,
            name: tweet.user.name,                      // actual name
            screenName: tweet.user.screenName,          // with the @ sign
            profileImageURL: tweet.user.profileImageURL,
        }
    }
}

export const verifyQuery = (query) => {
    const queryFormatRegex = /^[a-zA-Z0-9 ]+$/

    return !!(query && (typeof query === 'string') && query.match(queryFormatRegex));
}

export const ErrorMessageOnInvalidQuery = "Query must only contain letters, numbers and spaces";

export const fetchTweetService = {
    fetchTweets: (query) => {
        const encodedQuery = encodeURIComponent(query);

        return fetchJsonp(`${fetchBaseURL}/?q=${encodedQuery}&count=10`)
                .then((response) => {
                    return response.json();
                }).then((json) => {
                    return json.tweets.map((tweet) => extractInfoFromTweet(tweet));
                }).catch((err) => {
                    console.log('parsing failed', err)
                });
    }
};
