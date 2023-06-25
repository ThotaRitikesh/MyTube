function formatViewCount(viewCount) {
    const count = Number(viewCount);
      if (count >= 1000000) {
      return (count / 1000000).toFixed(1) + "M";
    }
  
    if (count >= 1000) {
      return (count / 1000).toFixed(1) + "K";
    }
  
    return count.toString();
  }

  export default formatViewCount;