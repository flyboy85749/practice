// output the story
var randomStory = storyOfSteveJobs();
console.log(randomStory);

function getRandomItem(items) {
    const length = items.length;
    const index = Math.floor(
        Math.random() * length
    );
    return items[index];
}

function storyOfSteveJobs() {
    return `Steven ${ name() } Jobs was a(n) ${ country() } business magnate and 
    investor. He was the ${ noun() }, chief executive officer (CEO), and co-founder 
    of Apple Inc., the chairman and majority shareholder of Pixar, a member of The 
    Walt Disney Company's board of directors following its acquisition of Pixar, and 
    the founder, chairman, and CEO of NeXT. Jobs is ${ adverb() } recognized as a pioneer of 
    the microcomputer revolution of the 1970s and 1980s, along with ${ company() } co-founder 
    Steve Wozniak.

Jobs was born in San Francisco, California and put up for adoption. He was raised in 
the San Francisco Bay Area. He attended Reed College in 1972 before dropping out that 
same year, and traveled through India in 1974 seeking enlightenment and studying Zen 
Buddhism. His declassified FBI report states that he used marijuana and LSD while he 
was in college, and once told a reporter that taking LSD was "one of the two or three 
most important things" he had done in his life.

Jobs and Wozniak co-founded Apple in 1976 to sell Wozniak's Apple I personal computer. 
Together the duo gained fame and wealth a year later with the Apple II, one of the 
first highly successful mass-produced personal computers. Jobs saw the commercial 
potential of the Xerox Alto in 1979, which was mouse-driven and had a graphical user 
interface (GUI). This led to development of the unsuccessful Apple Lisa in 1983, 
followed by the breakthrough Macintosh in 1984, the first mass-produced computer with
 a GUI. The Macintosh introduced the desktop publishing industry in 1985 with the 
 addition of the Apple LaserWriter, the first laser printer to feature vector graphics. 
 Jobs was forced out of Apple in 1985 after a long power struggle with the company's 
 board and its then-CEO John Sculley. That same year, Jobs took a few of Apple's 
 members with him to found NeXT, a computer platform development company that 
 specialized in computers for higher-education and business markets. In addition,
  he helped to develop the visual effects industry when he funded the computer 
  graphics division of George Lucas's Lucasfilm in 1986. The new company was Pixar, 
  which produced the first 3D computer animated film Toy Story (1995).`;
}
function verb() {
    const words = ['ran', 'walked', 'stopped', 'crawled'];
    return getRandomItem(words);
}

function city() {
    const cities = ['New York', 'Phoenix', 'Tucson', 'Springfield', 'Tuscaloosa', 'Frankfort', 'Toledo',
        'San Francisco'];
    return getRandomItem(cities);
}

function state() {
    const states = ['alabama', 'alaska', 'virginia', 'New York'];
    return getRandomItem(states);
}

function country() {
    const countries = ['Germany', 'Poland', 'Austria', 'New Zealand', 'Russia'];
    return getRandomItem(countries);
}

function noun() {
    const nouns = ['horse', 'table', 'tree', 'car', 'Bob'];
    return getRandomItem(nouns);
}

function adverb() {
    const adverbs = ['unabashedly', 'poetically', 'admirably', 'beautifully', 'candidly', 'justly'];
    return getRandomItem(adverbs);
}

function name() {
    const names = ['Paul', 'Anthony', 'George', 'Jane', 'Matilda', 'Esmeralda', 'Penelope', 'Samuel'];
    return getRandomItem(names);
}

function company() {
    const companies = ['Microsoft', 'Ford', 'Alcoa', 'Starbucks', 'Boston Market', 'Volkswagen',
'Nike', 'Apple'];
return getRandomItem(companies);
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
