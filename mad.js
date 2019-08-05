// output the story
var randomStory = storyOfPaulRevere();
console.log(randomStory);

function getRandomItem(items) {
const length = items.length;
const index = Math.floor(
Math.random() * length
);
return items[index];
}

function storyOfPaulRevere() {
return `Paul Revere was born in Boston, ${ state() }, in 1735..., and amid all the destruction, he ${ verb() } to the market, where he`;
}
function verb () {
const words = ['ran','walked','stopped','crawled'];
return getRandomItem(words);
}

function state() {
const states = ['alabama','alaska','virginia','New York'];
return getRandomItem(states);
}

function noun() {
    const nouns = ['horse', 'table', 'tree', 'car', 'Bob'];
    return getRandomItem(nouns);
}

function adverb() {
    const adverbs = ['unabashedly', 'poetically', 'admirably', 'beautifully', 'candidly', 'justly'];
    return getRandomItem(adverbs);
}

function adjective() {
    const adjectives = ['alive',
       'better',
        'careful',
        'clever',
        'dead',
        'easy',
        'famous',
        'gifted',
        'helpful',
        'important',
        'inexpensive',
        'mushy'];
        return getRandomItem(adjectives);
}
