class WordDictionary {
    constructor() {
        this.root = {
            children : new Map(),
            isEnd : false,
        }
    }

    /**
     * @param {string} word
     * @return {void}
     */
    addWord(word) {
        let current = this.root;
        for(let char of word){
            if(!current.children.has(char)){
                current.children.set(char,{
                    children : new Map(),
                    isEnd : false,
                })
            }
            current = current.children.get(char)
        }
        return current.isEnd = true;
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) 
    {
        const dfs = (node,index)=>{
            if(index === word.length){
                return node.isEnd
            }
            const char = word[index];
            if(char === '.'){
                for(let childNode of node.children.values()){
                    if(dfs(childNode, index+1)){
                        return true;
                    }

                }
                return false;
            }
            else{
                if(!node.children.has(char)){
                    return false;
                }
                return dfs(node.children.get(char),index+1)
            }
        }
        return dfs(this.root,0)
    }
}
