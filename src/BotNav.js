import Button from '@mui/material/Button';

const linksStyle = { //TODO: apply to img/load as bg img
  display: 'flex',
  columnGap: '16px'
};

const botNavStyles = {
  display: 'flex',
  justifyContent: 'space-between',
  padding: '16px 32px 32px',
  backgroundColor: 'rgb(47 172 101)',
  color: '#fff !important'
};

const lightTextStyle = {color: '#fff'};

function BotNav() {
  return (
    <div style={botNavStyles}>
      <div>
        <h4 style={lightTextStyle}>Links</h4>
        <div style={linksStyle}>
          <Button style={lightTextStyle} href="https://www.etsy.com/shop/TinkerTurtle3D" target="_blank">
            Etsy
          </Button>
          <Button style={lightTextStyle} href="https://www.instagram.com/tinkerturtle3d/" target="_blank">
            Instagram
          </Button>
        </div>
      </div>
      <div>
        <h4 style={lightTextStyle}>Contact</h4>
        <Button style={lightTextStyle} href="mailto:tinkerturtle3d@gmail.com" target="_blank">
          tinkerturtle3d@gmail.com
        </Button>
      </div>
    </div>
  );
}

export default BotNav;