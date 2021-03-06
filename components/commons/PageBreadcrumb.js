import { Breadcrumbs, Link as MUILink, Typography } from "@mui/material";
import NextLink from 'next/link';

const PageBreadcrumb = ({ crumbs = [] }) => {

  return (
    <Breadcrumbs aria-label='breadcrumb' separator='›' mb={1} sx={{ display: { xs: 'none', lg: 'inline-block' } }}>
      <Crumb href='/' text='Inicio' />
      {
        crumbs.map((crumb, idx) => (
          <Crumb href={crumb.href} text={crumb.text} isLast={idx === crumbs.length - 1} key={idx} />
        ))
      }
    </Breadcrumbs>
  );
};

const Crumb = ({ text, href, isLast = false }) => {
  if (isLast) {
    return <Typography color='primary.main'>{text}</Typography>
  }
  return (
    <NextLink href={href} passHref>
      <MUILink underline='hover' color='seconday.main'>{text}</MUILink>
    </NextLink>
  )
}

export default PageBreadcrumb;