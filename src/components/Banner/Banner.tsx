import { Box, Divider } from "@mui/material";
import styled from "@emotion/styled";

const Banner = () => {
  return (
    <BannerContainer data-testid="banner-container">
      <BannerTitleContainer>
        <BannerTitle>Scores & Fixtures</BannerTitle>
        <BannerTitleDivider orientation="vertical" variant="middle" flexItem />
        <BannerTitleIcon
          href="https://www.adidas.com/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img
            src="https://digitalhub.fifa.com/transform/e231f5f5-a03d-4709-b833-fffc1ade0b19/Adidas_white_svg?io=transform:fill&amp;quality=75"
            alt=""
            width="24"
            loading="lazy"
          />
        </BannerTitleIcon>
      </BannerTitleContainer>
      <Box>
        <img
          height="144"
          width="361"
          src="https://digitalhub.fifa.com/transform/c8ec2346-a65d-4488-92b0-903ce0e1f361/FWC-2022-Header-pattern-Web?io=transform:fill,height:144,width:361&amp;quality=75"
          alt=""
          title="Web Mozaic"
        />
      </Box>
    </BannerContainer>
  );
};

export default Banner;

const BannerContainer = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #550065;
  height: 160px;
`;

const BannerTitleContainer = styled(Box)`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  padding-inline-start: 40px;
`;

const BannerTitle = styled.span`
  display: flex;
  font-size: 2.625rem;
  line-height: 1.3;
  color: #ffffff;
`;
const BannerTitleDivider = styled(Divider)`
  width: 2px;
  background-color: #ffffff;
`;

const BannerTitleIcon = styled.a`
  display: flex;
  color: hsla(0, 0%, 100%, 0.75);
  text-decoration: none;
  outline: none;
  border-radius: 0.3125rem;
  height: 30px;
  width: auto;
  img {
    width: auto;
  }
`;
