class Solution {
    /**
     * @param {string} beginWord
     * @param {string} endWord
     * @param {string[]} wordList
     * @return {number}
     */
    ladderLength(beginWord, endWord, wordList) {
        const wordSet = new Set(wordList);
        if(!wordSet.has(endWord)){
            return 0;
        }
        const queue = [[beginWord,1]];
        wordSet.delete(beginWord);
        while(queue.length > 0){
            const [ currentWord, steps] = queue.shift();
            if(currentWord === endWord){
                return steps;
            }
            for(let i =0; i<currentWord.length; i++){
                for(let charCode = 97; charCode <= 122; charCode ++){
                    const newChar = String.fromCharCode(charCode)
                    if(newChar === currentWord[i]) continue;
                    const nextWord = currentWord.slice(0,i) + newChar + currentWord.slice(i+1);
                    if(wordSet.has(nextWord)){
                        queue.push([nextWord,steps +1]);
                        wordSet.delete(nextWord)
                    }
                }
            }
        }
        return 0;

    }
}
