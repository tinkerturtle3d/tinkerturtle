import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid2';

const homeStyle = {
  backgroundColor: '#c8eacd'
};

const homeSection = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '48px 32px'
};

const splashImg = {
  width: '92%',
  maxWidth: '1400px',
  maxHeight: '700px',
  display: 'block',
  objectFit: 'cover',
  objectPosition: '50% 50%',
  borderRadius: '16px'
};

const getCreationListItemStyles = (imgName) => {
  return {
    container: {
      padding: '16px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center'
    },
    img: {
      backgroundImage: `url(${require(`./img/${imgName}.jpg`)})`,
      height: 360,
      width: 360,
      borderRadius: 360,
      backgroundPosition: 'center',
      backgroundSize: 'cover'
    }
  }
}

const learnMoreStyle = {
  display: 'flex',
}

const CreationListItem = (title, text, imgName) => { //TODO: componentize
  const styles = getCreationListItemStyles(imgName);

  return (
    <Grid size={{xs: 12, md: 4}}>
    <div style={styles.container}>
      <div style={styles.img} />
      <h4>{title}</h4>
      <p>{text}</p>
    </div>
    </Grid>
  )
}

function HomePage() {
  return (
    <div style={homeStyle}>
      <div style={homeSection}>
        <img style={splashImg} src={require("./img/splash-img.jpg")} alt="" />
      </div>
      <div style={homeSection}>
        <h2>Innovative Creations</h2>
        <Grid container columnSpacing={5}>
          {CreationListItem(
            "Everyday Cases",
            `The everyday scleral lens carrying cases are your alternative to flimsy zip-lock bags and cheap plastic pouches. They are designed with dedicated spaces for tools, your contact lens case, saline solutions, and even hand sanitizing wipes – ensuring you have everything you need, neatly organized, wherever your lenses take you.`,
            "creations-a"
          )}
          {CreationListItem(
            "Scleral Station / Storage",
            `This scleral lens station is your at home solution for organizing your scleral lens accessories. It has storage to hold your insertion and removal tools, contact lens case, saline solutions, eye drops, and more. The station includes a magnetic base with two differently sized holders for your insertion tools.`,
            "creations-b"
          )}
          {CreationListItem(
            "Emergency Cases",
            `The emergency case is your pocket sized solution for carrying around your scleral lens tools, containing only the essentials (plunger tools & saline) for on the fly insertion and removal of your scleral lenses.`,
            "creations-c"
          )}
        </Grid>
        <Button
          variant="contained"
          href="https://www.etsy.com/shop/TinkerTurtle3D"
          target="_blank"
        >
          Shop
        </Button>
        <div style={{height: '32px'}} />
      </div>
      <Grid container style={{backgroundColor: '#9ce5c7'}}>
        <Grid size={{xs: 12, md: 6}} style={{display: 'flex'}}>
        <div style={{textAlign: 'left', alignSelf: 'center' }}>
          <div style={{padding: '0 124px 0 48px' }}>
            <h2>Welcome to the World of Tinker Turtle</h2>
            <p>As a fellow user of Scleral lenses, the struggle to find a suitable solution for carrying and managing the necessary tools is all too familiar. It can be incredibly scary to be caught without the essential tools when you need to remove your scleral lenses on the go. Recognizing this challenge firsthand, I embarked on a journey to develop a dependable and convenient solution to address this and other issues.</p>
            <Button variant='contained' href="/about">Learn More</Button>
          </div>
          <div style={{height: '32px'}} />
        </div>
        </Grid>
        <Grid size={{xs: 12, md: 6}}>
          <div
            style={{
              backgroundImage: `url(${require(`./img/learn-more.jpg`)})`,
              minHeight: 500,
              height: '100%',
              width: '100%',
              backgroundPosition: 'center',
              backgroundSize: 'cover'
            }}
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default HomePage;