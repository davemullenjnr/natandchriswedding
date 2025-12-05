// pages/ceremony.js
import Head from 'next/head';
import GlobalStyles from '../styles/GlobalStyles';
import Image from 'next/image';
import styled from 'styled-components';
import { useState, useEffect, useRef } from 'react';
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
    /* Removed will-change - it causes crashes on mobile Safari during pinch-to-zoom */
    display: block;
    width: 100%;
    height: auto;
    /* Allow native zoom behavior on mobile */
    touch-action: pan-y pinch-zoom;
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
  const imgRef = useRef(null);

  useEffect(() => {
    if (!imgRef.current) return;

    // Preload image when it's 500px away from viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Image is near viewport, Next.js will handle loading
            observer.disconnect();
          }
        });
      },
      {
        rootMargin: '500px', // Start loading 500px before image enters viewport
      },
    );

    observer.observe(imgRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <ImgWrap ref={imgRef}>
      <Image
        {...props}
        className={loaded ? 'loaded' : ''}
        onLoadingComplete={() => setLoaded(true)}
      />
    </ImgWrap>
  );
}

// Plain page (no global header/footer)
function Ceremony({ images }) {
  return (
    <>
      <Head>
        <title>Mr & Mrs Scott — Ceremony Photos</title>
        <meta name='robots' content='noindex' />
        <meta
          property='og:url'
          content='https://photos.thescottwedding.co.uk/'
        />
        <meta
          property='og:image'
          content='https://photos.thescottwedding.co.uk/photos-og.jpg'
        />
        <meta property='og:image:width' content='1200' />
        <meta property='og:image:height' content='630' />
      </Head>
      <GlobalStyles />
      <Page id='top'>
        <HeroWrapper>
          <HeroContainer>
            <HeroImage
              src='/images/photo-hero-ceremony.png'
              alt=''
              width={700}
              height={1000}
              priority
            />
            <MrAndMrsImage src='/images/mr-and-mrs-ceremony.svg' />
            <DownArrow>↓</DownArrow>
          </HeroContainer>
        </HeroWrapper>
        <Photos>
          <Inner>
            {images.map((img, i) => (
              <Figure key={img.src}>
                <FadeImage
                  src={img.src}
                  alt={img.alt || 'Ceremony photo'}
                  width={img.width}
                  height={img.height}
                  sizes='(min-width: 1080px) 1350px, 125vw'
                  priority={i < 5}
                  placeholder={img.blurDataURL ? 'blur' : 'empty'}
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

Ceremony.noLayout = true;
export default Ceremony;

// Build-time: read images, get dimensions, make blurDataURL
export async function getStaticProps() {
  const fs = await import('fs');
  const path = await import('path');
  const { imageSize } = await import('image-size');
  const sharp = (await import('sharp')).default;

  const dir = path.join(process.cwd(), 'public', 'photos');
  const exists = fs.existsSync(dir);
  const all = exists ? fs.readdirSync(dir) : [];

  const allow = new Set(['.jpg', '.jpeg', '.png', '.webp', '.avif']);
  const files = all
    .filter((name) => {
      const filePath = path.join(dir, name);
      // Exclude subdirectories (like 'registry')
      if (fs.statSync(filePath).isDirectory()) {
        return false;
      }
      const ext = path.extname(name).toLowerCase();
      return allow.has(ext);
    })
    .sort((a, b) =>
      a.localeCompare(b, 'en', { numeric: true, sensitivity: 'base' }),
    );

  const images = await Promise.all(
    files.map(async (name, index) => {
      const abs = path.join(dir, name);
      const buf = fs.readFileSync(abs);
      const { width, height } = imageSize(buf) || {};

      // Only generate blurDataURL for first 5 images (priority images) to reduce page data size
      const baseImage = {
        src: `/photos/${name}`,
        width: width || 2160,
        height: height || Math.round((height / width) * 2160) || 1440,
        alt: path.parse(name).name.replace(/[-_]/g, ' '),
      };

      if (index < 5) {
        const blurBuffer = await sharp(buf).resize(10).blur().toBuffer();
        baseImage.blurDataURL = `data:image/jpeg;base64,${blurBuffer.toString('base64')}`;
      }

      return baseImage;
    }),
  );

  return { props: { images } };
}
