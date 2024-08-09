import PropTypes from 'prop-types';
import BodyPart from "../bodyPart/BodyPart";
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import { Box, Typography } from '@mui/material';
import { useContext } from 'react';

import RightArrowIcon from '../../assets/icons/right-arrow.png';
import LeftArrowIcon from '../../assets/icons/left-arrow.png';

const LeftArrow = () => {
    const { scrollPrev } = useContext(VisibilityContext);
  
    return (
      <Typography onClick={() => scrollPrev()} className="right-arrow">
        <img src={LeftArrowIcon} alt="right-arrow" />
      </Typography>
    );
  };
  
  const RightArrow = () => {
    const { scrollNext } = useContext(VisibilityContext);
  
    return (
      <Typography onClick={() => scrollNext()} className="left-arrow">
        <img src={RightArrowIcon} alt="right-arrow" />
      </Typography>
    );
  };

const HorizontalScrollbar = ({ data, bodyPart, setBodyPart }) => {
    return (
        <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
            {data.map((item) => (
                <Box
                    key={item.id || item}
                    title={item.id || item}
                    itemId={item.id || item}
                    sx={{
                        padding: '10px',
                        cursor: 'pointer',
                        color: 'white',
                        borderRadius: '5px',
                        marginRight: '10px',
                        textAlign: 'center',
                    }}
                    onClick={() => setBodyPart(item)}
                >
                    <BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart} />
                </Box>
            ))}
        </ScrollMenu>
    );
};

HorizontalScrollbar.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.oneOfType([
            PropTypes.shape({
                id: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
            }),
            PropTypes.string,
            PropTypes.number
        ])
    ).isRequired,
    bodyPart: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    setBodyPart: PropTypes.func.isRequired
};

export default HorizontalScrollbar;
