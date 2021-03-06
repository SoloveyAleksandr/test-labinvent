import styles from './SVGSampler.module.css';

function SVGSampler() {
  return (
    <svg
      width="146"
      height="108"
      viewBox="0 0 73 95"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
      {/* <g
        className={styles.by_pass}
        id="by_pass"
        fill="none">
        <line y1="-0.5" x2="41" y2="-0.5" transform="translate(29 5)" stroke="#00ABEE" />
        <line y1="-0.5" x2="41" y2="-0.5" transform="translate(29 89)" stroke="#00ABEE" />
        <line y1="-0.5" x2="85" y2="-0.5" transform="matrix(-4.37114e-08 1 -1 -4.37114e-08 70 4)" stroke="#00ABEE" />
        <line y1="-0.5" x2="4" y2="-0.5" transform="matrix(0 1 -1 0 29 1)" stroke="#00ABEE" />
        <line y1="-0.5" x2="4" y2="-0.5" transform="matrix(0 1 -1 0 29 88)" stroke="#00ABEE" />
        <path fillRule="evenodd" clipRule={'evenodd'}
          d="M 29 0.5L 5 0.5C 3.067 0.5 1.5 2.067 1.5 4L 1.5 6C 1.5 7.933 3.067 9.5 5 9.5L 7 9.5C 7.82843 9.5 8.5 10.1716 8.5 11L 8.5 16C 8.5 16.8284 7.82843 17.5 7 17.5L 4 17.5C 2.067 17.5 0.5 19.067 0.5 21L 0.5 72C 0.5 73.933 2.067 75.5 4 75.5L 30 75.5C 31.933 75.5 33.5 73.933 33.5 72L 33.5 21C 33.5 19.067 31.933 17.5 30 17.5L 27 17.5C 26.1716 17.5 25.5 16.8284 25.5 16L 25.5 11C 25.5 10.1716 26.1716 9.5 27 9.5L 29 9.5C 30.933 9.5 32.5 7.933 32.5 6L 32.5 4C 32.5 2.067 30.933 0.5 29 0.5Z"
          strokeMiterlimit={8} transform="translate(13 9)" stroke="#00ABEE" />
        <line y1="-0.5" x2="9" y2="-0.5" transform="matrix(-4.37114e-08 1 -1 -4.37114e-08 29 19)" stroke="#24384B" />
        <rect x="0.5" y="0.5" width="6" height="2" rx="0.5" transform="translate(26 16)" stroke="#24384B" />
        <rect x="0.5" y="0.5" width="12" height="2" rx="0.5" transform="translate(23 28)" stroke="#24384B" />
        <path fillRule="evenodd" clipRule={'evenodd'}
          d="M 8.5 0.5L 0.5 0.5L 0.5 25.5C 0.5 27.7091 2.29086 29.5 4.5 29.5C 6.70914 29.5 8.5 27.7091 8.5 25.5L 8.5 0.5Z"
          strokeMiterlimit={8} transform="translate(25 30)" stroke="#24384B" />
        <rect width="3" height="3" transform="translate(28 59)" fill="#24384B" />
        <line y1="-0.5" x2="17" y2="-0.5" transform="matrix(-4.37114e-08 1 -1 -4.37114e-08 29 62)" stroke="#24384B" />
        <line y1="-0.5" x2="22" y2="-0.5" transform="matrix(-4.37114e-08 1 -1 -4.37114e-08 29 34)" stroke="#24384B" />
        <line y1="-0.5" x2="4" y2="-0.5" transform="translate(27 54)" stroke="#24384B" />
        <line y1="-0.5" x2="4" y2="-0.5" transform="translate(27 48)" stroke="#24384B" />
        <line y1="-0.5" x2="4" y2="-0.5" transform="translate(27 42)" stroke="#24384B" />
        <line y1="-0.5" x2="4" y2="-0.5" transform="translate(27 36)" stroke="#24384B" />
        <line y1="-0.5" x2="2" y2="-0.5" transform="matrix(1 8.74228e-08 -8.74228e-08 1 29 39)" stroke="#24384B" />
        <line y1="-0.5" x2="2" y2="-0.5" transform="matrix(1 8.74228e-08 -8.74228e-08 1 29 45)" stroke="#24384B" />
        <line y1="-0.5" x2="2" y2="-0.5" transform="matrix(1 8.74228e-08 -8.74228e-08 1 29 51)" stroke="#24384B" />
      </g> */}
      {/* <g
        id="main_pass"
        fill="none">
        <path fillRule="evenodd" clipRule={'evenodd'}
          d="M 29 0.5L 5 0.5C 3.067 0.5 1.5 2.067 1.5 4L 1.5 6C 1.5 7.933 3.067 9.5 5 9.5L 7 9.5C 7.82843 9.5 8.5 10.1716 8.5 11L 8.5 16C 8.5 16.8284 7.82843 17.5 7 17.5L 4 17.5C 2.067 17.5 0.5 19.067 0.5 21L 0.5 72C 0.5 73.933 2.067 75.5 4 75.5L 30 75.5C 31.933 75.5 33.5 73.933 33.5 72L 33.5 21C 33.5 19.067 31.933 17.5 30 17.5L 27 17.5C 26.1716 17.5 25.5 16.8284 25.5 16L 25.5 11C 25.5 10.1716 26.1716 9.5 27 9.5L 29 9.5C 30.933 9.5 32.5 7.933 32.5 6L 32.5 4C 32.5 2.067 30.933 0.5 29 0.5Z"
          strokeMiterlimit={8} transform="translate(13 9)" stroke="#00ABEE" />
        <line y1="-0.5" x2="9" y2="-0.5" transform="matrix(-4.37114e-08 1 -1 -4.37114e-08 29 19)" stroke="#24384B" />
        <rect x="0.5" y="0.5" width="6" height="2" rx="0.5" transform="translate(26 16)" stroke="#24384B" />
        <rect x="0.5" y="0.5" width="12" height="2" rx="0.5" transform="translate(23 28)" stroke="#24384B" />
        <path fillRule="evenodd" clipRule={'evenodd'}
          d="M 8.5 0.5L 0.5 0.5L 0.5 25.5C 0.5 27.7091 2.29086 29.5 4.5 29.5C 6.70914 29.5 8.5 27.7091 8.5 25.5L 8.5 0.5Z"
          strokeMiterlimit={8} transform="translate(25 30)" stroke="#24384B" />
        <rect width="3" height="3" transform="translate(28 59)" fill="#24384B" />
        <line y1="-0.5" x2="17" y2="-0.5" transform="matrix(-4.37114e-08 1 -1 -4.37114e-08 29 62)" stroke="#24384B" />
        <line y1="-0.5" x2="22" y2="-0.5" transform="matrix(-4.37114e-08 1 -1 -4.37114e-08 29 34)" stroke="#24384B" />
        <line y1="-0.5" x2="4" y2="-0.5" transform="translate(27 54)" stroke="#24384B" />
        <line y1="-0.5" x2="4" y2="-0.5" transform="translate(27 48)" stroke="#24384B" />
        <line y1="-0.5" x2="4" y2="-0.5" transform="translate(27 42)" stroke="#24384B" />
        <line y1="-0.5" x2="4" y2="-0.5" transform="translate(27 36)" stroke="#24384B" />
        <line y1="-0.5" x2="2" y2="-0.5" transform="matrix(1 8.74228e-08 -8.74228e-08 1 29 39)" stroke="#24384B" />
        <line y1="-0.5" x2="2" y2="-0.5" transform="matrix(1 8.74228e-08 -8.74228e-08 1 29 45)" stroke="#24384B" />
        <line y1="-0.5" x2="2" y2="-0.5" transform="matrix(1 8.74228e-08 -8.74228e-08 1 29 51)" stroke="#24384B" />
        <line y1="-0.5" x2="41" y2="-0.5" transform="translate(29 5)" stroke="#00ABEE" />
        <line y1="-0.5" x2="41" y2="-0.5" transform="translate(29 89)" stroke="#00ABEE" />
        <line y1="-0.5" x2="4" y2="-0.5" transform="matrix(0 1 -1 0 29 5)" stroke="#00ABEE" />
        <line y1="-0.5" x2="4" y2="-0.5" transform="matrix(0 1 -1 0 29 85)" stroke="#00ABEE" />
      </g> */}
      <g
        className={styles.injection}
        id="injection"
        fill="none">

        <line y1="-0.5" x2="41" y2="-0.5" transform="translate(29 5)" stroke="#00ABEE" />
        <line y1="-0.5" x2="41" y2="-0.5" transform="translate(29 89)" stroke="#00ABEE" />
        <line y1="-0.5" x2="85" y2="-0.5" transform="matrix(-4.37114e-08 1 -1 -4.37114e-08 70 4)" stroke="#00ABEE" />
        <line y1="-0.5" x2="4" y2="-0.5" transform="matrix(0 1 -1 0 29 1)" stroke="#00ABEE" />
        <line y1="-0.5" x2="4" y2="-0.5" transform="matrix(0 1 -1 0 29 88)" stroke="#00ABEE" />

        <g id='bottle'>
          <path fillRule="evenodd" clipRule={'evenodd'}
            d="M 12.1509 0.5L 2.84907 0.5C 1.79537 0.5 0.941176 1.35419 0.941176 2.40789C 0.941176 3.4616 1.79537 4.31579 2.84907 4.31579L 2.91176 4.31579C 3.52902 4.31579 4.02941 4.81618 4.02941 5.43344L 4.02941 6.78096C 4.02941 7.44695 3.48952 7.98684 2.82353 7.98684C 1.54028 7.98684 0.5 9.02712 0.5 10.3104L 0.5 25C 0.5 26.933 2.067 28.5 4 28.5L 11 28.5C 12.933 28.5 14.5 26.933 14.5 25L 14.5 10.3104C 14.5 9.02712 13.4597 7.98684 12.1765 7.98684C 11.5105 7.98684 10.9706 7.44695 10.9706 6.78096L 10.9706 5.43344C 10.9706 4.81618 11.471 4.31579 12.0882 4.31579L 12.1509 4.31579C 13.2046 4.31579 14.0588 3.4616 14.0588 2.40789C 14.0588 1.35419 13.2046 0.5 12.1509 0.5Z"
            strokeMiterlimit={8} transform="translate(22 56)" stroke="#B0B1C5" />
        </g>
        <line x1="0.5" y1="-0.5" x2="7.5" y2="-0.5" strokeLinecap="round" transform="translate(25.5 61)" stroke="#B0B1C5" />
        <path d="M 0 2.23915e-06L 3.5 0" transform="matrix(-4.37114e-08 1 -1 -4.37114e-08 29.5 10)" stroke="#24384B" />
        <rect x="0.5" y="0.5" width="6" height="2" rx="0.5" transform="translate(26 7)" stroke="#24384B" />
        <rect x="0.5" y="0.5" width="12" height="2" rx="0.5" transform="translate(23 13)" stroke="#24384B" />
        <path fillRule="evenodd" clipRule={'evenodd'}
          d="M 8.5 0.5L 0.5 0.5L 0.5 25.5C 0.5 27.7091 2.29086 29.5 4.5 29.5C 6.70914 29.5 8.5 27.7091 8.5 25.5L 8.5 0.5Z"
          strokeMiterlimit={8} transform="translate(25 15)" stroke="#24384B" />
        <rect width="3" height="3" transform="translate(28 44)" fill="#24384B" />
        <path d="M 0 7.9076e-06L 8 -3.49691e-07" transform="matrix(-4.37114e-08 1 -1 -4.37114e-08 29.5 47)"
          stroke="#24384B" />

        <line y1="-0.5" x2="22" y2="-0.5" transform="matrix(-4.37114e-08 1 -1 -4.37114e-08 29 19)" stroke="#24384B" />
        <line y1="-0.5" x2="4" y2="-0.5" transform="translate(27 39)" stroke="#24384B" />
        <line y1="-0.5" x2="4" y2="-0.5" transform="translate(27 33)" stroke="#24384B" />
        <line y1="-0.5" x2="4" y2="-0.5" transform="translate(27 27)" stroke="#24384B" />
        <line y1="-0.5" x2="4" y2="-0.5" transform="translate(27 21)" stroke="#24384B" />
        <line y1="-0.5" x2="2" y2="-0.5" transform="matrix(1 8.74228e-08 -8.74228e-08 1 29 24)" stroke="#24384B" />
        <line y1="-0.5" x2="2" y2="-0.5" transform="matrix(1 8.74228e-08 -8.74228e-08 1 29 30)" stroke="#24384B" />
        <line y1="-0.5" x2="2" y2="-0.5" transform="matrix(1 8.74228e-08 -8.74228e-08 1 29 36)" stroke="#24384B" />

      </g>

      <g className={styles.bottle}>
        <use href='#bottle' />
      </g>


      <g
        data-name="plus-circle"
        fill="#12a9eb"
        transform="translate(87, 75) scale(0.6)">
        <rect width="24" height="24" opacity="0" fill="#12a9eb" className="color000 svgShape">
        </rect>
        <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm3 11h-2v2a1 1 0 0 1-2 0v-2H9a1 1 0 0 1 0-2h2V9a1 1 0 0 1 2 0v2h2a1 1 0 0 1 0 2z" fill="#12a9eb" className="color000 svgShape">
        </path>
      </g>

    </svg>


  );
}

export default SVGSampler;
