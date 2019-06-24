
// print a given node element's every tageName and className
const printNode = (el = {}) => {
    let printInfo = (elementNode = {}) => `${elementNode.tagName}.${elementNode.className}`
    let queue = Array.from(el.childen);
    let setQueue = someArray => 
    someArray.forEach(node => node.childen.lengh? setQueue(node):printInfo(node))
    setQueue(queue);
}


// create a stopwatch 
let sw = {
    flag: true,
    startDate: 0,
    rawDuration: 0
    durationInSeconds: 0,
    start = () => {
        if (this.flag) {
            this.flag = !flag;
            this.startDate = new Date();
            this.rawDuration = this.startDate.now();
        }
        else throw new error;
    },
    stop = () => {
        if (!this.flag) {
            this.flag = !this.flag;
            this.rawDuration = Date.now() - this.rawDuration;
            this.durationInSeconds = (this.rawDuration / 1000).tofixed(2);
        }
        else throw new error;
    },
    reset = () => {
        this.flag = ture;
        this.durationInSeconds = 0;
        this.startDate = 0;
        this.rawDuration = 0;
        this.durationInSeconds = 0;
    }
};
Object.preventExtensions(sw);
// javascript function reload:
function createXhr() {
    if (typeof xmlHttpRequest !== "undefined") {
        createXhr = function() {
            return new xmlHttpRequest();
        }
    }
    else if (typeof ActiveXObject !== "undefined") {
        if (typeof arguments.callee.activeXString !== "string") {
            let optionalArr = ["version1", "version2", "version3"];
            let memoVerison;
            for (v of optionalArr){
                try {
                    new ActiveXObject(v);
                    arguments.callee.activeXString = v;
                    memoVerison = v;
                    break;
                }
                catch { }
                    }
                }
                createXhr = function() {
                    return new ActiveXObject(arguments.callee.activeXString) ||  new ActiveXObject(memoVerison)
            }
        }
        else createXhr = function() {
            return new error("cannot create a xhr object in this browser")
    }
}
// function reload option2:
let createXhr = (function() {
    if (typeof xmlHttpRequest !== "undefined") {
        return function() {
            return new xmlHttpRequest();
        }
     if (typeof ActiveXObject !== "undefined") {
            if (typeof arguments.callee.activeXString !== "string") {
                let optionalArr = ["version1", "version2", "version3"];
                let memoVerison;
                for (v of optionalArr){
                try {
                    new ActiveXObject(v);
                    arguments.callee.activeXString = v;
                    memoVerison = v;
                    break;
                }
                catch { }
                    }
                }
                return function() {
                    return new ActiveXObject(arguments.callee.activeXString) ||  new ActiveXObject(memoVerison)
            }
        }
    }
    return function() {
            throw new error("cannot create a xhr object")
            }
})();
    
// reducer function
function doSomething (state = [], action = {}) {
    switch (action.type) {
    case 'TOGGLE_TODO':
    if (action.index in state) {
        let newObj = Object.assign({}, state[action.index], {isComplete: !state[action.index].isComplete});
        return Object.assign([],state,newObj);
    }
  }
}

// example of  muliti-layered destructuring:
const {config, data: {code: code}} = response;
// simplified as:
const {prop1, prop2:{prop3}} = response;


// optimize the processing of some complext function
function optimizeProcessing(values, process) {
    let iteration = Math.ceil(values.length / 8),
    startPosition = values.length % 8,
    i = 0, // beginning position of the values array from where to process
    j = startPosition;
    //first process the module part of the whole values array, 0 < j < 8
    while (j > 0) {
            switch (startPosition) {
                case 1: process(values[i++]);
                case 2: process(values[i++]);
                case 3: process(values[i++]);
                case 4: process(values[i++]);
                case 5: process(values[i++]);
                case 6: process(values[i++]);
                case 7: process(values[i++]);
                j--
                
            }
    }
    // situation where j = 0, meaning  modules in the values array are fully processed
    while (iteration > 0, j <= 7) {
        switch (startPosition) {
            case 0: process(values[i++]), j++;
            case 1: process(values[i++]), j++;
            case 2: process(values[i++]), j++;
            case 3: process(values[i++]), j++;
            case 4: process(values[i++]), j++;
            case 5: process(values[i++]), j++;
            case 6: process(values[i++]), j++;
            case 7: process(values[i++]), j = 0, iteration--;
        }
     }
}
// javascript algorithm challenge: two sum
let sortedOutcome = (arr, summmedNum) => {
    if (!(arr instanceof Array && typeof summmedNum === number)) return;
    for (let [key, val] of Object.entries(arr)) {
        let subtracted = summmedNum - val;
       return arr.includes(subtracted)?  [key, arr.indexOf(subtracted)]: null;
    }
}


// auto typewrite effect in the web page
let typing = document.querySelector('.typewrite'),
    words = ['word1', 'word2', 'word3'],
    wordCount = 0,
    letterIndex = 0,
    getWordSize = () => words[wordCount].length;

(function initTyping() {
    while (wordCount <= words.length) {
        typing.textContent = words[wordCount].slice(0, letterIndex++);
        if (letterIndex === getWordSize()) typing.textContent = words[wordCount].slice(0, letterIndex--);
        if (letterIndex === 0) wordCount++;

    }
    if (wordCount === words.length) {
        wordCount = 0;
    }
    
})();


// get the vertical distance of the target element from viewport
// Method 1: get vertical distance of the target ele from document, then subtract the document's scrolled distance
// to get the ele's (top-border) distance from the viewport top 
function getElementViewTop(element) {
    let actualTop = element.offsetTop;
    let current = element.offsetParent;
    let elementScrollTop;
  
    while (current !== null) {
      actualTop += current.offsetTop; // get distance of target ele from document top
      current = current.offsetParent;
    }
  
    if (document.compatMode == 'BackCompat') {
      elementScrollTop = document.body.scrollTop;
    } else {
      elementScrollTop = document.documentElement.scrollTop;  
    }
  
    return actualTop - elementScrollTop; // substract the scrolled distance
  }
  // method 2:
  function getElementViewTop_2(ele, scrolledTop = 0) {
      if (document.compatMode == 'BackCompat') {
        scrolledTop = document.body.scrollTop;
      } else {
        scrolledTop = document.documentElement.scrollTop;
      }
    return ele.getBoundingClientRect().top + scrolledTop
    
  }
  
  function getElementViewLeft(element) {
    let actualLeft = element.offsetLeft;
    let current = element.offsetParent;
    let elementScrollLeft;
  
    while (current !== null) {
      actualLeft += current.offsetLeft;
      current = current.offsetParent;
    }
  
    if (document.compatMode == 'BackCompat') {
      elementScrollLeft = document.body.scrollLeft;
    } else {
      elementScrollLeft = document.documentElement.scrollLeft;
    }
  
    return actualLeft - elementScrollLeft;
  }
  
  function getElementViewLeft_2(ele, scrolledLeft = 0) {
    if (document.compatMode == 'BackCompat') {
        scrolledLeft = document.body.scrollLeft;
      } else {
        scrolledLeft = document.documentElement.scrollLeft;
      }
    return ele.getBoundingClientRect().left + scrolledLeft
  }


// scroll to top of the viewport  
const scrollToTop = () => {
    if (window.getComputedStyle && window.getComputedStyle(document.body).scrollBehavior) {
        scrollToTop = () => document.querySelector('body')
            .scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
    } else {
        if (!window.requestAnimationFrame) {
            let startDate = 0;
            scrollToTop = (timeout = null, delay = 0) => {
                let scrolledTop = document.documentElement.scrollTop || document.body.scrollTop;
                if (scrolledTop > 0) return (() = > {
                    if (!timeout)
                        timeout = setTimeout(() => {
                        timeout = null
                        window.scrollTo(0, scrolledTop - scrolledTop / 8)
                    }, delay))();
                    
                }
            }
          }
        }
        scrollToTop = () => {
            const scrolledTop = document.documentElement.scrollTop || document.body.scrollTop;
            if (scrolledTop > 0) {
                window.requestAnimationFrame(scrollToTop);
                window.scrollTo(0, scrolledTop - scrolledTop / 8);
            }
        }
}