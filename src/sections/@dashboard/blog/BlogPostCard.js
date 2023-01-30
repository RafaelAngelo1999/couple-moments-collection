import PropTypes from 'prop-types';
// @mui
import { alpha, styled } from '@mui/material/styles';
import { Box, Link, Card, Grid, Avatar, Typography, CardContent } from '@mui/material';
// utils
import { fDate } from '../../../utils/formatTime';
//
import SvgColor from '../../../components/svg-color';
import Iconify from '../../../components/iconify';

// ----------------------------------------------------------------------

const StyledCardMedia = styled('div')({
  position: 'relative',
  paddingTop: 'calc(100% * 3 / 4)',
});

const StyledTitle = styled(Link)({
  height: 44,
  overflow: 'hidden',
  WebkitLineClamp: 2,
  display: '-webkit-box',
  WebkitBoxOrient: 'vertical',
});

const StyledAvatar = styled(Avatar)(({ theme }) => ({
  zIndex: 9,
  width: 32,
  height: 32,
  position: 'absolute',
  left: theme.spacing(3),
  bottom: theme.spacing(-2),
}));

const StyledInfo = styled('div')(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'flex-end',
  marginTop: theme.spacing(3),
  color: theme.palette.text.disabled,
}));

const StyledCover = styled('img')({
  top: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  position: 'absolute',
});

// ----------------------------------------------------------------------

BlogPostCard.propTypes = {
  post: PropTypes.object.isRequired,
  index: PropTypes.number,
};

export default function BlogPostCard({ post, index }) {
  const { cover, title, date, urlDrive, author, createdAt } = post;

  const POST_INFO = [
    { value: fDate(date) || '-', icon: 'eva:calendar-fill' },
    { value: post.finish ? 'Concluido' : 'Andamento', icon: 'eva:heart-fill' },
  ];

  const POST_URL = urlDrive;

  return (
    <Grid item xs={12} sm={6} md={3}>
      <Card sx={{ position: 'relative' }}>
        <StyledCardMedia
          sx={{
            ...(true && {
              pt: 'calc(100% * 4 / 3)',
              '&:after': {
                top: 0,
                content: "''",
                width: '100%',
                height: '100%',
                position: 'absolute',
                bgcolor: (theme) => (!post.finish ? alpha(theme.palette.grey[900], 0.85) : ''),
              },
            }),
          }}
        >
          <SvgColor
            color="paper"
            src="/assets/icons/shape-avatar.svg"
            sx={{
              width: 80,
              height: 36,
              zIndex: 9,
              bottom: -15,
              position: 'absolute',
              color: 'white',
            }}
          />
          <StyledAvatar alt={author.name} src={author.avatarUrl} />

          <StyledCover alt={title} src={cover} />
        </StyledCardMedia>

        <CardContent sx={{ pt: 4 }}>
          <Typography gutterBottom variant="caption" sx={{ color: 'text.disabled', display: 'block' }}>
            {fDate(createdAt)}
          </Typography>

          <StyledTitle color="inherit" variant="subtitle2" underline="hover">
            {title}
          </StyledTitle>

          <StyledInfo>
            {POST_INFO.map(
              (info, index) =>
                info.value !== '-' && (
                  <Box
                    key={index}
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      ml: index === 0 ? 0 : 1.5,
                    }}
                  >
                    <Iconify icon={info.icon} sx={{ width: 16, height: 16, mr: 0.5 }} />
                    <Typography variant="caption">{info.value}</Typography>
                  </Box>
                )
            )}
            <Box
              key={index}
              sx={{
                display: 'flex',
                alignItems: 'center',
                ml: index === 0 ? 0 : 1.5,
              }}
            >
              {!!date && (
                <>
                  <Iconify icon={'eva:link-fill'} sx={{ width: 16, height: 16, mr: 0.5 }} />

                  <Typography variant="caption">
                    <Link href={POST_URL} underline="none" target="_blank" rel="noopener noreferrer">
                      Link do Drive
                    </Link>
                  </Typography>
                </>
              )}
            </Box>
          </StyledInfo>
        </CardContent>
      </Card>
    </Grid>
  );
}
