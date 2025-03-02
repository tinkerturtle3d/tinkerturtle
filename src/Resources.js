import Grid from '@mui/material/Grid2';
import { Link } from 'react-router-dom';
import UltraPdf from './pdf/Ultra_45-230304_DIN-A5-English-2023-02.pdf';
import VentedScleralCupPdf from './pdf/Vented-Scleral-Cup-230304_DIN-A5-English-2023-02.pdf';
import ScleralCupPdf from './pdf/Scleral-Cup-230304_DIN-A5-English-2023-02.pdf';


const aboutStyle = {
  padding: '48px 32px'
};

function About() {
  return (
    <Grid container columnSpacing={12} style={aboutStyle} direction={{xs: "column-reverse", md: "row"}}>
      <Grid size={{xs: 12, md: 6}}>
        <h2>Resources</h2>
        <h3>DMV Insertion/Removal Tools - How to Use</h3>
        <p>DMV Ultra: <Link
            to={UltraPdf}
            download="DMV-Ultra-How-To-Use-2023"
            target="_blank"
            rel="noreferrer"
          >
            Download PDF
          </Link>
        </p>
        <p>DMV Vented Scleral Cup: <Link
            to={VentedScleralCupPdf}
            download="DMV-Vented-Scleral-Cup-How-To-Use-2023"
            target="_blank"
            rel="noreferrer"
          >
            Download PDF
          </Link>
        </p>
        <p>DMV Scleral Cup: <Link
            to={ScleralCupPdf}
            download="DMV-Scleral-Cup-How-To-Use-2023"
            target="_blank"
            rel="noreferrer"
          >
            Download PDF
          </Link>
        </p>
        <p>For other languages and other DMV-related care guides, please visit: <a href="https://dmvcorp.com/ifu/" target="_blank" rel="noreferrer">https://dmvcorp.com/ifu/</a></p>
      </Grid>
      <Grid size={{xs: 12, md: 6}}>
      <div
        style={{
          backgroundImage: `url(${require(`./img/dmv-tools.webp`)})`,
          minHeight: 500,
          height: '100%',
          width: '100%',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          borderRadius: '16px'
        }}
      />
      </Grid>
    </Grid>
  );
}

export default About;