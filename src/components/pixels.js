import styled, { keyframes } from 'styled-components';

const StyledDiv = styled.div``;

const flickerAnimation = () => keyframes`
0% {
      opacity: 1;
    }
    18% {
      opacity: 1;
    }
    19% {
      opacity: 0;
    }
    20% {
      opacity: 1;
    }
    96% {
      opacity: 1;
    }
    97% {
      opacity: 0;
    }
    98% {
      opacity: 1;
    }
`;

const pixelGlobeAnimation = () => keyframes`
from {
      transform: translatex(0px);
    }
    to {
      transform: translatex(-123px);
    }
`;

const PixelGlobeWrapper = styled(StyledDiv)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 63px;
  width: 66px;
  animation: ${flickerAnimation} 3s infinite;

  .countries-container {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    position: absolute;
    height: 96%;
    width: 96%;
    border-radius: 100%;
    overflow: hidden;
    z-index: 2;
  }

  .countries {
    position: absolute;
    animation: ${pixelGlobeAnimation} 5s steps(24) infinite;
  }

  .globe {
    position: absolute;
    filter: ${(props) => props.theme.glowLiteDS};
  }
`;

export const PixelGlobe = () => {
  return (
    <PixelGlobeWrapper id="icon">
      <div className="countries-container">
        <svg
          className="countries"
          width="246"
          height="60"
          viewBox="0 0 246 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M39 0V6H42V9H36V12H33V15H24V9H21V6H12V9H9V3H6V6H0V9H3V12H12V15H15V24H18V27H21V30H24V33H27V42H30V45H33V48H36V60H39V57H42V51H45V42H48V39H45V36H36V33H27V27H30V24H36V15H42V9H45V6H48V3H51V0H39Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M90 3V9H84V6H75V9H72V6H63V9H72V12H69V15H63V12H57V24H60V27H57V30H54V33H60V36H63V45H66V51H69V48H72V45H75V30H72V27H81V30H87V33H90V30H93V33H96V36H99V27H102V21H105V15H108V9H126V12H135V15H138V24H141V27H144V30H147V33H150V42H153V45H156V48H159V60H162V57H165V51H168V42H171V39H168V36H159V33H150V27H153V24H159V15H165V9H168V6H171V3H174V0H162V6H165V9H159V12H156V15H147V9H144V6H135V9H132V3H129V6H117V3H90ZM60 24V21H63V18H66V21H69V18H81V24H78V21H72V24H60Z"
            fill="currentColor"
          />
          <path d="M108 19H111V25H105V22H108V19Z" fill="currentColor" />
          <path d="M96 39H99V42H96V39Z" fill="currentColor" />
          <path d="M111 42H108V39H105V42H108V45H111V42Z" fill="currentColor" />
          <path
            d="M111 48V51H114V57H108V54H102V51H105V48H111Z"
            fill="currentColor"
          />
          <path d="M102 54V57H99V54H102Z" fill="currentColor" />
          <path d="M75 48H78V51H75V48Z" fill="currentColor" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M186 12H180V24H183V27H180V30H177V33H183V36H186V45H189V51H192V48H195V45H198V30H195V27H204V30H210V33H213V30H216V33H219V36H222V27H225V21H228V15H231V9H246V6H240V3H213V9H207V6H198V9H195V6H186V9H195V12H192V15H186V12ZM183 24V21H186V18H189V21H192V18H204V24H201V21H195V24H183Z"
            fill="currentColor"
          />
          <path d="M231 19H234V25H228V22H231V19Z" fill="currentColor" />
          <path d="M219 39H222V42H219V39Z" fill="currentColor" />
          <path d="M234 42H231V39H228V42H231V45H234V42Z" fill="currentColor" />
          <path
            d="M234 48V51H237V57H231V54H225V51H228V48H234Z"
            fill="currentColor"
          />
          <path d="M225 54V57H222V54H225Z" fill="currentColor" />
          <path d="M198 48H201V51H198V48Z" fill="currentColor" />
        </svg>
      </div>
      <svg
        className="globe"
        width="66"
        height="63"
        viewBox="0 0 66 63"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M30 0H27H24V3H21H18H15V6H12V9H9V12H6V15H3V18V21H0V24V27V30V33V36V39V42H3V45L3 48H6L6 51H9V54H12V57H15V60H18H21H24V63H27H30H33H36H39H42V60H45H48H51V57H54V54H57V51H60V48H63V45V42H66V39V36V33V30V27V24V21H63V18V15H60V12H57V9H54V6H51V3H48H45H42V0H39H36H33H30ZM42 3V6H45H48H51V9H54V12V15H57H60V18V21H63V24V27V30V33V36V39V42H60V45V48H57H54V51H51V54V57H48H45H42V60H39H36H33H30H27H24V57H21H18H15V54V51H12V48H9H6V45V42H3L3 39V36V33V30V27V24V21H6V18H9V15V12H12V9H15V6H18H21H24V3H27H30H33H36H39H42Z"
          fill="currentColor"
        />
      </svg>
    </PixelGlobeWrapper>
  );
};

const waveAnimation = () => keyframes`
  from {
    transform: translatex(0px);
  }
  to {
    transform: translatex(-123px);
  }
`;

const PixelComputerWrapper = styled(StyledDiv)`
  animation: ${flickerAnimation} 3s infinite;
  position: relative;

  .doLogo {
    animation: ${flickerAnimation} 5s infinite;
    margin-bottom: 6px;
    position: relative;
    display: flex;
    justify-content: center;
  }

  .computer-container {
    height: 63px;
    width: 66px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    .wave-container {
      height: 60%;
      width: 80%;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      position: absolute;
      top: 8px;
      overflow: hidden;

      .wave {
        position: absolute;
        animation: ${waveAnimation} 4s steps(16) infinite;
      }
    }

    .computer {
      position: absolute;
    }
  }

  .glow {
    filter: ${(props) => props.theme.glowLiteDS};
  }
`;

export const PixelComputer = () => {
  return (
    <PixelComputerWrapper id="icon">
      <div className="doLogo">
        <svg
          className="glow"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M6 0H18V3H6V0Z" fill="currentColor" />
          <path d="M3 6V3H6V6H3Z" fill="currentColor" />
          <path d="M3 6V12H0V6H3Z" fill="currentColor" />
          <path d="M21 6H18V3H21V6Z" fill="currentColor" />
          <path d="M21 18V6H24V18H21Z" fill="currentColor" />
          <path d="M18 21V18H21V21H18Z" fill="currentColor" />
          <path d="M9 21H18V24H9V21Z" fill="currentColor" />
          <path d="M6 21V18H9V21H6Z" fill="currentColor" />
          <path d="M3 21H6V24H3V21Z" fill="currentColor" />
          <path d="M3 21H0V18H3V21Z" fill="currentColor" />
        </svg>
      </div>
      <div className="computer-container">
        <div className="wave-container">
          <svg
            className="wave"
            width="252"
            height="60"
            viewBox="0 0 252 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 33H0V36H3L3 39H15V36L27 36V39H39V36L41.9999 36V33H38.9999L39 36H27V33H15V36H3V33Z"
              fill="currentColor"
            />
            <path
              d="M57 33H41.9999V36H57V39H63V36H72V39H87V36L99 36V39H105V36H111V39H120V36H129V39H141V36L153 36V39H165V36L168 36V33H165L165 36H153V33H141V36L129 36V33H120V36L111 36V33H105V36H99V33H87V36H72V33H63V36L57 36V33Z"
              fill="currentColor"
            />
            <path
              d="M183 33H168V36H183V39H189V36H198V39H213V36L225 36V39H231V36H237V39H246V36L252 36V33H246V36L237 36V33H231V36H225V33H213V36H198V33H189V36L183 36V33Z"
              fill="currentColor"
            />
          </svg>
        </div>
        <svg
          className="computer glow"
          width="66"
          height="66"
          viewBox="0 0 66 66"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6 0H9H12H15H18H21H24H27H30H33H36H39H42H45H48H51H54H57H60V3H57H54H51H48H45H42H39H36H33H30H27H24H21H18H15H12H9H6V0ZM3 6V3H6V6H3ZM3 48H0V45V42V39V36V33V30V27V24V21V18V15V12V9V6H3V9V12V15V18V21V24V27V30V33V36V39V42V45V48ZM6 51H3V48H6V51ZM42 51H39H36H33H30H27H24H21H18H15H12H9H6V54H3V57H0V60V63H3V66H6H9H12H15H18H21H24H27H30H33H36H39H42H45H48H51H54H57V63H60V66H63V63H66V60V57H63V54H60V51H63V48H66V45V42V39V36V33V30V27V24V21V18V15V12V9V6H63V3H60V6H63V9V12V15V18V21V24V27V30V33V36V39V42V45V48H60V51H57H54H51H48H45H42ZM42 54H39H36H33H30H27H24H21H18H15H12H9H6V57H3V60V63H6H9H12H15H18H21H24H27H30H33H36H39H42H45H48H51H54H57V60V57H60V60V63H63V60V57H60V54H57H54H51H48H45H42ZM57 30V27V24V21V18V15V12V9H60V12V15V18V21V24V27V30V33V36V39V42V45H57V42V39V36V33V30ZM9 45H12H15H18H21H24H27H30H33H36H39H42H45H48H51H54H57V48H54H51H48H45H42H39H36H33H30H27H24H21H18H15H12H9V45ZM9 45H6V42H9V45ZM9 9V6H12H15H18H21H24H27H30H33H36H39H42H45H48H51H54H57V9H54H51H48H45H42H39H36H33H30H27H24H21H18H15H12H9ZM9 9V12H6V9H9ZM12 57H9V60H12V57ZM15 57H18H21H24V60H21H18H15V57Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </PixelComputerWrapper>
  );
};

const octopusAnimation = () => keyframes`
  from {
    transform: translatex(0px);
  }
  to {
    transform: translatex(-480px);
  }
`;

const PixelPusWrapper = styled(StyledDiv)`
  width: 120px;
  overflow: hidden;
  animation: ${flickerAnimation} 3s infinite;

  svg {
    animation: ${octopusAnimation} 1.5s steps(4) infinite;
    filter: ${(props) => props.theme.glowLiteDS};
  }
`;

export const PixelPus = () => {
  return (
    <PixelPusWrapper id="icon">
      <svg
        width="480"
        height="120"
        viewBox="0 0 480 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M78 12H81V15H78V12Z" fill="#B4FF39" />
        <path
          d="M84 18V21H93V24H84V27H93V30H102V27H93V24H102V21H93V18H84Z"
          fill="#B4FF39"
        />
        <path d="M81 39H78V18H81V39Z" fill="#B4FF39" />
        <path d="M78 42H81V51H78V42Z" fill="#B4FF39" />
        <path d="M198 9H201V12H198V9Z" fill="#B4FF39" />
        <path d="M201 15H198V36H201V15Z" fill="#B4FF39" />
        <path d="M198 39H201V48H198V39Z" fill="#B4FF39" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M204 15V18H213V21H204V24H213V27H219V30H222V27H219V24H222V21H219V18H213V15H204ZM219 21V24H213V21H219Z"
          fill="#B4FF39"
        />
        <path d="M318 6H321V9H318V6Z" fill="#B4FF39" />
        <path d="M321 12H318V33H321V12Z" fill="#B4FF39" />
        <path d="M318 36H321V45H318V36Z" fill="#B4FF39" />
        <path
          d="M324 12V15H333V18H324V21H333V18H342V15H333V12H342V9H333V12H324Z"
          fill="#B4FF39"
        />
        <path d="M438 15H441V18H438V15Z" fill="#B4FF39" />
        <path d="M441 21H438V42H441V21Z" fill="#B4FF39" />
        <path d="M438 45H441V54H438V45Z" fill="#B4FF39" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M444 21V24H453V27H444V30H453V27H459V24H462V21H459V18H462V15H459V18H453V21H444ZM453 21H459V24H453V21Z"
          fill="#B4FF39"
        />
        <path d="M57 18H60V21H57V18Z" fill="currentColor" />
        <path d="M57 21V24H54V21H57Z" fill="currentColor" />
        <path d="M63 24H60V21H63V24Z" fill="currentColor" />
        <path d="M66 27H63V24H66V27Z" fill="currentColor" />
        <path d="M66 33V27H69V33H66Z" fill="currentColor" />
        <path d="M45 72V69H42V66H45V60H48V72H45Z" fill="currentColor" />
        <path d="M45 42H42V39H45V42Z" fill="currentColor" />
        <path d="M39 42H42V45H39V42Z" fill="currentColor" />
        <path d="M39 42V39H36V42H39Z" fill="currentColor" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M69 45V36H66V33H63V39H60V36H51V33H45V30H42V27H39V24H24V27H21V30H18V33H15V42H18V48H21V51H24V54H18V57H15V51H12V48H9V51H12V57H15V60H18V57H24V60H30V57H39V54H45V57H42V60H36V63H24V66H21V69H18V72H15V78H18V81H15V84H18V81H21V78H18V72H21V69H33V72H42V75H36V78H30V81H27V84H24V90H27V93H33V90H36V93H39V90H36V87H33V90H27V84H45V81H48V78H51V75H54V81H51V90H54V93H57V96H60V99H66V96H75V102H69V105H66V108H69V105H75V102H78V96H75V93H69V90H63V75H66V72H69V75H72V78H93V84H87V81H84V84H87V87H93V84H96V78H93V75H87V72H93V69H96V66H105V63H108V57H111V54H108V51H105V45H108V48H111V45H108V42H105V45H102V51H105V54H108V57H102V60H93V63H84V60H81V54H78V45H75V48H72V45H69ZM69 45H60V42H57V39H51V36H45V33H42V30H39V27H24V30H21V33H18V42H21V48H24V51H27V54H39V51H45V54H48V57H45V60H42V63H36V66H39V69H42V72H45V75H42V78H36V81H45V78H48V75H51V72H54V75H57V81H54V90H57V93H60V96H66V93H63V90H60V66H63V63H75V66H78V69H93V66H84V63H81V60H78V54H75V51H72V48H69V45Z"
          fill="currentColor"
        />
        <path d="M84 33H81V36H84V39H87V36H84V33Z" fill="currentColor" />
        <path d="M81 51V42H84V51H81Z" fill="currentColor" />
        <path d="M75 39H81V42H75V39Z" fill="currentColor" />
        <path d="M75 36V39H72V36H75Z" fill="currentColor" />
        <path d="M75 36V33H78V36H75Z" fill="currentColor" />
        <path d="M165 72V69H162V66H165V60H168V72H165Z" fill="currentColor" />
        <path d="M162 39H165V42H162V39Z" fill="currentColor" />
        <path d="M159 42H162V45H159V42Z" fill="currentColor" />
        <path d="M159 42H156V39H159V42Z" fill="currentColor" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M177 18H174V21H177V24H183V27H186V33H183V39H180V36H171V33H165V30H162V27H159V24H144V27H141V30H138V33H135V42H138V48H141V51H144V54H138V57H135V54H132V51H129V48H126V51H129V54H132V57H135V60H138V57H144V60H150V57H159V54H165V57H162V60H156V63H144V66H141V69H138V72H135V78H132V81H129V84H132V81H135V78H138V72H141V69H153V72H162V75H156V78H150V81H147V84H144V90H147V93H150V96H153V99H159V96H153V93H150V90H147V84H165V81H168V78H171V75H174V81H171V90H174V93H177V96H180V99H186V96H195V102H198V108H195V111H198V108H201V102H198V96H195V93H189V90H183V75H186V72H189V75H192V78H213V84H216V87H219V90H216V93H219V90H222V87H219V84H216V78H213V75H207V72H213V69H216V66H225V63H228V57H231V51H228V45H231V42H234V39H231V42H228V45H225V51H228V57H222V60H213V63H204V60H201V54H198V42H195V45H189V36H186V33H189V27H186V24H183V21H177V18ZM189 45H180V42H177V39H171V36H165V33H162V30H159V27H144V30H141V33H138V42H141V48H144V51H147V54H159V51H165V54H168V57H165V60H162V63H156V66H159V69H162V72H165V75H162V78H156V81H165V78H168V75H171V72H174V75H177V81H174V90H177V93H180V96H186V93H183V90H180V66H183V63H195V66H198V69H213V66H204V63H201V60H198V54H195V48H189V45Z"
          fill="currentColor"
        />
        <path d="M201 30H204V33H201V30Z" fill="currentColor" />
        <path d="M204 33H207V36H204V33Z" fill="currentColor" />
        <path
          d="M201 36H195V33H198V30H195V33H192V36H195V39H201V48H204V39H201V36Z"
          fill="currentColor"
        />
        <path d="M297 18H300V21H297V18Z" fill="currentColor" />
        <path d="M297 21V24H294V21H297Z" fill="currentColor" />
        <path d="M303 24H300V21H303V24Z" fill="currentColor" />
        <path d="M306 27H303V24H306V27Z" fill="currentColor" />
        <path d="M306 33V27H309V33H306Z" fill="currentColor" />
        <path d="M285 72V69H282V66H285V60H288V72H285Z" fill="currentColor" />
        <path d="M285 39V42H276V39H285Z" fill="currentColor" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M309 45V36H306V33H303V39H300V36H291V33H285V30H282V27H279V24H264V27H261V30H258V33H255V42H258V48H261V51H264V54H258V57H255V51H252V48H249V51H252V57H255V60H258V57H264V60H270V57H279V54H285V57H282V60H276V63H264V66H261V69H258V72H255V78H258V81H255V84H258V81H261V78H258V72H261V69H273V72H282V75H276V78H270V81H267V84H264V90H267V93H273V90H276V93H279V90H276V87H273V90H267V84H285V81H288V78H291V75H294V81H291V90H294V93H297V96H300V99H306V96H315V102H309V108H312V105H315V102H318V96H315V93H309V90H303V75H306V72H309V75H312V78H333V84H327V81H324V84H327V87H333V84H336V78H333V75H327V72H333V69H336V66H345V63H348V57H351V54H348V51H345V45H348V48H351V45H348V42H345V45H342V51H345V54H348V57H342V60H333V63H324V60H321V54H318V39H315V45H309ZM309 45H300V42H297V39H291V36H285V33H282V30H279V27H264V30H261V33H258V42H261V48H264V51H267V54H279V51H285V54H288V57H285V60H282V63H276V66H279V69H282V72H285V75H282V78H276V81H285V78H288V75H291V72H294V75H297V81H294V90H297V93H300V96H306V93H303V90H300V66H303V63H315V66H318V69H333V66H324V63H321V60H318V54H315V48H309V45Z"
          fill="currentColor"
        />
        <path d="M324 27H321V30H324V33H327V30H324V27Z" fill="currentColor" />
        <path d="M321 33V36H315V33H321Z" fill="currentColor" />
        <path d="M315 30V33H312V30H315Z" fill="currentColor" />
        <path d="M315 30V27H318V30H315Z" fill="currentColor" />
        <path d="M321 36H324V45H321V36Z" fill="currentColor" />
        <path d="M414 18H417V21H414V18Z" fill="currentColor" />
        <path d="M423 24H417V21H423V24Z" fill="currentColor" />
        <path d="M426 27H423V24H426V27Z" fill="currentColor" />
        <path d="M426 33V27H429V33H426Z" fill="currentColor" />
        <path
          d="M411 36H420V39H423V33H426V36H429V45H420V42H417V39H411V36Z"
          fill="currentColor"
        />
        <path d="M405 33H411V36H405V33Z" fill="currentColor" />
        <path d="M402 30H405V33H402V30Z" fill="currentColor" />
        <path d="M399 27H402V30H399V27Z" fill="currentColor" />
        <path d="M384 27V24H399V27H384Z" fill="currentColor" />
        <path d="M381 30V27H384V30H381Z" fill="currentColor" />
        <path d="M378 33V30H381V33H378Z" fill="currentColor" />
        <path d="M378 42H375V33H378V42Z" fill="currentColor" />
        <path d="M381 48H378V42H381V48Z" fill="currentColor" />
        <path d="M384 51H381V48H384V51Z" fill="currentColor" />
        <path
          d="M399 54H387V51H384V54H378V57H375V54H372V51H369V48H366V51H369V54H372V57H375V60H378V57H384V60H390V57H399V54Z"
          fill="currentColor"
        />
        <path d="M405 54H399V51H405V54Z" fill="currentColor" />
        <path d="M405 57V54H408V57H405Z" fill="currentColor" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M405 60V57H402V60H396V63H384V66H381V69H378V72H375V78H372V81H369V84H372V81H375V78H378V72H381V69H393V72H402V75H396V78H390V81H387V84H384V90H387V93H390V96H393V99H399V96H393V93H390V90H387V84H405V81H408V78H411V75H414V81H411V90H414V93H417V96H420V99H426V96H435V102H438V108H435V111H438V108H441V102H438V96H435V93H429V90H423V75H426V72H429V75H432V78H453V84H456V87H459V90H456V93H459V90H462V87H459V84H456V78H453V75H447V72H453V69H456V66H465V63H468V57H471V51H468V45H471V42H474V39H471V42H468V45H465V51H468V57H462V60H453V63H444V60H441V54H444V45H441V42H435V39H438V36H435V39H432V42H435V45H441V54H438V48H435V51H432V48H429V51H432V54H435V57H438V60H441V63H444V66H453V69H438V66H435V63H423V66H420V90H423V93H426V96H420V93H417V90H414V81H417V75H414V72H411V75H408V78H405V81H396V78H402V75H405V72H408V60H405ZM402 69H399V66H396V63H402V60H405V66H402V69ZM402 69H405V72H402V69Z"
          fill="currentColor"
        />
        <path d="M441 36H444V39H441V36Z" fill="currentColor" />
        <path d="M444 39H447V42H444V39Z" fill="currentColor" />
        <path d="M402 39H405V42H402V39Z" fill="currentColor" />
        <path d="M399 42H402V45H399V42Z" fill="currentColor" />
        <path d="M399 42H396V39H399V42Z" fill="currentColor" />
      </svg>
    </PixelPusWrapper>
  );
};

const coinAnimation = () => keyframes`
  from {
    transform: translatex(0px);
  }
  to {
    transform: translatex(-1080px);
  }
`;

const PixelCoinWrapper = styled(StyledDiv)`
  width: 120px;
  overflow: hidden;
  animation: ${flickerAnimation} 2s infinite;

  svg {
    animation: ${coinAnimation} 3s steps(9) infinite alternate;
    filter: ${(props) => props.theme.glowLiteDS};
  }
`;

export const PixelCoin = () => (
  <PixelCoinWrapper id="icon">
    <svg
      width="1080"
      height="68"
      viewBox="0 0 1080 68"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M58 18H61V21H67V24H70V27H64V24H61V33H67V36H70V45H67V48H61V51H58V48H52V45H49V42H55V45H58V36H52V33H49V24H52V21H58V18ZM64 36V45H61V36H64ZM55 33H58V24H55V33Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M51 3V6H42V9H39V12H36V15H33V18H30V24H27V45H30L30 51H33L33 54H36V57H39V60H42V63H51V66H69V63H78V60H81V57H84V54H87V51H90V45H93V24H90V18H87V15H84V12H81V9H78V6H69V3H51ZM69 6V9H78V12H81V15H84V21H87V24H90V45H87V51H81V54H78V60H69V63H51V60H42V54H39V51H33V45H30L30 24H33V21H36V15H39V12H42V9H51V6H69Z"
        fill="currentColor"
      />
      <path
        d="M178 18H181V21H184V24H187V27H181V33H184V36H187V45H184V48H181V51H178V48H175V45H172V42H178V36H175V33H172V24H175V21H178V18Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M172 6H166V9H163V12H160V15H157V24H154V45H157V54H160V57H163V60H166V63H172V66H187V63H193V60H196V57H199V54H202V45H205V24H202V15H199V12H196V9H193V6H187V3H172V6ZM172 6H187V9H193V12H196V15H199V24H202V45H199V54H196V57H193V60H187V63H172V60H166V57H163V54H160V45H157V24H160V15H163V12H166V9H172V6Z"
        fill="currentColor"
      />
      <path
        d="M298 18H301V24H304V27H301V36H304V45H301V51H298V45H295V42H298V33H295V24H298V18Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M301 3H298V6H295V9H292V12H289V15H286V24H283V45H286V54H289V57H292V60H295V63H298V66H301V63H304V60H307V57H310V54H313V45H316V24H313V15H310V12H307V9H304V6H301V3ZM301 6V9H304V12H307V15H310V24H313V45H310V54H307V57H304V60H301V63H298V60H295V57H292V54H289V45H286V24H289V15H292V12H295V9H298V6H301Z"
        fill="currentColor"
      />
      <path d="M418 18H421V51H418V18Z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M421 3H418V6H415V12H412V24H409V45H412V57H415V63H418V66H421V63H424V57H427V45H430V24H427V12H424V6H421V3ZM421 6V12H424V24H427V45H424V57H421V63H418V57H415V45H412V24H415V12H418V6H421Z"
        fill="currentColor"
      />
      <path d="M538 3H541V63H538V3Z" fill="currentColor" />
      <path d="M658 3H661V6H658V3Z" fill="currentColor" />
      <path d="M655 12V6H658V12H655Z" fill="currentColor" />
      <path d="M652 24V12H655V24H652Z" fill="currentColor" />
      <path d="M652 45H649V24H652V45Z" fill="currentColor" />
      <path d="M655 57H652V45H655V57Z" fill="currentColor" />
      <path d="M658 63H655V57H658V63Z" fill="currentColor" />
      <path d="M661 63V66H658V63H661Z" fill="currentColor" />
      <path d="M664 57V63H661V57H664Z" fill="currentColor" />
      <path d="M667 45V57H664V45H667Z" fill="currentColor" />
      <path d="M667 24H670V45H667V24Z" fill="currentColor" />
      <path d="M664 12H667V24H664V12Z" fill="currentColor" />
      <path d="M664 12V6H661V12H664Z" fill="currentColor" />
      <path d="M661 18H658V51H661V18Z" fill="currentColor" />
      <path d="M778 3H781V6H778V3Z" fill="currentColor" />
      <path d="M775 9V6H778V9H775Z" fill="currentColor" />
      <path d="M772 12V9H775V12H772Z" fill="currentColor" />
      <path d="M769 15V12H772V15H769Z" fill="currentColor" />
      <path d="M766 24V15H769V24H766Z" fill="currentColor" />
      <path d="M766 45H763V24H766V45Z" fill="currentColor" />
      <path d="M769 54H766V45H769V54Z" fill="currentColor" />
      <path d="M772 57H769V54H772V57Z" fill="currentColor" />
      <path d="M775 60H772V57H775V60Z" fill="currentColor" />
      <path d="M778 63H775V60H778V63Z" fill="currentColor" />
      <path d="M781 63V66H778V63H781Z" fill="currentColor" />
      <path d="M784 60V63H781V60H784Z" fill="currentColor" />
      <path d="M787 57V60H784V57H787Z" fill="currentColor" />
      <path d="M790 54V57H787V54H790Z" fill="currentColor" />
      <path d="M793 45V54H790V45H793Z" fill="currentColor" />
      <path d="M793 24H796V45H793V24Z" fill="currentColor" />
      <path d="M790 15H793V24H790V15Z" fill="currentColor" />
      <path d="M787 12H790V15H787V12Z" fill="currentColor" />
      <path d="M784 9H787V12H784V9Z" fill="currentColor" />
      <path d="M784 9V6H781V9H784Z" fill="currentColor" />
      <path
        d="M778 18H781V24H784V33H781V42H784V45H781V51H778V45H775V36H778V27H775V24H778V18Z"
        fill="currentColor"
      />
      <path d="M892 6V3H907V6H892Z" fill="currentColor" />
      <path d="M913 9H907V6H913V9Z" fill="currentColor" />
      <path d="M916 12H913V9H916V12Z" fill="currentColor" />
      <path d="M919 15H916V12H919V15Z" fill="currentColor" />
      <path d="M922 24H919V15H922V24Z" fill="currentColor" />
      <path d="M922 45V24H925V45H922Z" fill="currentColor" />
      <path d="M919 54V45H922V54H919Z" fill="currentColor" />
      <path d="M916 57V54H919V57H916Z" fill="currentColor" />
      <path d="M913 60V57H916V60H913Z" fill="currentColor" />
      <path d="M907 63V60H913V63H907Z" fill="currentColor" />
      <path d="M892 63H907V66H892V63Z" fill="currentColor" />
      <path d="M886 60H892V63H886V60Z" fill="currentColor" />
      <path d="M883 57H886V60H883V57Z" fill="currentColor" />
      <path d="M880 54H883V57H880V54Z" fill="currentColor" />
      <path d="M877 45H880V54H877V45Z" fill="currentColor" />
      <path d="M877 24V45H874V24H877Z" fill="currentColor" />
      <path d="M880 15V24H877V15H880Z" fill="currentColor" />
      <path d="M883 12V15H880V12H883Z" fill="currentColor" />
      <path d="M886 9V12H883V9H886Z" fill="currentColor" />
      <path d="M886 9H892V6H886V9Z" fill="currentColor" />
      <path
        d="M898 18H901V21H904V24H907V33H904V36H901V42H907V45H904V48H901V51H898V48H895V45H892V36H895V33H898V27H892V24H895V21H898V18Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1018 18H1021V21H1027V24H1030V33H1027V36H1021V45H1024V42H1030V45H1027V48H1021V51H1018V48H1012V45H1009V36H1012V33H1018V24H1015V27H1009V24H1012V21H1018V18ZM1015 36H1018V45H1015V36ZM1024 33V24H1021V33H1024Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1011 3V6H1002V9H999V12H996V15H993V18H990V24H987V45H990V51H993V54H996V57H999V60H1002V63H1011V66H1029V63H1038V60H1041V57H1044V54H1047V51H1050V45H1053V24H1050V18H1047V15H1044V12H1041V9H1038V6H1029V3H1011ZM1029 6V9H1038V12H1041V15H1044V21H1047V24H1050V45H1047V51H1041V54H1038V60H1029V63H1011V60H1002V54H999V51H993V45H990V24H993V21H996V15H999V12H1002V9H1011V6H1029Z"
        fill="currentColor"
      />
    </svg>
  </PixelCoinWrapper>
);

const heartAnimation = () => keyframes`
  from {
    transform: translatex(0px);
  }
  to {
    transform: translatex(-240px);
  }
`;

const PixelHeartWrapper = styled(StyledDiv)`
  width: 120px;
  overflow: hidden;
  animation: ${flickerAnimation} 2s infinite;
  transform: scale(4);

  svg {
    // transform: scale(4);
    animation: ${heartAnimation} 0.5s steps(2) infinite alternate;
    filter: ${(props) => props.theme.glowLiteDS};
  }
`;

export const PixelHeart = () => (
  <PixelHeartWrapper>
    <svg
      width="240"
      height="120"
      viewBox="0 0 240 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M84 36H81V33L84 33V36Z" fill="currentColor" />
      <path d="M87 39H84V36H87V39Z" fill="currentColor" />
      <path d="M87 39H90V42H87V39Z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M72 30H69V33H63V36H57V33L51 33V30L48 30V27H30V30L27 30V33L24 33V36H21V60H24V63H27V66H30V69H33V72H36V75H39V78H42V81H45V84H48V87H51V90H54V93H66V90H69V87H72V84H75V81H78V78H81V75H84V72H87V69H90V66H93V63H96V60H99V36H96V33H93V30H90V27H72V30ZM90 30V33L93 33V36H96V60H93V63H87V69H84V72H81V75H78V78H75V81H72V84H69V87H66V90H54V87H51V84H48V81H45V78H42V75H39V72H36V69H33V63H27L27 60H24L24 36H27L27 33H30V30H48V33L51 33V36H57V39H63V36H69V33L72 33V30L90 30Z"
        fill="currentColor"
      />
      <path d="M186 33H192V36H186V33Z" fill="currentColor" />
      <path d="M183 39V36H186V39H183Z" fill="currentColor" />
      <path d="M177 39H183V42H177V39Z" fill="currentColor" />
      <path d="M174 36H177V39H174V36Z" fill="currentColor" />
      <path d="M168 33H174V36H168V33Z" fill="currentColor" />
      <path d="M150 33V30H168V33H150Z" fill="currentColor" />
      <path d="M147 36V33H150V36H147Z" fill="currentColor" />
      <path d="M147 57H144V36H147V57Z" fill="currentColor" />
      <path
        d="M156 69H153V66H150V63H147V57H150V60H153V63H156V69Z"
        fill="currentColor"
      />
      <path d="M159 72H156V69H159V72Z" fill="currentColor" />
      <path d="M162 75H159V72H162V75Z" fill="currentColor" />
      <path d="M165 78H162V75H165V78Z" fill="currentColor" />
      <path d="M174 84H168V81H165V78H171V81H174V84Z" fill="currentColor" />
      <path d="M186 84V87H174V84H186Z" fill="currentColor" />
      <path d="M195 78V81H192V84H186V81H189V78H195Z" fill="currentColor" />
      <path d="M198 75V78H195V75H198Z" fill="currentColor" />
      <path d="M201 72V75H198V72H201Z" fill="currentColor" />
      <path d="M204 69V72H201V69H204Z" fill="currentColor" />
      <path
        d="M213 57V63H210V66H207V69H204V63H207V60H210V57H213Z"
        fill="currentColor"
      />
      <path d="M213 36H216V57H213V36Z" fill="currentColor" />
      <path d="M210 33H213V36H210V33Z" fill="currentColor" />
      <path d="M210 33V30H192V33H210Z" fill="currentColor" />
      <path d="M204 39H201V36H204V39Z" fill="currentColor" />
      <path d="M204 39H207V42H204V39Z" fill="currentColor" />
    </svg>
  </PixelHeartWrapper>
);
