import { Box } from '@mui/material';
import PropTypes from 'prop-types';
import { FC, ReactNode } from 'react';
import { Outlet } from 'react-router-dom';

interface Props {
  children?: ReactNode;
}

const BaseLayout: FC<Props> = ({ children }) => {
  return (
    <Box
      sx={{
        flex: 1,
        height: '100%',
      }}
    >
      {children || <Outlet />}
    </Box>
  );
};

BaseLayout.propTypes = {
  children: PropTypes.node,
};

export default BaseLayout;
