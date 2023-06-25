function cropTitle(title, maxLength) {
    if (title.length <= maxLength) {
      return title;
    } else {
      return title.substring(0, maxLength) + '...';
    }
  }

export default cropTitle;