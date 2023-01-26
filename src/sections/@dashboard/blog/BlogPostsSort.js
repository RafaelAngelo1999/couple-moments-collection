import PropTypes from 'prop-types';
// @mui
import { MenuItem, TextField } from '@mui/material';

// ----------------------------------------------------------------------

BlogPostsSort.propTypes = {
  options: PropTypes.array,
  value: PropTypes.string,
  onSort: PropTypes.func,
};

export default function BlogPostsSort({ options, value, onSort }) {
  return (
    <TextField select size="small" value={value} defaultValue={'Default 🔍'} onChange={onSort}>
      {options.map((option, index) => (
        <MenuItem key={option.value + index} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  );
}
