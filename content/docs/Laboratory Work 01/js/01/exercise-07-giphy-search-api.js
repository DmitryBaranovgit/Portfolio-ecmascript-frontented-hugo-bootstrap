class GiphySearchApiAdapter {
    constructor(apiKey) {
        this.apiKey = apiKey;
        this.apiUrl = 'https://api.giphy.com/v1/gifs/search';
    }
    
    async searchGifs(query) {
        try {
            const encodedQuery = encodeURIComponent(query);
            const response = await fetch(`${this.apiUrl}?api_key=${this.apiKey}&q=${encodedQuery}&limit=10`);
            const json = await response.json();
            if ( response.ok ) {
                return json.data;
            } else {
                throw new Error(json.meta.msg)
            }
        } catch (error) {
            console.error(`Failed to fetch gifs from ${this.apiUrl}`, error);
        }
    }
}

class GiphySearchDisplay {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
    }

    display(gifs) {
        this.container.innerHTML = '';
        for (const gif of gifs) {
            const image = document.createElement('img');
            image.src = gif.images.fixed_height.url;
            image.alt = gif.title;
            this.container.appendChild(image);
            this.container.appendChild(document.createElement('hr'));
        }
        this.container.style.display = 'table-cell';
    }
}

class GiphySearchApplication {
    constructor(apiKey) {
        this.apiKey = apiKey;
        this.adapter = new GiphySearchApiAdapter(apiKey);
        this.display = new GiphySearchDisplay('giphy-search-result-container');

        this.searchForm = document.getElementById('search-form');
        this.searchLine = document.getElementById('search-line');

        this.searchForm.addEventListener('submit', event =>
{ this.handleSearch(event) } );
    }
    
    async handleSearch(event) {
        event.preventDefault();
        const query = this.searchLine.value.trim();
        if (query.length !== 0) {
            try {
                const gifs = await this.adapter.searchGifs(query);
                this.display.display(gifs);
            } catch (error) {
                console.error('Unexpected error occured.', error);
            }
        }
    }
}

window.addEventListener('load', () => {
    const API_KEY = 'kgNcsyRzdOe0cbHMHpOqPk58lH4VsZ2A';
    new GiphySearchApplication(API_KEY);
})