import packageJson from "../../../package.json";
import { Box, Container, Link, Typography } from "@mui/material";

const Copyright = () => {
  const currentYear = new Date().getFullYear();
  return (
    <Typography
      variant="body2"
      color="common.white"
      align="center"
      data-testid="copyright"
    >
      {`Copyright © ${packageJson.author} ${currentYear}. All rights reserved.`}
    </Typography>
  );
};

const ProfileLink = (props: { url: string; profileName: string }) => (
  <Link
    href={props.url}
    underline="none"
    color={"inherit"}
    sx={{ mx: 2, my: 1 }}
    target="_blank"
  >
    {props.profileName}
  </Link>
);

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{ bgcolor: "#550065", py: 6, position: "sticky", top: "100%" }}
      color={"white"}
      data-testid="footer"
    >
      <Container maxWidth="lg">
        <Container sx={{ display: "flex", justifyContent: "center" }}>
          <ProfileLink
            url={"https://linkedin.com/in/hadi-al-hadi"}
            profileName={"LinkedIn"}
          />
          <ProfileLink
            url={"https://github.com/hadi-alhadi"}
            profileName={"GitHub"}
          />
        </Container>

        <Copyright />
      </Container>
    </Box>
  );
};

export default Footer;
