import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { fShortenNumber } from 'src/utils/format-number';

// ----------------------------------------------------------------------

export default function AppWidgetSummary({
  title,
  total,
  icon,
  color = 'primary',
  nav_icon,
  sx,
  ...other
}) {
  return (
    <Card
      component={Stack}
      spacing={3}
      direction="row"
      sx={{
        px: 3,
        py: 5,
        borderRadius: 2,
        justifyContent: 'space-between',
        ...sx,
      }}
      {...other}
    >
      {icon && <Box sx={{ width: 32, height: 32 }}>{icon}</Box>}

      <Stack spacing={0.5}>
        <Typography variant="h4">
          <Icon icon="tabler:currency-naira" className="inline" />
          {`${total > 1000000 ? fShortenNumber(total) : total}`}
        </Typography>

        <Typography variant="subtitle2" sx={{ color: 'text.disabled' }}>
          {title}
        </Typography>
      </Stack>
      {nav_icon && (
        <Stack style={{ justifySelf: 'end', color: 'blue' }}>
          <p>{nav_icon}</p>
        </Stack>
      )}
    </Card>
  );
}

AppWidgetSummary.propTypes = {
  color: PropTypes.string,
  icon: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  sx: PropTypes.object,
  title: PropTypes.string,
  total: PropTypes.number,
  nav_icon: PropTypes.string,
};
