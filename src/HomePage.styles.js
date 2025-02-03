const homeStyle = {
  backgroundColor: '#c5ecd6'
};

const creationsListStyle = {
  display: 'flex',
  columnGap: '16px'
};

const getCreationListItemStyles = (imgName) => {
  return {
    container: {
      width: '33%',
      padding: '16px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    },
    img: {
      backgroundImage: `url(${require(`./img/${imgName}.jpg`)})`,
      height: 300,
      width: 300,
      borderRadius: 300,
      backgroundPosition: 'center',
      backgroundSize: 'cover'
    }
  }
}

const learnMoreStyle = {
  display: 'flex',
}