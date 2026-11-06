class PrefixTree {
    constructor() {
        this.root = {
            children: new Map(),
            isEnd : false,
        }
    }

    /**
     * @param {string} word
     * @return {void}
     */
    insert(word) {
        let current = this.root;
        for(let w of word){
            if(!current.children.has(w)){
                current.children.set(w,{
                    children:new Map(),
                    isEnd: false,
                })
                
            }
            current = current.children.get(w)
        }
        current.isEnd=true;
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        let current = this.root;
        for(let w of word){
            if(!current.children.has(w)){
                return false;
            }
            current = current.children.get(w);
        }
        return current.isEnd;
    }

    /**
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix) {
        let current = this.root;
        for(let w of prefix){
            if(!current.children.has(w)){
                return false;
            }
            current = current.children.get(w)
        }
        return true;
    }
}
