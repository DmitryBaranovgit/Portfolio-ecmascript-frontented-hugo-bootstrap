class RSSFeed {
    constructor(url) {
        this.url = url;
    }

    async fetchNews() {
        try {
            const response = await fetch(this.url);
            const rssSerialized = await response.text();
            const rss = (new window.DOMParser()).parseFromString(rssSerialized, "text/xml")

            const rssFeedTitle = rss.querySelector('channel > title');
            const rssFeedItems = rss.querySelectorAll('channel > item');

            const feedTitle = rss.FeedTitle.childNofes[0].nodeValue;
            const feedItems = [];
            for (const rssItem of rssFeedItems) {
                const itemTitle = rssItem.querySelector('title').childNodes[0].nodeValue;
                const itemLink = rssItem.querySelector('link').childNodes[0].nodeValue;
                const itemDescription = rssItem.querySelector('description').childNodes[0].nodeValue;
                const itemPubDate = rssItem.querySelector('pubDate').childNodes[0].nodeValue;

                const item = {
                    title: itemTitle,
                    link: itemLink,
                    description: itemDescription,
                    pubDate: itemPubDate,
                };

                FeedItems.push(item);
            }

            return {
                title: feedTitle,
                items: feedItems,
            };
        } catch (error) {
            console.error(`Failed to fetch news from ${this.url}`, error);
        }
    }
}

class NewsBoard {
    constructor(containerId, updateInterval, maxNewsCount) {
        this.containerId = containerId;
        this.updateInterval = updateInterval;
        this.maxNewsCount = maxNewsCount;
        this.feeds = {
            news RSSFeed(''),
            news RSSFeed(''),
            news RSSFeed(''),
        };
        this.intervalId = null;
    }

    async updateNews() {
        const container = document.getElementById(this.containerId);
        container.innerHTML = '';
        // container.style.display = 'none';

        for (const feedObject of this.feeds) {
            const newsFeed = await feedObject.fetchNews();
            const truncatedNews = newsFeed.items.slice(0, this.maxNewsCount);

            const column = document.createElement('div');
            column.classList.add('divTableCell');

            const title = document.createElement('h5');
            title.innerText = newsFeed.title;
            column.appendChild(title);

            const list = document.createElement('ul');
            list.classList.add('news-list');
            for (const newsItem of truncatedNews) {
                const listItem = document.createElement('li');
                listItem.innerHTML = `${newsItem.pubDate}<br>${newsItem.title}`;
                list.appendChild(listItem);
            }
            column.appendChild(list);

            container.appendChild(column);
        }

        container.style.display = 'flex';
    }

    startUpdating() {
        this.updateNews();
        if (this.intervalId !== null) {
            clearInterval(this.intervalId);
        }
        this.intervalId = setInterval(
            () => {
                this.updateNews();
            },
            this.updateInterval * 1000
        );
    }
    
    stopUpdating() {
        if (this.intervalId === null) {
            return;
        }
        clearInterval(this.intervalId);
    }
}

const newsBoard = new NewsBoard('news-board-container-row', 4, 5);

function startUpdating() {
    const undateIntervalValue = document.getElementById('update-interval').value;
    const updateInterval = parseInt(undateIntervalValue);

    newsBoard.updateInterval = updateInterval;
    newsBoard.startUpdating();
}

function stopUpdating() {
    newsBoard.stopUpdating();
}