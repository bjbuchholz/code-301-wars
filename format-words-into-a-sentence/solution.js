function formatWords(words) {
    let finalStr = "";
      if (words) {
        words = words.filter((n) => { return !!n.length});
        words.forEach((word, index) => {
          let prefix = "";
          if (index == words.length-1 && index != 0) {
            prefix = " and ";
          } else if (index <= words.length && index != 0) {
            prefix = ", ";
          }
          finalStr += prefix + word;
        })
      }
      return finalStr;
    }