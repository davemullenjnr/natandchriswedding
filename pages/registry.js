// pages/registry.js
import Head from 'next/head';
import GlobalStyles from '../styles/GlobalStyles';
import Image from 'next/image';
import styled from 'styled-components';
import { useState } from 'react';
import { breakpoint, color, typography } from '@styles/index';

const Page = styled.main`
  min-height: 100vh;
`;

const HeroWrapper = styled.div`
  background-color: #191e1c;
  min-height: 20rem;

  @media ${breakpoint.md} {
    min-height: 100vh;
  }
`;

const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 70vw;
  margin: 0 auto;
  padding: 6rem 0;

  @media ${breakpoint.sm} {
    /* max-width: 500px; */
    padding-top: 4rem;
    max-width: 60vw;
  }
  @media ${breakpoint.md} {
    max-width: 500px;
  }
`;

const HeroImage = styled(Image)`
  width: 70%;
  margin-bottom: 1.5rem;
`;

const MrAndMrsImage = styled.img`
  width: 100%;
`;

const FlowerImage = styled.img`
  max-width: 80px;
  margin: 0 auto;
  margin-top: 4rem;
  margin-bottom: 2rem;

  @media ${breakpoint.sm} {
    max-width: 90px;
  }
  @media ${breakpoint.md} {
    max-width: 100px;
  }
`;

const Photos = styled.div`
  padding: 1rem 1rem 0rem;
  display: flex;
  justify-content: center;
  /* margin-top: -240px; */

  @media ${breakpoint.sm} {
    padding: 1.5rem 1.5rem 0rem;
  }
`;

const Inner = styled.div`
  width: 100%;
  max-width: 1080px; /* desktop container max */
`;

const Figure = styled.figure`
  margin: 0 0 1rem 0;

  @media ${breakpoint.sm} {
    margin-bottom: 1.5rem;
  }
`;

/* Wrap so we can animate the underlying <img> from next/image */
const ImgWrap = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 2px;

  /* target the real <img> that next/image renders */
  img {
    opacity: 0;
    transform: scale(1.01);
    transition:
      opacity 400ms ease,
      transform 600ms ease;
    will-change: opacity, transform;
    display: block;
    width: 100%;
    height: auto;
  }

  img.loaded {
    opacity: 1;
    transform: scale(1);
  }
`;

const DownArrow = styled.p`
  font-size: ${typography.size.f4};
  margin-top: 4rem;
  color: ${color.green[80]};

  @media ${breakpoint.md} {
    font-size: ${typography.size.f3};
  }
`;

const BackToTop = styled.a`
  font-family: ${typography.family.body};
  font-size: ${typography.size.f6};
  color: ${color.green[80]};
  display: block;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
  margin-bottom: 4rem;

  @media ${breakpoint.md} {
    font-size: ${typography.size.f5};
  }
`;

function FadeImage(props) {
  const [loaded, setLoaded] = useState(false);
  return (
    <ImgWrap>
      <Image
        {...props}
        className={loaded ? 'loaded' : ''}
        onLoadingComplete={() => setLoaded(true)}
      />
    </ImgWrap>
  );
}

// Plain page (no global header/footer)
function Registry({ images }) {
  return (
    <>
      <Head>
        <title>Wedding Photos</title>
        <meta name='robots' content='noindex' />
      </Head>
      <GlobalStyles />
      <Page id='top'>
        <HeroWrapper>
          <HeroContainer>
            <HeroImage
              src='/images/photo-hero.png'
              alt=''
              width={700}
              height={1000}
              priority
            />
            <MrAndMrsImage src='/images/mr-and-mrs.svg' />
            <DownArrow>↓</DownArrow>
          </HeroContainer>
        </HeroWrapper>
        <Photos>
          <Inner>
            {images.map((img, i) => (
              <Figure key={img.src}>
                <FadeImage
                  src={img.src}
                  alt={img.alt || 'Wedding photo'}
                  width={img.width}
                  height={img.height}
                  sizes='(min-width: 1080px) 1080px, 100vw'
                  priority={i < 2}
                  placeholder='blur'
                  blurDataURL={img.blurDataURL}
                />
              </Figure>
            ))}
          </Inner>
        </Photos>
        <FlowerImage src='/images/photo-flower.svg' />
        <BackToTop href='#top'>Back to top ↑</BackToTop>
      </Page>
    </>
  );
}

Registry.noLayout = true;
export default Registry;

// Build-time: read images, get dimensions, make blurDataURL
export async function getStaticProps() {
  const fs = await import('fs');
  const path = await import('path');
  const { imageSize } = await import('image-size');
  const sharp = (await import('sharp')).default;

  const dir = path.join(process.cwd(), 'public', 'photos', 'registry');
  const exists = fs.existsSync(dir);
  const all = exists ? fs.readdirSync(dir) : [];

  const allow = new Set(['.jpg', '.jpeg', '.png', '.webp', '.avif']);
  const files = all
    .filter((name) => allow.has(path.extname(name).toLowerCase()))
    .sort((a, b) =>
      a.localeCompare(b, 'en', { numeric: true, sensitivity: 'base' }),
    );

  const images = await Promise.all(
    files.map(async (name) => {
      const abs = path.join(dir, name);
      const buf = fs.readFileSync(abs);
      const { width, height } = imageSize(buf) || {};

      // Tiny blurred placeholder
      const blurBuffer = await sharp(buf).resize(20).blur().toBuffer();
      const blurDataURL = `data:image/jpeg;base64,${blurBuffer.toString('base64')}`;

      return {
        src: `/photos/registry/${name}`,
        width: width || 2160,
        height: height || Math.round((height / width) * 2160) || 1440,
        alt: path.parse(name).name.replace(/[-_]/g, ' '),
        blurDataURL,
      };
    }),
  );

  return { props: { images } };
}
