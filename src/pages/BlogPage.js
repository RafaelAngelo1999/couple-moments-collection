import { Helmet } from 'react-helmet-async';
import { filter } from 'lodash';
import { useState } from 'react';
// @mui
import { Grid, Container, Stack, Typography } from '@mui/material';
// components
import { BlogPostCard, BlogPostsSort, BlogPostsSearch } from '../sections/@dashboard/blog';
// mock
import POSTS from '../_mock/blog';

// ----------------------------------------------------------------------

const SORT_OPTIONS = [
  { value: false, label: 'Andamento 💪🏻' },
  { value: true, label: 'Concluido ✅' },
  { value: 'default', label: 'Default 🔍' },
];

const ENUM_FILTER = {
  NAME: 'name',
  STATUS: 'status',
  DEFAULT: 'default',
};

// ----------------------------------------------------------------------

function applySortFilter(array, query) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  if (query) {
    return filter(array, (_post) => _post.title.toLowerCase().indexOf(query.toLowerCase()) !== -1);
  }
  return stabilizedThis.map((el) => el[0]);
}

function applySortStatusFilter(array, postStatus) {
  if (postStatus === ENUM_FILTER.DEFAULT) {
    return array;
  }
  return filter(array, (_post) => _post.finish === postStatus);
}

export default function BlogPage() {
  const [filterName, setFilterName] = useState('');
  const [filterStatus, setFilterStatus] = useState(false);
  const [filterUsing, setFilterUsing] = useState();

  const handleFilterByName = (event) => {
    setFilterName(event.target.textContent || event.target.defaultValue);
    setFilterStatus(ENUM_FILTER.DEFAULT);
    setFilterUsing(ENUM_FILTER.NAME);
  };

  const handleFilterByStatus = (event) => {
    setFilterStatus(event.target.value);
    setFilterName('');
    setFilterUsing(ENUM_FILTER.STATUS);
  };

  const filteredPosts =
    filterUsing === ENUM_FILTER.NAME
      ? applySortFilter(POSTS, filterName)
      : filterUsing === ENUM_FILTER.STATUS
      ? applySortStatusFilter(POSTS, filterStatus)
      : POSTS;

  return (
    <>
      <Helmet>
        <title> Raspadinha 👩🏿‍❤️‍👨🏻 </title>
      </Helmet>

      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            👋 Hello welcome back, Tabitha 👨🏼‍❤️‍💋‍👨🏾 Rafael
          </Typography>
        </Stack>

        <Stack mb={5} direction="row" alignItems="center" justifyContent="space-between">
          <BlogPostsSearch posts={POSTS} onFilterName={handleFilterByName} />
          <BlogPostsSort options={SORT_OPTIONS} value={filterStatus} onSort={handleFilterByStatus} />
        </Stack>

        <Grid container spacing={3}>
          {filteredPosts.map((post, index) => (
            <BlogPostCard key={post.id + index} post={post} index={index} />
          ))}
        </Grid>
      </Container>
    </>
  );
}
