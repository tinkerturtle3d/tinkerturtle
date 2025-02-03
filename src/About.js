import Grid from '@mui/material/Grid2';

const aboutStyle = {
  padding: '48px 32px'
};

function About() {
  return (
    <Grid container columnSpacing={12} style={aboutStyle} direction={{xs: "column-reverse", md: "row"}}>
      <Grid size={{xs: 12, md: 6}}>
        <h2>Welcome to TinkerTurtle!</h2>
        <p style={{fontSize: '1.3rem'}}>Hey there, I'm Alec, a creative based in the beautiful Pacific Northwest. Ever since I was a kid, I've been drawn to understanding how things work.</p>
        <p>My inquisitive nature often led to me dismantling various gadgets and gizmos, leaving my parents both impressed and exasperated as they watched me meticulously take apart and reassemble items – occasionally with a surplus of screws!</p>
        <p>I specialize in engineering and fabricating 3D printed items, with a special focus on creating innovative scleral contact lens accessories for those with the same eye condition that I have - Keratoconus. It all started when I presented a cases that I had designed to my optometrist. To my surprise, she was extremely impressed and encouraged me to share my creations with the world, believing that they could benefit many others facing similar challenges. This simple exchange started me on the path of creating my own business and brand. I strive to ensure the highest quality in the things that I make, focusing on the diverse set of needs that others experience in their day-to-day (something that I hold very highly in my designs).</p>
        <p>So if you have any feedback please let me know! </p>
      </Grid>
      <Grid size={{xs: 12, md: 6}}>
      <div
        style={{
          backgroundImage: `url(${require(`./img/TinkerTurtle.png`)})`,
          minHeight: 500,
          height: '100%',
          width: '100%',
          backgroundPosition: 'center',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat'
        }}
      />
      </Grid>
    </Grid>
  );
}

export default About;