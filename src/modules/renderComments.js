export default (fillcoms, mycoms) => {
    mycoms.innerHTML = '';
    if (fillcoms.length > 0) {
      fillcoms.forEach((com) => {
        const link = document.createElement('li');
        link.classList.add('com-item');
        link.innerHTML = `${com.creation_date} ${com.username} : ${com.comment}`;
        mycoms.appendChild(link);
      });
      const checkCount = document.querySelector('.com-count');
      checkCount.innerHTML = `(${fillcoms.length})`;
    }
  };