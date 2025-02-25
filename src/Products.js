import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid2';

const productStyle = {
  backgroundColor: '#eafff3'
};

const videoListItemStyle = {
  margin: '36px 0'
};
const videoListItemTextStyle = {
  padding: '0 36px'
};

const VideoListItem = (title, text, src, direction) => { //TODO: componentize
  return (
    <Grid container spacing={3} direction={direction} style={videoListItemStyle}>
      <Grid size={{xs: 12, md: 7}}>
        <div style={{position: "relative", overflow: "hidden", width: "100%", paddingTop: "56.25%"}}>
          <iframe
            style={{position: "absolute", top: 0, bottom: 0, right: 0, width: "100%", height: "100%"}}
            src={src} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen title="Walkthrough of the scleral lens storage station" />
        </div>
      </Grid>
      <Grid size={{xs: 12, md: 5}}>
        <div style={videoListItemTextStyle}>
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
      </Grid>
    </Grid>
  )
}

function Products() {
  return (
    <div>
      <div style={productStyle}>
        <div style={{display: "flex", flexDirection: "column", rowGap: "48px"}}>
          {VideoListItem(
            "Everyday Case",
            `A quick overview of the everyday contact lens case that should answer most questions, if you have any other please let me know at the email below.`,
            "https://www.youtube.com/embed/TFlIaJ-9IqY?feature=oembed",
            "row"
          )}
          {VideoListItem(
            "Emergency Case",
            `Quick overview of the Emergency Case.`,
            "https://www.youtube.com/embed/X_OX9e86Is8?feature=oembed",
            "row-reverse"
          )}
          {VideoListItem(
            "Storage Station",
            `A quick overview of the Scleral Storage Station`,
            "https://www.youtube.com/embed/ST93O3r4bRk?feature=oembed",
            "row"
          )}
        </div>
      </div>
      <div style={{paddingBottom: "48px", textAlign: "center"}}>
        <p>If you have any questions at all please feel free to reach out at</p>
        <Button>tinkerturtle3d@gmail.com</Button>
      </div>
    </div>
  );
}

export default Products;