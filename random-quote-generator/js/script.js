const quotes = [
    `"The purpose of our lives is to be happy."\n — Dalai Lama`,
    `"Many of life's failures are people who did not realize how close they were to success when they gave up."\n - Thomas A. Edison`,
    `“Innovation distinguishes between a leader and a follower.”\n- Steve Jobs`,
    `“Your time is limited, so don't waste it living someone else's life.”\n- Steve Jobs`,
    `“Innovation distinguishes between a leader and a follower.”\n- Steve Jobs`,
    `“Don't let the noise of others' opinions drown out your own inner voice.”\n- Steve Jobs`,
    `“You can't connect the dots looking forward; you can only connect them looking backwards. So you have to trust that the dots will somehow connect in your future.”\n- Steve Jobs`,
    `“Stay hungry. Stay foolish.”\n- Steve Jobs`,
    `"Sometimes life hits you in the head with a brick. Don't lose faith."\n- Steve Jobs`,
    `"My favorite things in life don't cost any money. It's really clear that the most precious resource we all have is time.\n- Steve Jobs`,
    `"Great things in business are never done by one person. They're done by a team of people.\n- Steve Jobs`
];

// take random quote from array
function loadQuote() {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

    const quoteElement = document.getElementById("quote");
    quoteElement.innerText = randomQuote;
}

loadQuote();